import React, { useState } from 'react'

function SportCard({ sport }) {
    const [ likes, setLikes] = useState(0)

    function handleClick() {
        // console.log('clicked')
        setLikes(likes + 1)
        // changing state causes rerender
    }

    return (
        <article>
            <h2>
                { sport.name }
            </h2>
            <p>{ likes } likes</p>
            <button onClick={handleClick}>Like</button>
        </article>
    )
}

export default SportCard