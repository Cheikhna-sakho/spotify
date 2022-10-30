import { useEffect, useState } from "react";

import Card from "../card/Card";
import PageContent from "../pageModel/PageContent";
import { getAlbums } from "../../api";

const MainHome = () => {
    const [albums, setAlbums] = useState([]);
    useEffect( () => {
        (async () => {
            const res = await getAlbums();
            setAlbums(res.data)

        })()
    }, []);

    return (
        <PageContent addClass={"home-content center"}>
            {
                albums.map(album => {
                    return (
                        <Card key={album.id} lib={album} />
                    )
                })
            }
        </PageContent>
    )
}
export default MainHome;