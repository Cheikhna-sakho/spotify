const Model = require(__basedir + "/model/Model");
const Query = require(__basedir + "/model/Query");
const joinQuery = require(__basedir + "/model/JoinQuery");
exports.findAll = (req, res) => {
    Model(Query.findAll("albums"), res);
}
exports.find = (req, res) => {
    id = req.params.id;
    Model(joinQuery+"AND  albums.id=?",
        res, [id]);
}
exports.findField = {
    //'select albums.id, albums.name as "albumName", cover, artists.id as "artistId", artists.name as "artistName" from albums inner join artists  on albums.artist_id = artists.id order by RAND() limit 8;'
    
}