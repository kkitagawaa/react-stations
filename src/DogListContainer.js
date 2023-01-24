// DO NOT DELETE

import * as React from 'react'
import { BreedsSelect } from './BreedsSelect'

export function DogListContainer(props) {

    const [breeds, setBreeds] = React.useState([""])
    const [selectedBreed, setSelectedBreed] = React.useState("affenpinscher")
    const [dogList, setDogList] = React.useState([""])

    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(data =>setBreeds(Object.keys(data.message)))
        // console.log({breeds})
    },[])

    return (
        <div className='breeds_select'>
            Breeds list
            <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
            {/* <button onClick={() => console.log(`https://dog.ceo/api/breed/${selectedBreed}/images/random/4`)
                }>表示</button> */}
            <button onClick={() => fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/4`)
                .then(response => response.json())
                .then(data =>setDogList(data.message))}>表示</button>
            {dogList.map((dog) => 
                <img src={dog}></img>
            )}
            {dogList}
        </div>
    )
}