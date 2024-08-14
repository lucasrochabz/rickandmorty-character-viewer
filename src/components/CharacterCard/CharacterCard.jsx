import { useState } from 'react';
import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'Dead':
        return 'character-status-icon-red';
      case 'unknown':
        return 'character-status-icon-grey';
      default:
        return 'character-status-icon-green';
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
