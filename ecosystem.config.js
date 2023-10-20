module.exports = {
  apps: [
    {
      name: 'ucare_ssr',
      watch: ["nuxt.config.js"],
      script: './node_modules/nuxt-start/bin/nuxt-start.js',
      args: "start",	
      instances: '1',
      exec_mode: 'cluster',
      port: 3000,
    },
  ],
}
