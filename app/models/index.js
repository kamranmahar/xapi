const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.brands = require("./brand.model.js")(sequelize, Sequelize);
//db.maincategories = require("./maincategory.model.js")(sequelize, Sequelize);
db.categories = require("./category.model.js")(sequelize, Sequelize);
db.products = require("./product.model.js")(sequelize, Sequelize);
db.media = require("./media.model.js")(sequelize, Sequelize);
//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
//db.productcategories = require("./productcategory.model.js")(sequelize, Sequelize);
// db.categories.hasMany(db.products, { as: "products" });
// db.categories.belongsTo(db.products, {
//   foreignKey: "parentId",
//   as: "category",
// });
module.exports = db;