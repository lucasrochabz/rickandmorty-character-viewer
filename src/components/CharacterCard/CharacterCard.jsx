import './CharacterCard.css'

export const CharacterCard = ({character}) => {
  return(
    <div className='character-card'>
      <img src={character.image} alt={character.name} />
      <h1>{character.name}</h1>
    </div>
  )
}
