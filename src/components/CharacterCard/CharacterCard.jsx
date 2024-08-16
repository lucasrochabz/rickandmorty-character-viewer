import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Dead':
        return 'character-icon status-red';
      case 'unknown':
        return 'character-icon status-grey';
      default:
        return 'character-icon status-green';
    }
  };

  return (
    <div className="character-card">
      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
      <div className="character-info">
        <h2>{character.name}</h2>
        <span className="character-status">
          <span className={getStatusClass(character.status)}></span>
          {character.status}
        </span>
      </div>
    </div>
  );
};
