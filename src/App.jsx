import { useState, useEffect } from 'react';
import { CharacterList } from './components/CharacterList/CharacterList';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';

import { useLoading } from './hooks/useLoading';

export const App = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const { loading, startLoading, stopLoading } = useLoading();

  const loadCharacters = async (page = 1) => {
    startLoading();
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    const data = await response.json();
    const results = data.results;
    const pages = data.info.pages;
    const infoResults = data.info;

    setCharacters(results);
    setTotalPages(pages);
    setInfo(infoResults);
    stopLoading();
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <>
      <Header />

      <Navigation
        info={info}
        totalPages={totalPages}
        loadCharacters={loadCharacters}
      />

      {loading ? <p>Loading...</p> : <CharacterList characters={characters} />}

      <Footer />
    </>
  );
};
