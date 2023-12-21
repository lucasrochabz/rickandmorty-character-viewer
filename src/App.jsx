import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentePage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadCharacters = async (page = 1) => {
    try {
      setLoading(true)
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      const data = await response.json()
      const loadedCharacters = data.results
  
      setCharacters(loadedCharacters)
      setCurrentePage(page)
      setTotalPages(data.info.pages)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1
      await loadCharacters(nextPage)
    }
  }

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1
      await loadCharacters(prevPage)
    }
  }

  useEffect(() => {
    loadCharacters()
  }, [])

  return(
    <>
      {loading && <p>Carregando...</p>}
      {!loading && (
        <>
          {characters.map((character) => (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <h1>{character.name}</h1>
            </div>
          ))}
          <div>
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Página Anterior
            </button>
            <span>Página {currentPage} de {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Próxima Página
            </button>
          </div>
        </>
      )}
    </>
  )
}
