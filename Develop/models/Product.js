// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init({
  // define columns
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true, // set as primary key
    autoIncrement: true, // uses auto increment
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isDecimal: true, // checks for decimal .....
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10, // set a default value of 10
    validate: {
      isNumeric: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // decimal number with 10 digits to the left of the decimal and 2 to the right
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },

    // this is the sequelize connection .....
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  },
});

Product.associate = (models) => {
  Product.belongsTo(models.Category, {
    foreignKey: "category_id",
  });

  module.exports = Product;
};
