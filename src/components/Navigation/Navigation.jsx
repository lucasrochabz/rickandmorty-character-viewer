import { useState, useContext } from 'react';
import './Navigation.css';
import { CharacterContext } from '../../contexts/CharacterContext';

export const Navigation = () => {
  // Usa o contexto para obter totalPages, e loadCharacters
  const { totalPages, loadCharacters } = useContext(CharacterContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      await loadCharacters(prevPage);
    }
  };

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      await loadCharacters(nextPage);
    }
  };

  return (
    <div className="navigation">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={currentPage === 1 ? 'disabled' : ''}
      >
        Página Anterior
      </button>
      <span>
        {currentPage} de {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? 'disabled' : ''}
      >
        Próxima Página
      </button>
    </div>
  );
};
