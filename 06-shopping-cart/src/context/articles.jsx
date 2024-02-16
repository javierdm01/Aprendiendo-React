/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";



export const ArticleContext= createContext()


export function ArticleProviders({children}) {
    const [articles,setArticles]= useState([])

    const addToCart= product=>{
        //Primero Comprobar Si esta en el carrito
        const productInCart= articles.findIndex(item=> item.id== product.id)

        if(productInCart >= 0){
            //una forma de sumar uno a la cantidad con struturedClone()
            const newCart= structuredClone(articles)
            newCart[productInCart].quantity +=1
            return setArticles(newCart)
        }
        setArticles( prevState=>([
            ...prevState,{
                ...product,
                quantity:1
            }
        ]))
    }
    
    const clearCart= () =>{
        setArticles([])
    }
    const removeFromCart= product =>{
        setArticles(prevState=> prevState.filter(item => item.id != product.id))
    }

    return(
        <ArticleContext.Provider value={{articles,addToCart,clearCart,removeFromCart}}>
            {children}
        </ArticleContext.Provider>
    )
    
}