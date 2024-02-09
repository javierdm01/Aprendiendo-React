import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse=()=>{
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition]= useState({x:0,y:0})

  useEffect(()=>{
    
    
    const handleMove=(event)=>{
      const {clientX, clientY}= event;
      setPosition({x:clientX, y:clientY}) 
    }
    if(enabled) {
      window.addEventListener('pointermove',handleMove)
    }
    
    return()=>{
      window.removeEventListener('pointermove', handleMove)
    }

  },[enabled])
  
  useEffect(()=>{
    document.body.classList.toggle('no-cursor',enabled)
    return () =>{
      document.body.classList.remove('no-cursor')
    }
  },[enabled])
  return (
    <>
      <h3>Proyecto 3</h3>
      <div style={{
          // El transform nos devuelve el valor a las posiciones
         transform: `translate(${position.x}px, ${position.y}px)`
       }
       }
        className="ballMove"></div>
      <button onClick={()=> setEnabled(!enabled)}>{enabled ? 'Desactivar puntero' : 'Activar puntero'}</button>
    </>
  )
}

function App() {
  const [mounted,setMounted]= useState(true)

  return(
     <main>
      {mounted && <FollowMouse/>}
      <button onClick={()=>setMounted(!mounted)}>{mounted ? 'Toggle mounted FollowMount': 'Mounted Again'}</button>
    </main> 
   
  )
}

export default App
