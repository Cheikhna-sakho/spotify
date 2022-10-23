import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AudioContextData, ControllerContextData } from "../../contexts/Audio";
import Track from "./Track";

const MainDetail = () => {
    const { id } = useParams();
    const {  setSound } = AudioContextData();
    const { startAudio } = ControllerContextData();

    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3232/albums/' + id)
            .then(res => {
                console.log("data", res.data);
                setAlbums(res.data.slice(0, 1));
                setTracks(res.data);
            }).catch(error => console.log(error));
    }, [id])
    return (
        <section className="main main-detail grid-row">
            {
                albums.map(({ album, album_desc, cover_small }, i) => {
                    return (
                        <article key={i} className="detail-cover grid-col" >
                            {/* style={{ "--url": `url("${cover}")` }} */}
                            <div className="detail-cover">
                                <img src={cover_small} alt="album_cover" />
                            </div>
                            <p>{album_desc}</p>
                        </article>
                    )
                })
            }
            <div className="sounds">
                <h2># Titre</h2>
                {/* <hr /> */}
                <ol>
                    {tracks.map(({ track, artist, artist_id,cover_small, mp3 }, i) => (
                        <li key={i} className="track-item flex" onClick={() => {startAudio(mp3);setSound({track,artist,artist_id,cover_small})}}>
                            <div className="index">
                                {i + 1}
                            </div>
                            <Track sound={{track,artist,artist_id}}/>
                            {/* <div className="track-name grid-row">
                                <h3>{track}</h3>
                                <span id={artist_id}>{artist}</span>
                            </div> */}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
export default MainDetail;
