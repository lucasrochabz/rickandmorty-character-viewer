import React, { createContext, useState, useEffect } from 'react';
import { useLoading } from '../hooks/useLoading';

// Criação do contexto
export const CharacterContext = createContext();

// Provider do contexto
export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const { loading, startLoading, stopLoading } = useLoading();

  // Função para carregar personagens
  const loadCharacters = async (page = 1) => {
    startLoading();
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`,
    );
    const data = await response.json();
    setCharacters(data.results);
    setInfo(data.info);
    setTotalPages(data.info.pages);
    stopLoading();
  };

  // Carregar personagens ao montar o componente
  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <CharacterContext.Provider
      value={{ characters, info, totalPages, loading, loadCharacters }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
