const Model = require(__basedir + "/model/Model");
const Query =  require(__basedir + "/model/Query");
exports.findAll = (req, res) => {
    Model(Query.findAll("genres"), res);
}
exports.find = (req, res) => {
    id = req.params.id;
    const query = " SELECT album_id, albums.name as name,cover,description ,genre_id,genres.name as genre FROM genres INNER JOIN genres_albums ON genres.id = genres_albums.genre_id  INNER JOIN albums ON albums.id = genres_albums.album_id WHERE genres.id =?;"
    Model(query, res, [id]);
}
