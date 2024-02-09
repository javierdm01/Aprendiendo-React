const CAT_ENDPOINT_RAMDON_FACT= 'https://catfact.ninja/fact'


export const requestFact =()=>{
    return fetch(CAT_ENDPOINT_RAMDON_FACT)
    .then(res => res.json())
    .then(data => {
      const{fact}= data
      return (fact)
    })
  }