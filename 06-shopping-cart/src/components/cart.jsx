import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import './cart.css'
import { useCart } from "../hooks/useCart";

export function Cart() {
    const {articles,clearCart,addToCart}= useCart()
    const cartCheckboxId= useId()

    const handleClear=()=>{
        clearCart()
    }
    const handleMoreItems=(article)=>{
        addToCart(article)
    }

    return(
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
            <CartIcon/>
            </label>
            <input type="checkbox" name="" id={cartCheckboxId} hidden/>

            <aside className="cart">
                <ul>
                    {
                            articles ? articles.map( article =>(
                                <li key={article.id}>
                            <img src={article.thumbnail} alt="key" />
                            <div>
                                <strong>{article.title}</strong> - {article.price} $
                            </div>
                            <footer>
                                <small>
                                    {article.quantity}
                                </small>
                                <button onClick={()=>handleMoreItems(article)}>+</button>
                            </footer>
                            </li>
                            )) : ''
                    }
                </ul>
                <button onClick={handleClear}><ClearCartIcon/></button>
            </aside>
        </>
    )
}