module.exports = {
    apps : [{
        name: "nuxtjsvue",
        script: "/var/www/nuxtjsvue/index.mjs",
        instances: 12,
        exec_mode: "cluster",
        watch: false,
        max_memory_restart: "4G",
        autorestart: true,
        env: {
            NODE_ENV: "production",
        },
        env_production: {
            NODE_ENV: "production",
        }
    }]
}
