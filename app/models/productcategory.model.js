'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productcategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  productcategory.init({
    categoryid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'productcategory',
  });
  return productcategory;
};