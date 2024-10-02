const { createBareServer } = require("@tomphttp/bare-server-node");
const express = require("express");
const proxy = require('express-http-proxy');
const { join } = require('node:path');
const { createServer } = require("node:http");
const { uvPath } = require("@titaniumnetwork-dev/ultraviolet");
const { dynamicPath } = require("@nebula-services/dynamic");
const { hostname } = require("node:os");
const { createProxyMiddleware } = require('http-proxy-middleware');

const bare = createBareServer("/bare/");
const app = express();

app.use("/", express.static("./public"));
app.use("/uv/", express.static(uvPath));
app.use("/chat", express.static('./public/chat.html'));
app.use("/dynamic/", express.static(dynamicPath));
app.use(
	'/cdn',
	proxy(`https://3kh0-assets.silvereen.net/3kh0-assets/`, {
		proxyReqPathResolver: (req) => `/3kh0-assets/${req.url}`,
	})
);

app.use(
	'/api',
	proxy(`https://api.silvereen.net`)
);

app.use((req, res, next) => {
  res.status(404).sendFile(join(__dirname, '/public/404.html'));
});

const server = createServer();

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

let port = parseInt(process.env.PORT || "");

if (isNaN(port)) port = 2002;

server.on("listening", () => {
  const address = server.address();

  // by default we are listening on 0.0.0.0 (every interface)
  // we just need to list a few
  console.log("Listening on:");
  console.log(`\thttp://localhost:${address.port}`);
  console.log(`\thttp://${hostname()}:${address.port}`);
  console.log(`\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address}:${address.port}`);
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  bare.close();
  process.exit(0);
}

server.listen({
  port,
});
