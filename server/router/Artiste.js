const express = require('express');
const rooter = express.Router();
const ArtisteCtrl = require(__basedir+'/controller/Artiste')
rooter.get("/", ArtisteCtrl.findAll);
rooter.get("/:id",ArtisteCtrl.find);
module.exports = rooter;































// rooter.post("/", ArtisteCtrl.create);
// rooter.put("/:id", ArtisteCtrl.update);
// rooter.delete("/:id", ArtisteCtrl.delete);