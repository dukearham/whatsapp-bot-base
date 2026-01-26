import { spawn } from "child_process";

function startChild() {
  const botChild = spawn("node", ["./src/index.js"], {
    stdio: ["inherit", "inherit", "inherit"]
  });

  botChild.on("exit", code => {
    code ? startChild() : process.exit();
  });
}

startChild();
