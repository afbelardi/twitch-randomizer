import React from 'react';
import TwitchEmbed from 'react-twitch-embed-video';
import {useState, useEffect} from 'react';
import secrets  from '../config';

export default function StreamAndChat() {
    const [offset, setOffset] = useState(50)
    const [data, setData] = useState({})
    const [mature, setMature] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://api.twitch.tv/kraken/streams/?limit=100&language=en&offset=${offset}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/vnd.twitchtv.v5+json',
                        'Client-ID': secrets.client_id
                    }
                })
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.error(err)
            }
        })()
    }, [])


    return(
        <>
           <TwitchEmbed channel='adinross' width='1080' height='970' />
        </>


    )
} 