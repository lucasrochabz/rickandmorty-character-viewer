import { CharacterProvider } from './contexts/CharacterContext';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { CharacterList } from './components/CharacterList/CharacterList';
import './App.css';

export const App = () => {
  return (
    <CharacterProvider>
      <Header />
      <Navigation />
      <CharacterList />
      <Footer />
    </CharacterProvider>
  );
};
