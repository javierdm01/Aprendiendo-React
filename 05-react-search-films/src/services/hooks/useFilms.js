
import { useState } from 'react'

import showMovies from '../../mocks/with-results.json'
import withoutResults from '../../mocks/no-results.json'
//import { useState } from "react"
const API_KEY='4befc7eb';

export const useFilms=({search})=>{
    const [responseMovies, setResponseMovies]= useState([])
    const film= responseMovies.Search
    const mappedMovies= film!='' ? film?.map(movie =>({
        id:movie.imdbID,
        title:movie.Title,
        year:movie.Year,
        img:movie.Poster
    })) : 'Error'
    
    const getFilms=()=>{
        if (search) {
            setResponseMovies(showMovies)
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then( json =>{
                setResponseMovies(json)
            })
        }else{
            setResponseMovies(withoutResults)
        }
    }
    return {film:mappedMovies,getFilms}
}


