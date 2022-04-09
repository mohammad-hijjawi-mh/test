const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt:{
    type: Sequelize.DATE,
  }

});

module.exports = User;