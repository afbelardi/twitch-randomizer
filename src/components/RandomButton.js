import React from 'react'
import {useState, useEffect} from 'react'
const secrets = require('../config')


export default function RandomButton() {

    const [toggleGenButton, setToggleGenButton] = useState(false)

    const handleCLick =  () => {
        setToggleGenButton(!toggleGenButton)
        console.log(secrets.AT)
    }


    return(
        <button onClick={handleCLick}>Generate Stream</button>
    )
} 