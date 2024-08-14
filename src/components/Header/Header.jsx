import './Header.css';

export const Header = () => {
  return (
    <header className="header-bg">
      <div className="header">
        <h2>Rick and Morty</h2>

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
