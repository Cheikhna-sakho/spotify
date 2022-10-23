import { useEffect, useState } from "react";
import axios from 'axios';
// import env from 'react-dotenv';
import Card from "../card/Card";
const BASE_URL = process.env.REACT_APP_BASE_URL;
const MainHome = () => {
    const [albums, setAlbums] = useState([]);
    console.log(BASE_URL,"url");
    useEffect(() => {
        axios.get(`${BASE_URL}/albums`)
            .then(res => {
                console.log("data", res.data);
                setAlbums(res.data);
            }).catch(er => console.log(er));
    }, []);

    console.log(albums); 
    return (
        <section className="home-page page">
            {
                albums.map(album => {
                    return (
                        <Card  key={album.id} lib={album} />
                    )
                })
            }
        </section>
    )
}
export default MainHome;