import { useState, useEffect } from 'react';
import { CharacterList } from './components/CharacterList/CharacterList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';

export const App = () => {
  const [characters, setCharacters] = useState([]);

  const loadCharacters = async (page = 1) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    const data = await response.json();
    const loadedCharacters = data.results;

    setCharacters(loadedCharacters);
    // setCurrentPage(page);
    // setTotalPages(data.info.pages);
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <>
      <Header />
      {/* <Navigation /> */}
      <>
        <CharacterList characters={characters} />
      </>
      <Footer />
    </>
  );
};
