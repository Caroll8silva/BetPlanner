import Sequelize from "sequelize";

import dotenv from "dotenv";

dotenv.config();

export const createConnection = () => {
  const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
      host: process.env.MYSQL_HOST,
      dialect: "mysql",
    }
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log("Database connection established successfully.");
    })
    .catch((error) => {
      console.error("Failed to connect to the database. Error:", error);
    });

  return sequelize;
};