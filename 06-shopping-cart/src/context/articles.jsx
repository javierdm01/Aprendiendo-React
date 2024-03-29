/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";



export const ArticleContext= createContext()


/*El Método useReducer() se utiliza para cuando tenemos muchas
funciones para cambiar de estado.
Se utiliza el useReducer para simplificar la forma de llamar a distintos
cambios de estado. Y es preferible hacerlo así en estas ocasiones, ya que 
a la hora de testear o encontrar fallas es mas sencillo

Es decir, realmente las siguientes funciones es como funciona un estado por detras

Esta función consta de un estado inicial, y una fucnion reducer con*/
const initialState=[]
const reducer=(state,action) =>{
    const {type: actionType, payload: actionPayload}= action
    switch (actionType) {
        case 'ADD_TO_CART':{
            const{id} =actionPayload
            const productInCart= state.findIndex(item=> item.id== id)

            if(productInCart >= 0){
                //una forma de sumar uno a la cantidad con struturedClone()
                const newCart= structuredClone(state)
                newCart[productInCart].quantity +=1
                return newCart
            }
            return [
                ...state, {...actionPayload, quantity:1}
            ]
        }   
        case 'REMOVE_FROM_CART':{
            const {id} = actionPayload
            return state.filter(item => item.id !== id)
        }
        case 'CLEAR_CART':{
            return initialState
        }

        default:
            break;
    }
    return state
}


export function ArticleProviders({children}) {
    const [state,dispatch] =useReducer(reducer, initialState)

    const addToCart= product => dispatch({type: 'ADD_TO_CART', payload:product})

    const removeFromCart=product => dispatch({ type: 'REMOVE_FROM_CART', payload:product})

    const clearCart=product => dispatch({ type: 'CLEAR_CART'})

    return(
        <ArticleContext.Provider value={{
            articles: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </ArticleContext.Provider>
    )
    
}