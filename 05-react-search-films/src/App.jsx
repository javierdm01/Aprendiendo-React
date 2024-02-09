import './App.css'
//import { useRef } from 'react'
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


function App() {
  const {film}= useFilms()


  const handleSubmit=(event)=>{
    event.preventDefault()
    const fields=Object.fromEntries( new FormData(event.target))
    console.log(fields);
   
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form action="" className='form' onSubmit={handleSubmit}>
            <label htmlFor="films">Films Name</label>
            <input  placeholder='Avengers,Star Wars, Matrix, Cars' type="text" name="query" id="query" />
            <button  type="submit">Buscar</button>
          </form>
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
