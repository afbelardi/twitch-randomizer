import React from 'react';
import TwitchEmbed from 'react-twitch-embed-video';
import {useState, useEffect} from 'react';
// import secrets  from '../config';
import axios from 'axios'

export default function StreamAndChat({ data }) {
    // const [offset, setOffset] = useState(50)
    // const [mature, setMature] = useState(false)
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        if(data) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }
    }, [data])
    


    return(
        <>
            {
                display ?
                    <TwitchEmbed channel={data.stream.user_name} width='1080' height='970' />
                :
                    ""
            } 
        </>
    )
} 