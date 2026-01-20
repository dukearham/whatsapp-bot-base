module.exports = {
  apps: [
    {
      name: "base-bot",
      script: "./src/index.js",

      env: {
        SESSION_NAME: "one"
      }
    }
  ]
};
