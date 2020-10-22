const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new 
exports.create = (req, res) => {
   // Validate request
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const Product = {
    brandid:req.body.brandid,
categoryid:req.body.categoryid,
tagIds:req.body.tagIds,
name:req.body.name,
slug:req.body.slug,
shortDescription:req.body.shortDescription,
longDescription:req.body.longDescription,
productTypeId:req.body.productTypeId,
regularPrice:req.body.regularPrice,
salePrice:req.body.salePrice,
SKU:req.body.SKU,
manageStock:req.body.manageStock,
stockStatus:req.body.stockStatus,
stockQuantity:req.body.stockQuantity,
lowStockThreshold:req.body.lowStockThreshold,
soldIndividually:req.body.soldIndividually,
weightType:req.body.weightType,
weight:req.body.weight,
dimensionType:req.body.dimensionType,
dimensionsHeight:req.body.dimensionsHeight,
dimensionsWidth:req.body.dimensionsWidth,
dimensionsLength:req.body.dimensionsLength,
shippingClassIds:req.body.shippingClassIds,
purchaseNote:req.body.purchaseNote,
enableReviews:req.body.enableReviews,
productStatus:req.body.productStatus,
productVisibility:req.body.productVisibility,
catalogVisibility:req.body.catalogVisibility,
maintegerhumbnail:req.body.maintegerhumbnail,
productGallery:req.body.productGallery,
createdDate:req.body.createdDate   
  };
  
  // Save Product in the database
  Product.create(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Product.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Product."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Product with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Product was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Product were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Product."
          });
        });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Product.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Product."
      });
    });
};