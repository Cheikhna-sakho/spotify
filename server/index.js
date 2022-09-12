const express = require('express');
const app = express();
const cors = require('cors');
const port = 3232;
global.__basedir = __dirname;
require("./bdConfig");
//Root
const AlbumRoot = require("./router/Album");
const ArtisteRoot = require("./router/Artiste");
//Midleware
app.use(cors());
//
app.use('/albums', AlbumRoot);
app.use('/artistes', ArtisteRoot);
app.listen(port, () => console.log(`Server demarer au ${port}`));

































// const getAlbum = (res,id) => sqlQuery('SELECT * FROM albums WHERE id= ?',[id],res);






// app.get("/albums", (request, response) => {
//     bd.query('select albums.id, albums.name as "albumName", cover, artists.id as "artistId", artists.name as "artistName" from albums inner join artists  on albums.artist_id = artists.id order by RAND() limit 8;', (err, res) => {
//         if (err) throw err;
//         console.log(res);
//         // console.log(res);
//         response.send(res)
//     });
// })










        // const sqlQuery = (sql , option = null)=>{
            //     if (option !== null) {
                //         bd.query(sql, option, (err, result) =>{
//             if(err) console.log(err);
//             console.log(result);
//         })
//     }else{
    //         bd.query(sql, (err, result) =>{
        //             if(err) console.log(err);
        //             console.log(result);
        //         })
        //     }
        // }
        // const sqlQuery = (sql , option = null)=>{
        //     let data = null;
        //     if (option !== null) {
        //         bd.query(sql, option, (err, result) =>{
        //             if(err) console.log(err);
        //             // console.log(result);
        //             // data = result;
        //         })
        //     }else{
        //         bd.query(sql, (err, result) =>{
        //             if(err) console.log(err);
        //             // console.log(result);
        //             // return result;
        //             // data = result;
        //         })
        //     }
        //     // console.log(data);
        // }