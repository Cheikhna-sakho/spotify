import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { AudioContextData, ControllerContextData } from "../../contexts/Audio";
import Track from "../main/Track";
import PageContent from "../pageModel/PageContent";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const MainDetail = () => {
    const { id } = useParams();
    const { setSound } = AudioContextData();
    const { startAudio } = ControllerContextData();
    const [albums, setAlbums] = useState([]);
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/albums/' + id)
            .then(res => {
                console.log("data", res.data);
                setAlbums(res.data.slice(0, 1));
                setTracks(res.data);
            }).catch(error => console.log(error));
    }, [id])

    return (
        <PageContent addClass={"detail-content"}>
                <div className="detail-header ">
                    {
                        albums.map(({ album, album_desc, cover_small }, i) => {
                            return (
                                <article key={i} className="detail-album grid-col center" >
                                    <div className="detail-cover">
                                        <img src={cover_small} alt="album_cover" />
                                    </div>
                                    <p className="detail-desc">
                                        {album_desc && album_desc}
                                        {!album_desc && "Pas de description"}
                                    </p>
                                </article>
                            )
                        })
                    }
                </div>

                <div className="sounds center">
                    <h2># Titre</h2>
                    <ol>
                        {tracks.map(({ track, artist, artist_id, cover_small, mp3, duration }, i) => (
                            <li key={i} className="track-item flex" onClick={() => setSound({ track, artist, artist_id, cover_small, mp3, duration })}>
                                <div className="index">
                                    {i + 1}
                                </div>
                                <Track sound={{ track, artist, artist_id }} />
                            </li>
                        ))}
                    </ol>
                </div>
        </PageContent>
    )
}
export default MainDetail;
