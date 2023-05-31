import app from("./app");
import { createConnection } from("./app/database/mySQL");
import("dotenv").config();

const port = process.env.SERVER_PORT;

createConnection();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
