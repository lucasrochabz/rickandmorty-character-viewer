import React, { createContext, useState, useEffect } from 'react';
import { useLoading } from '../hooks/useLoading';

// Criação do contexto
export const UserContext = createContext();

// Provider do contexto
export const UserProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const { loading, startLoading, stopLoading } = useLoading();

  const loadCharacters = async (page = 1) => {
    startLoading();
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`,
      );
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.error('Error fetching characters:', error);
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <UserContext.Provider
      value={{ characters, info, totalPages, loading, loadCharacters }}
    >
      {children}
    </UserContext.Provider>
  );
};
