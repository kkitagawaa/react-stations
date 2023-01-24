// DO NOT DELETE

import * as React from 'react'

export function DogImage(props) {
    return (
        <div className='dog_image'>
            <img src={props.url} className='img'></img><br></br>
        </div>
    )
}