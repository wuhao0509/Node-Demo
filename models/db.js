const { Sequelize } = require("sequelize");

// 连接数据库
const sequelize = new Sequelize("myschooldb", "root", "wuhao19980509", {
  host: "localhost",
  dialect: "mysql",//数据库类型
  logging: null//是否输出日志
});

module.exports = sequelize;
