module.exports = {
    apps: [
      {
        name: 'nextjs-app',
        script: './node_modules/next/dist/bin/next',
        args: 'start',
        instances: 3,
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  