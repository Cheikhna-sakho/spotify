const express = require('express');
const rooter = express.Router();
const GenreCtrl = require(__basedir+'/controller/Genre')
rooter.get("/", GenreCtrl.findAll);
rooter.get("/:id",GenreCtrl.find);

module.exports = rooter;