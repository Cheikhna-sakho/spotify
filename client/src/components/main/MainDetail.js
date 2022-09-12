import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import CardDetail from "../card/CardDetail";
const MainDetail = () => {
    const {id} = useParams(); 
    console.log(id);
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3232/albums/'+id)
            .then(res => {
                console.log( "data",res.data);
                setAlbums(res.data);
            }).catch(error => console.log(error));
    }, [])
    return (
        <section className="main main-detail grid-row">
            {
               albums.map(album => {
                return (
                    <CardDetail article={album} />
                )
            })
            }
        </section>
    )
}
export default MainDetail;
