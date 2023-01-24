// DO NOT DELETE

import * as React from 'react'
import { DogImage } from './DogImage'

export function Description(props) {
    const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
    return (
        <div className='description'>
            <p className='site_description'>{props.text}</p>
            <DogImage url={dogUrl} />
            <button onClick={() => fetch("https://dog.ceo/api/breeds/image/random")
                .then(response => response.json())
                .then(data =>setDogUrl(data.message))
            }>更新</button>
        </div>
    )
}