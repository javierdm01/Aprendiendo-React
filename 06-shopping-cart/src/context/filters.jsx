/* eslint-disable react/prop-types */
import { createContext,useState } from "react";

// useContext esta pensado para cambios muy pequeños,
// que se actualizen con poca frecuencia


// 1.   Crear el Contexto
// Cuando queramos usar el contexto hay que utilizar este

export const FilterContext = createContext()

// 2.   Crear el Provider, para proveer el contexto
// Solo sirve para rodear la APP 
export function FilterProvider({children}){
    //Estado Global
    const [filters,setFilters]=useState({
        category:'all',
        minPrice:0
    })
    return (
        <FilterContext.Provider value={{
            filters,setFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}