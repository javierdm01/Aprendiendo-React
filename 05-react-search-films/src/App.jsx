import './App.css'
import Films from './components/films'

function App() {

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form action="" className='form'>
            <label htmlFor="films">Films Name</label>
            <input placeholder='Avengers,Star Wars, Matrix, Cars' type="text" name="films" id="fimls" />
            <button type="submit">Buscar</button>
          </form>
        </header>

        <main>
          <h2>Peliculas</h2>
          
        </main>
      </div>
    </>
  )
}

export default App
