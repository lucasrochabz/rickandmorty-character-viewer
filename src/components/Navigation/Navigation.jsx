import './Navigation.css';

export const Navigation = ({ info }) => {
  const handlePrevPage = () => {
    console.log('clicou em anterior');
  };

  const handleNextPage = () => {
    console.log('clicou em próximo');
  };

  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);

  // const handlePrevPage = async () => {
  //   if (currentPage > 1) {
  //     const prevPage = currentPage - 1;
  //     await loadCharacters(prevPage);
  //   }
  // };

  // const handleNextPage = async () => {
  //   if (currentPage < totalPages) {
  //     const nextPage = currentPage + 1;
  //     await loadCharacters(nextPage);
  //   }
  // };

  return (
    <>
      <h2>Navigation</h2>
      <div>
        <button onClick={handlePrevPage}>Página Anterior</button>
        <span>Página atual de total</span>
        <button onClick={handleNextPage}>Próxima Página</button>
      </div>

      {/* <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima Página
        </button>
      </div> */}
    </>
  );
};