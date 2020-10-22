module.exports = app => {
    const media = require("../controllers/media.controller.js");
  
    var router = require("express").Router();
  
    // Create a new media
    router.post("/", media.create);
  
    // Retrieve all media
    router.get("/", media.findAll);
  
    // Retrieve all published media
    router.get("/published", media.findAllPublished);
  
    // Retrieve a single media with id
    router.get("/:id", media.findOne);
  
    // Update a media with id
    router.put("/:id", media.update);
  
    // Delete a media with id
    router.delete("/:id", media.delete);
  
    // Delete all Tutorials
    router.delete("/", media.deleteAll);
    //

  
    app.use('/api/media', router);
  };