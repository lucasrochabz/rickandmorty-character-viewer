import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
      <div className="character-info">
        <h2>{character.name}</h2>
        <span className="character-status">
          <span className="character-status-icon"></span>
          {character.status}
        </span>
      </div>
    </div>
  );
};
