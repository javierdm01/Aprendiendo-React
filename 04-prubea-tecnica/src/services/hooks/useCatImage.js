import { useEffect, useState } from 'react'
//Custom Hook - Return ImgUrl

export function useCatImage({fact}){
    //Generate random img whit first three words in fact
    const [img,setImg]= useState(null)
    useEffect(()=>{
      if(!fact) return
      const threeFirstWord= fact.split(' ', 3)
      fetch(`https://cataas.com/cat/says/${threeFirstWord.toString().replaceAll(","," ")}`)
      .then(res =>  setImg(res.url))
    },[fact])
    return {img}
  }