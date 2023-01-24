// DO NOT DELETE

import * as React from 'react'

export function BreedsSelect(props) {
    
    return (
        <div className='breeds_select'>
            <select value={props.selectedBreed} onChange={(e) =>
                props.setSelectedBreed(e.target.value)
            }>
                {props.breeds.map((breed) =>
                <option key={breed.toString()} value={breed}>{breed}</option>
                )}
            </select>
        </div>
    )
}