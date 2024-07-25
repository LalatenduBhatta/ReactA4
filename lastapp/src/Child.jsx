import React from 'react'
import HOC from './HOC'

function Child(props) {
    return (
        <>
            <h1>{props.name}</h1>
            <h2>{props.address}</h2>
        </>
    )
}

const NewComponent = HOC(Child)

export default NewComponent