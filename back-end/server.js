import { createConnection } from "./app/database/mySQL/index.js";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.SERVER_PORT;

createConnection();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
