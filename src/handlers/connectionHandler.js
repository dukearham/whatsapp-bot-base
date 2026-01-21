import { DisconnectReason } from "@whiskeysockets/baileys";

export default sock => {
  sock.ev.on("connection.update", async update => {
    const { connection, lastDisconnect } = update;
    if (connection === undefined) {
    }
  });
};
