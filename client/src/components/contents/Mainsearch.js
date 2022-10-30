import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getGenres } from "../../api";
import { BASE_URL } from "../../index";
import PageContent from "../pageModel/PageContent";

const Mainsearch = () => {
    const [genres, setGenres] = useState([]);
    console.log(BASE_URL);
    useEffect(() => {
        (async () => {
            try {
                const res = await getGenres();
                setGenres(res.data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    function changeBG() {
        const col1 = getRandomRGB();
        const col2 = getRandomRGB();
        const col3 = getRandomRGB();

        const colorString = `rgb(${col1}, ${col2}, ${col3})`;
        return colorString;
    }

    function getRandomRGB() {
        return Math.floor(Math.random() * 150);
    }
    return (
        <PageContent addClass={"search-content center"}>
            <h2>Parcourir Tout</h2>
            <div className="genres-display">
                {genres.map(({ id, name }) => (
                    <Link key={id} to={"/genres/" + name} state={id}>
                        <div className="genre-card" style={{ background: changeBG() }}>
                            <p>{name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </PageContent>
    )
}
export default Mainsearch;
