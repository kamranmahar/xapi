'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    brandid: DataTypes.INTEGER,
    categoryid: DataTypes.INTEGER,
    tagIds: DataTypes.INTEGER,
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    longDescription: DataTypes.STRING,
    productTypeId: DataTypes.INTEGER,
    regularPrice: DataTypes.DOUBLE,
    salePrice: DataTypes.DOUBLE,
    SKU: DataTypes.STRING,
    manageStock: DataTypes.STRING,
    stockStatus: DataTypes.STRING,
    stockQuantity: DataTypes.STRING,
    lowStockThreshold: DataTypes.STRING,
    soldIndividually: DataTypes.STRING,
    weightType: DataTypes.STRING,
    weight: DataTypes.STRING,
    dimensionType: DataTypes.STRING,
    dimensionsHeight: DataTypes.STRING,
    dimensionsWidth: DataTypes.STRING,
    dimensionsLength: DataTypes.STRING,
    shippingClassIds: DataTypes.INTEGER,
    purchaseNote: DataTypes.STRING,
    enableReviews: DataTypes.STRING,
    productStatus: DataTypes.STRING,
    productVisibility: DataTypes.STRING,
    catalogVisibility: DataTypes.STRING,
    maintegerhumbnail: DataTypes.STRING,
    productGallery: DataTypes.STRING,
    createdDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};