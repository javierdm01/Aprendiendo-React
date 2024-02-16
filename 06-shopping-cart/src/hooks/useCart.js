import { useContext } from "react";
import { ArticleContext } from "../context/articles";


export const useCart=()=>{
    const cart = useContext(ArticleContext)

    if(cart == undefined) throw new Error(' useCart must be used with in a CartProvider')

    return cart
}