"use strict";

/**
 * @type {HTMLFormElement}
 */
const uvform = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const uvaddress = document.getElementById("uv-address");
/**
 * @type {HTMLFormElement}
 */
const dynamicform = document.getElementById("dynamic-form");
/**
 * @type {HTMLInputElement}
 */
const dynamicaddress = document.getElementById("dynamic-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

uvform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = search(uvaddress.value, searchEngine.value);
  localStorage.setItem("proxy-load", __uv$config.prefix + __uv$config.encodeUrl(url));
  console.log(__uv$config.prefix + __uv$config.encodeUrl(url))
  location.href = "../load.html"
});

dynamicform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = search(dynamicaddress.value, searchEngine.value);
  localStorage.setItem("proxy-load", __dynamic$config.prefix + __uv$config.encodeUrl(url));
  console.log(__dynamic$config.prefix + __uv$config.encodeUrl(url))
  location.href = "../load.html"
});
