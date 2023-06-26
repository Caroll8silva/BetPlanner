import Sequelize from "sequelize";
import createConnection from "../database/mySQL";

const sequelize = createConnection();

const User = sequelize.define("User", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

User.sync();

export default User