import React, { useState } from 'react'
import Inner from './Inner'

const Card = () => {

    const [name, setName] = useState('Ram')

    const nameChange = () => {
        setName('Aman')
    }

    return (
        <div style={{height:500,width:500,backgroundColor:'gray'}}>
            <h1>Card Component</h1>
            <h3>{name}</h3>
            <Inner fun={nameChange}/>
        </div>
    )
}

export default Card
