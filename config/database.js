const Sequelize = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "", {
  hostname: "localhost",
  dialect: "mysql"
});

sequelize

  .authenticate()
  .then(() => {
    console.log(" connection has been esblished successfuly");
  })
  .catch(err => {
    console.log(" unable to connect");
  });

module.exports = sequelize;