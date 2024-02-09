/* eslint-disable react/prop-types */



export function Films({movies}) {
    
  return (
    <>
      <ul>
        {
            movies.map(movie=>(
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <h4>{movie.year}</h4>
                    <img src={movie.img} alt="" />
                </li>
            ))
        }
      </ul>
    </>
  )
}

export function NoFilmsResault(){
    return (
        <h3>No se encontraron peliculas para esta búsquedad.</h3>
    )
}
