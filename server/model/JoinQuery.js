module.exports = `SELECT 
                  albums.id as album_id, albums.name as "album", cover,cover_small, albums.description as album_desc, release_date,
                  artists.id as "artist_id", artists.name as "artist",
                  tracks.id as  "track_id", tracks.name as "track",duration,mp3
                  FROM albums INNER JOIN artists  ON albums.artist_id = artists.id
                  INNER JOIN tracks ON  tracks.album_id = albums.id `;