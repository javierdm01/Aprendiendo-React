
import { useRef, useState, useMemo, useCallback } from 'react'
import { searchFilms } from '../movies'
//import { useState } from "react"


export const useFilms=({search, sort})=>{
    const [film, setFilm]= useState()
    const [loading,setLoading] = useState(false)
    const previousSearch= useRef(search)
    

    /*useCallback se utiliza para memorizar funciones,
    para que no se renderize la función cada vez
    que se modifica 'search'
    */

    const getFilms=useCallback( 
         async({search})=>{
        if(search== previousSearch.current) return
       try {
        setLoading(true)
        previousSearch.current= search
        //searchFilms() -> This function return data fetching to omdb api
        const newFilms= await searchFilms({search})
        setFilm(newFilms)
       } catch (error) {
        throw new Error('Can`t get films')
       }finally{
        //Se ejecuta siempre
        setLoading(false)
       }
       
    },[])

    /*useMemo se utiliza para memorizar varibales, 
    y que no se renderice la página cada vez que modificamos
    s'ort' */
    const sortedFilms= useMemo(()=> {
        return sort ?
    [...film].sort((a,b) => a.year.localeCompare(b.year)) : film},[film,sort])
    
    
    return {film : sortedFilms,getFilms, loading}
}


