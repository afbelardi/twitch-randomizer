import React from 'react'
import {useState, useEffect} from 'react'
const secrets = require ('../config')


export default function StreamAndChat() {

    // const [at, setAT ] = useState({})

    const handleCLick =  () => {
        console.log(secrets)
    }

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const response = await fetch
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     })()
    // })


    return(
        <button onClick={handleCLick}>Generate Stream</button>
    )
} 