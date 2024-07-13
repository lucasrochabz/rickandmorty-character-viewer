import React from 'react';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import './CharacterList.css';

export const CharacterList = ({ characters }) => {
  return (
    <section className="character-list-container">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};
