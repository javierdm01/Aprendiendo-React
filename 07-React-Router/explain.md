
- [✅] Crear una forma de hacer MPAs (Multiple Page Application)

const [currentPath,setCurrentPath]=useState(window.location.pathname)
  return (
    <>
      <main>
          {currentPath == '/' && <HomePage/>}
          {currentPath == '/about' && <AboutPage/>}
      </main>
    </>
  )