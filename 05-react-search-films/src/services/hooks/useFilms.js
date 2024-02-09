import { useState } from "react"


const useFilms=(filmName)=>{
    const [film,setFilm]= useState(null)
    fetch(`http://www.omdbapi.com/?apikey=4befc7eb&t=${filmName}`)
    .then(res=> res.json())
    .then(data=> setFilm(data))

    return {film}
}