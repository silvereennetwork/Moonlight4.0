module.exports = {
    apps: [
      {
        name: 'index-app',          // Name of the application for index.js
        script: './index.js',       // Script to run
        cwd: './',                  // Current working directory
        exec_mode: 'fork',          // Fork mode
        wait_ready: true,           // Wait until the process sends a ready signal
      },
      {
        name: 'update-app',         // Name of the application for update.js
        script: './update.js',      // Script to run
        cwd: './',                  // Current working directory
        exec_mode: 'fork',          // Fork mode
        wait_ready: true,           // Wait until the process sends a ready signal
      },
    ],
  
    deploy: {
      production: {
        user: 'node',               // SSH user
        host: 'your-server-address',// SSH host
        ref: 'origin/main',         // Git branch to deploy
        repo: 'git@github.com:repo.git',  // Repository URL
        path: '/var/www/production',      // Path on the server
        'post-deploy': 'npm install && pm2 start ecosystem.config.js --only index-app && pm2 start ecosystem.config.js --only update-app',  // Commands to run after deploy
      },
    },
  };
  