import { makeWASocket, useMultiFileAuthState } from "@whiskeysockets/baileys";
import connectionHandler from "./handlers/connectionHandler.js";

(async function main() {
  const { state, saveCreds } = await useMultiFileAuthState("../sessions/one");
  const sock = makeWASocket({
    auth: state
  });
  connectionHandler(sock);

})();
