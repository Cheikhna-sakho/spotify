const express = require('express');
const rooter = express.Router();
const AlbumCtrl = require(__basedir+'/controller/Album')
rooter.get("/", AlbumCtrl.findAll);
rooter.get("/:id",AlbumCtrl.find);
// rooter.post("/", AlbumCtrl.create);
module.exports = rooter;