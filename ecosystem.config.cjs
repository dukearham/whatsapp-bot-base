require("dotenv").config();

const logFolder = `./logs/${process.env.LOG_NAME}/`;
const fs = require("fs");

if (!fs.existsSync(logFolder)) fs.mkdirSync(logFolder, { recursive: true });

module.exports = {
  apps: [
    {
      name: process.env.BOT_NAME,
      script: "./src/index.js",
      out_file: `${logFolder}out.log`,
      error_file: `${logFolder}err.log`,
      log_file: `${logFolder}all.log`
    }
  ]
};
