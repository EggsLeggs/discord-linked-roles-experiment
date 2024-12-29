import { createApp } from "./src/utils/createApp";
const config = require("./config");
import "./src/database";

const PORT = config.PORT;

async function main() {
  try {
    const app = createApp();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
    console.log(`Running in ${config.NODE_ENV} mode.`);
  } catch (err) {
    console.log(err);
  }
}

main();
