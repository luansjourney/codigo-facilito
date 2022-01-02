import React from 'react'
import { useParams } from 'react-router-dom';

function VideoShow() {

    let {id} = useParams();

    return (
        <p>{id}</p>
    )
}

export default VideoShow;
