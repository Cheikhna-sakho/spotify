const Model = require(__basedir + "/model/Model");
const Query = require(__basedir + "/model/Query");
const joinQuery = `SELECT 
                   albums.id as album_id, albums.name as "album", cover, 
                   artists.id as "artist_id", artists.name as "artist",
                   tracks.id as  "track_id", tracks.name as "track",duration,mp3
                   FROM albums INNER JOIN artists  ON albums.artist_id = artists.id
                   INNER JOIN tracks ON  tracks.album_id = albums.id
                   `;
exports.findAll = (req, res) => {
    Model(Query.findAll("tracks"), res);
}
exports.find = (req, res) => {
    id = req.params.id;
    Model(joinQuery + " AND WHERE tracks.id=?",
        res, [id]);
}
// exports.findByAlbum = (req,res) => {
//     const queryByAlbum = 
// }

//'select albums.id, albums.name as "albumName", cover, artists.id as "artistId", artists.name as "artistName" from albums inner join artists  on albums.artist_id = artists.id order by RAND() limit 8;'