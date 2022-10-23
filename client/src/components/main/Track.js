import React from 'react'

const Track = ({ sound }) => {
    const { track, artist, artist_id } = sound;
    return (
        <div className="track-name grid-row">
            <h3>{track}</h3>
            <span id={artist_id}>{artist}</span>
        </div>
    )
}

export default Track