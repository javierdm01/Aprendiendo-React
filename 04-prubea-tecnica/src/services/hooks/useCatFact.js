import { useEffect, useState } from 'react'
import { requestFact } from '../fact'

//Custom Hook - Return Cat Fact
export function useCatFact(){
    //Generate random fact 
    const [fact, setFact] = useState()
    const refreshFact=()=>{
        requestFact().then(setFact)
    }
    useEffect( ()=>{
      refreshFact()
    },[])
    return {fact, refreshFact}
  }