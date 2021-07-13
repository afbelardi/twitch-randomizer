import React from 'react'
import {useState, useEffect} from 'react'


export default function RandomButton(props) {

    const [toggleGenButton, setToggleGenButton] = useState(false)

    const handleCLick =  () => {
        setToggleGenButton(!toggleGenButton)
        props.clickFn()
    }


    return(
        <button onClick={handleCLick}>Generate Stream</button>
    )
} 