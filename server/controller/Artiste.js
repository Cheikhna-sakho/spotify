const Model = require(__basedir + "/model/Model");
const Query =  require(__basedir + "/model/Query");
exports.findAll = (req, res) => {
    Model(Query.findAll("artists"), res);
}
exports.find = (req, res) => {
    id = req.params.id;
    Model(Query.find("artists"), res, [id]);
}
