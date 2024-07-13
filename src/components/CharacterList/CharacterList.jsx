import { CharacterCard } from '../CharacterCard/CharacterCard';
import './CharacterList.css';

export const CharacterList = ({ characters }) => {
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
