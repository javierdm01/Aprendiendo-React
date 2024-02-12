import { useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react'
import { Films } from "./components/films"
import { useFilms } from './services/hooks/useFilms'

//Formularios con useRef()
//No es lo suyo, tardamos menos haciendolo con FormData
/*const inputRef= useRef()

 const value= inputRef.current.value
    console.log(value);*/

//Formularios controlados React
//(es muy lento, porque se renderiza cada vez que se actuliza el input)

/* const[query,setQuery]= useState('')
const handleChange=(event)=>{
  setQuery(event.target.value)
}
<input onChange={handleChange} value={query} name="query">
 */

function useSearch(){
  const[search,updateSearch]= useState('')
  const [error,setError]= useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }

}
function App() {
  const {search, updateSearch,error}=useSearch()
  const {film, getFilms}= useFilms({search})


  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log({search});
    getFilms()
    
  }
  const handleChange=(event)=>{
    const newQuery= event.target.value
    updateSearch(newQuery)
  }
  

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form action="" className='form' onSubmit={handleSubmit}>
            <label htmlFor="films">Films Name</label>
            <input  placeholder='Avengers,Star Wars, Matrix, Cars' type="text" name="query" id="query" value={search} onChange={handleChange}/>
            <button  type="submit">Buscar</button>
          </form>
          {error && <p style={{color:'red'}}>{error}</p>}
        </header>

        <main>
          <h2>Peliculas</h2>
          {
            <Films movies={film}/>
          }
        </main>
      </div>
    </>
  )
}

export default App
