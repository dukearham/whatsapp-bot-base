import { getDateTime } from "./helper.js";

export default {
  info: msg => {
    const { date, time } = getDateTime();
    console.log(`[${date} ${time}] [INFO] ${msg}`);
  }
};
