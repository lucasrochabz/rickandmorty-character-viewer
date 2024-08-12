import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { CharacterList } from './components/CharacterList/CharacterList';
import './App.css';

export const App = () => {
  return (
    <UserProvider>
      <Header />
      <Navigation />
      <CharacterList />
      <Footer />
    </UserProvider>
  );
};
