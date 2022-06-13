module.exports = {
  apps: [
    {
      name: 'ui',
      cwd: '.',
      script: 'npm',
      args: 'run start',
    },
  ],
  deploy: {
    production: {
      user: 'adconnect',
      host: '84.201.176.172',
      ref: 'origin/main',
      repo: 'git@github.com:VToreZ/adconnect_front.git',
      path: '/home/adconnect/front',
      'post-deploy': './deploy.sh',
      'post-setup': './setup.sh',
    },
  },
};
