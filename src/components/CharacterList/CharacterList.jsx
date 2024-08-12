import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import './CharacterList.css';

export const CharacterList = () => {
  // Usa o contexto para obter characters
  const { characters } = useContext(UserContext);

  return (
    <main className="character-list-bg">
      <div className="character-list">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </main>
  );
};
