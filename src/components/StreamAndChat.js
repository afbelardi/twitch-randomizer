import React from 'react'
import TwitchEmbed from 'react-twitch-embed-video'
import {useState, useEffect} from 'react'
const secrets = require ('../config')


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
                        'Client-ID': 'x3cy1tof7ldwet2y5jbk68xwqy5cpg'
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