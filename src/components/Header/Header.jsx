import { useContext } from 'react';
import './Header.css';
import { UserContext } from '../../contexts/UserContext';

export const Header = () => {
  const user = useContext(UserContext);
  return (
    <header className="header-bg">
      <div className="header">
        <h2>Rick and Morty</h2>
        <h1>teste</h1>
        <p>{user.nome}</p>

        <nav>
          <ul className="nav">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
