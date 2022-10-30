import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'

import { getGenre } from '../../api';
import Card from '../card/Card';
import Page from '../pageModel/Page'
import PageContent from '../pageModel/PageContent';

const Genre = () => {
    const { state } = useLocation();
    const { genre } = useParams()
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const res = await getGenre(state);
                setAlbums(res.data)
            } catch (error) {
                console.log(error);
            }

        })();
    }, [state]);
    console.log(genre);

    return (
        <Page>
            <PageContent addClass={"genre-content"}>
                <div className="flex top-genre center">
                    <h2>{genre}</h2>
                </div>
                <div className="genre-albums center">
                    <h2>Albums</h2>
                    <div className="albums-display grid-row">

                        {
                            albums.map(album => {
                                return (
                                    <Card key={album.id} lib={album} />
                                )
                            })
                        }
                    </div>
                </div>
            </PageContent>
        </Page>
    )
}

export default Genre