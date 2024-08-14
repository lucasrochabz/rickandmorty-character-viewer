import { useContext } from 'react';
import { CharacterContext } from '../../contexts/CharacterContext';
import { CharacterCard } from '../CharacterCard/CharacterCard';
import './CharacterList.css';

export const CharacterList = () => {
  // Usa o contexto para obter characters
  const { loading, characters } = useContext(CharacterContext);

  return (
    <main className="character-list-bg">
      <div className="character-list">
        {loading ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
    </main>
  );
};
