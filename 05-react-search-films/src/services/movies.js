const API_KEY='4befc7eb';
export const searchFilms=async({search})=>{
    if(search=='') return null
    try {
        const response= await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
        const film=json.Search
        return film?.map(movie =>({
            id:movie.imdbID,
            title:movie.Title,
            year:movie.Year,
            img:movie.Poster
        }))
    }catch(e){
        throw new Error('Error searching movies')
    }
    
}