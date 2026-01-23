const now = new Date(),
  localDate = now.toLocaleDateString("sv-SE", {
    timeZone: "Asia/Jakarta"
  }),
  localTime = now.toLocaleTimeString("sv-SE", {
    timeZone: "Asia/Jakarta"
  });

console.log(localDate, localTime);


const nowTwo = new Date(),
  nowDate = nowTwo.toLocaleString("sv-SE", {
    timeZone: "Asia/Jakarta"
  })
  
console.log(nowDate)