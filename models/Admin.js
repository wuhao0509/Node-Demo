const sequelize = require("./db");
const { DataTypes } = require("sequelize");
// 创建一个模型对象,并配置(相当于配置表的列)
// 主键列自动生成，不需要我们配置
const Admin = sequelize.define(
  "Admin",
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    // 添加该选项模型名是啥表名是啥，不添加该项，表名为模型名加s
    // freezeTableName: true,
    // 自己指定表名
    // tableName:xxx,
    // 删除表中的createdAt，updatedAt字段，或者修改该字段名
    // createdAt: "创建时间",
    createdAt: false,
    updatedAt: false,
    //实际上公司里面的数据库数据是不会删除数据的，因为数据非常宝贵，一旦删除想要恢复会很困难
    // 实际上数据中会有删除时间字段，一旦删除时间值不是null，就表明该数据被删除了
    paranoid: true
    // 从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
  }
);

// 模型同步,可以一起同步数据库
// (async function () {
//   await Admin.sync({
//     alter: true,
//   });
//   console.log("Admin模型同步完成");
// })();

module.exports = Admin;
