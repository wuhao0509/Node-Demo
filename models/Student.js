const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Students = sequelize.define(
  "Students",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sex: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);

module.exports = Students;
