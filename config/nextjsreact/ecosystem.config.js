module.exports = {
    apps : [{
        name: "nextjsreact",
        script: "/var/www/nextjsreact/server.js",
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
