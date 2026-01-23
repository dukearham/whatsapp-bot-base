import config from "../config.js";

export function getDateTime() {
  const now = new Date();

  return {
    date: now.toLocaleDateString("sv-SE", {
      timeZone: config.timeZone
    }),
    time: now.toLocaleTimeString("sv-SE", {
      timeZone: config.timeZone
    })
  };
}
