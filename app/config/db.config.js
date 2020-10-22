module.exports = {
    HOST: "34.67.30.151",
    Port:	"3306",
    USER: "root",
    PASSWORD: "Kamran@1234",
    DB: "retail",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };