'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productid: {
        type: Sequelize.INTEGER
      },
      brandid: {
        type: Sequelize.INTEGER
      },
      categoryid: {
        type: Sequelize.INTEGER
      },
      tagIds: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      shortDescription: {
        type: Sequelize.STRING
      },
      longDescription: {
        type: Sequelize.STRING
      },
      productTypeId: {
        type: Sequelize.INTEGER
      },
      regularPrice: {
        type: Sequelize.DOUBLE
      },
      salePrice: {
        type: Sequelize.DOUBLE
      },
      SKU: {
        type: Sequelize.STRING
      },
      manageStock: {
        type: Sequelize.STRING
      },
      stockStatus: {
        type: Sequelize.STRING
      },
      stockQuantity: {
        type: Sequelize.STRING
      },
      lowStockThreshold: {
        type: Sequelize.STRING
      },
      soldIndividually: {
        type: Sequelize.STRING
      },
      weightType: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      dimensionType: {
        type: Sequelize.STRING
      },
      dimensionsHeight: {
        type: Sequelize.STRING
      },
      dimensionsWidth: {
        type: Sequelize.STRING
      },
      dimensionsLength: {
        type: Sequelize.STRING
      },
      shippingClassIds: {
        type: Sequelize.INTEGER
      },
      purchaseNote: {
        type: Sequelize.STRING
      },
      enableReviews: {
        type: Sequelize.STRING
      },
      productStatus: {
        type: Sequelize.STRING
      },
      productVisibility: {
        type: Sequelize.STRING
      },
      catalogVisibility: {
        type: Sequelize.STRING
      },
      maintegerhumbnail: {
        type: Sequelize.STRING
      },
      productGallery: {
        type: Sequelize.STRING
      },
      createdDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};