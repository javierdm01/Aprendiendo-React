
import './App.css'
import { useCatFact } from './services/hooks/useCatFact'
import { useCatImage } from './services/hooks/useCatImage'



function App() {
  const {fact,refreshFact} = useCatFact()
  const {img} = useCatImage({fact})
  

const handleClick= async()=>{
  refreshFact()
}
  
  
  return (
    <>
        <main>
          <h1>App gatitos</h1>
          {fact && <p>{fact}</p>}
          {img && <img src={img} alt="Cat whit treeh first words" />}
          
          <button onClick={handleClick}>Nuevo gato</button>
        </main>
    </>
  )
}

export default App
