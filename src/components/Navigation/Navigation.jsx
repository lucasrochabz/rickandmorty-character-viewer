import { useState } from 'react';
import './Navigation.css';

export const Navigation = ({ info, totalPages, loadCharacters }) => {
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
    <>
      <h2>Navigation</h2>
      <div>
        <button onClick={handlePrevPage}>Página Anterior</button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage}>Próxima Página</button>
      </div>
    </>
  );
};
