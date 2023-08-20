const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js"); // connect to database

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categorynames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

Category.associate = (models) => {
  Category.hasMany(models.Product, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  });
};

module.exports = Category;
