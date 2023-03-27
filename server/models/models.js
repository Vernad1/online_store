const sequelize = require("../db");

const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  userId: { type: DataTypes.INTEGER },
  productId: { type: DataTypes.INTEGER },
  size: { type: DataTypes.STRING, allowNull: false },
});

const Product = sequelize.define("product", {
  name: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const ProductInfo = sequelize.define("product_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const ProductSize = sequelize.define("product_size", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  size: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

User.hasMany(Basket);
Basket.belongsTo(User);

Product.hasMany(Basket);
Basket.belongsTo(Product);

Product.hasMany(ProductInfo, { as: "info" });
ProductInfo.belongsTo(Product);

Product.hasMany(ProductSize, { as: "size" });
ProductSize.belongsTo(Product);

Type.hasMany(Product);
Product.belongsTo(Type);

User.hasMany(Basket);
Basket.belongsTo(User);

Product.hasMany(Basket);
Basket.belongsTo(Product);

module.exports = {
  User,
  Basket,
  Product,
  ProductInfo,
  ProductSize,
  Type,
};
