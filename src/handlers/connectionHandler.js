import { DisconnectReason } from "@whiskeysockets/baileys";
import config from "../config.js";
import logger from "../utils/logger.js";

export default sock => {
  sock.ev.on("connection.update", async update => {
    const { connection, lastDisconnect } = update;
    if (connection === undefined) {
      if (config.usePairingCode) {
        logger.info()
      }
    }
  });
};
