
import responseMovies from '../../mocks/with-results.json'
//import withoutResults from '../../mocks/no-results.json'
//import { useState } from "react"


export const useFilms=()=>{
    
    const film= responseMovies.Search
    
    const mappedMovies= film?.map(movie =>({
        id:movie.imdbID,
        title:movie.Title,
        year:movie.Year,
        img:movie.Poster
    }))
    return {film:mappedMovies}
}


/*const [film,setFilm]= useState(null)
fetch(`http://www.omdbapi.com/?apikey=4befc7eb&t=${filmName}`)
    .then(res=> res.json())
    .then(data=> setFilm(data)) */