const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Book = sequelize.define(
  "Book",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgurl:{
        type: DataTypes.STRING,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    paranoid: false,
  }
);

module.exports = Book;
