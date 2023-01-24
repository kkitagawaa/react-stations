// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'


/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  // const [dogUrl, setDogUrl] = React.useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  return (
    <div className='APP'>
      <Header header="DOGアプリ"/>
      <Description text="犬の画像を表示するサイトです" />
      <DogListContainer />
    </div>
  )
}
