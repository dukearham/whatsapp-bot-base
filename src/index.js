import { makeWASocket, useMultiFileAuthState } from "@whiskeysockets/baileys";
import config from "./config/index.js";
import pino from "pino";
//import initHandlers from "./handlers/index.js";

async function startSock() {
  const { state, saveCreds } = await useMultiFileAuthState(
    `./session/${config.sessionName}`
  );
  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: "silent" })
  });

  //initHandlers(sock);
}

startSock();
