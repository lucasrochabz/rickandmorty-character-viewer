import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
      <h2>{character.name}</h2>
    </div>
  );
};
