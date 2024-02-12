import { useEffect, useState, useCallback } from 'react'
import './App.css'
import { useRef } from 'react'
import { Films } from "./components/films"
import { useFilms } from './services/hooks/useFilms'
import debounce from 'just-debounce-it'
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
  const [sort,setSort]=useState(false)
  const {search, updateSearch,error}=useSearch()
  const {film, getFilms, loading}= useFilms({search, sort})

  /*Debounce lo que hace es añadir un tiempo de espera de en este caso
  1s, para que cuando se deje de escribir 1s, se ejecute la funcion getFilms()

  Añadimos el useCallback para que se ejecute solo una vez, porque al estar
   dentro de la funcion se renderizaria tantas veces como cambiase el INPUT

   Y con el callback hacemos que este se renderice solo una vez
  */
  const debouncedGetFilms=useCallback(debounce(search=>{
    console.log('search',search);
    getFilms({search})
  },1000),[])


  const handleSubmit=(event)=>{
    event.preventDefault()
    getFilms({search})
    
  }
  const handleSort=()=>{
    setSort(!sort)
  }
  const handleChange=(event)=>{
    const newQuery= event.target.value
    updateSearch(newQuery)
    debouncedGetFilms(newQuery)
  }
  

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form action="" className='form' onSubmit={handleSubmit}>
            <label htmlFor="films">Films Name</label>
            <input type="checkbox" name="check" onChange={handleSort} checked={sort} />
            <input  placeholder='Avengers,Star Wars, Matrix, Cars' type="text" name="query" id="query" value={search} onChange={handleChange}/>
            <button  type="submit">Buscar</button>
          </form>
          {error && <p style={{color:'red'}}>{error}</p>}
        </header>

        <main>
          <h2>Peliculas</h2>
          {
            loading && <p>Cargando ...</p>
          }
          <Films movies={film}/>
        </main>
      </div>
    </>
  )
}

export default App
