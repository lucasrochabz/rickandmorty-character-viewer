import React from 'react'
import { CharacterCard } from '../CharacterCard/CharacterCard'
import './CharacterList.css'

export const CharacterList = ({characters}) => {
  return(
    <div className='character-list-container'>
      {characters.map((character) =>(
        <CharacterCard key={character.id} character={character}/>
      ))}
    </div>
  )
}
