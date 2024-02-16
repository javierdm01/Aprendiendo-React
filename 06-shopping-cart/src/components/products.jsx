/* eslint-disable react/prop-types */
import './products.css'
import { products as initalProducts } from '../mocks/products.json'
import { AddToCartIcon } from "./icons";
import { useFilters } from '../hooks/useFilter';
import { RemoveFromCartIcon } from './icons';
import { useCart } from '../hooks/useCart';



export function Products() {
    
    const {filterProducts}= useFilters()
    const {addToCart,articles,removeFromCart}= useCart()
    const checkProductInCart= product =>{
        return articles.some(item => item.id == product.id)
    }
    const filteredProduct= filterProducts(initalProducts)
    return(
        <main className='products'>
            <ul>
                {
                    filteredProduct.slice(0,10).map(product=> {
                        const isProductInCart= checkProductInCart(product)
                        return (
                            <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - {product.price} €
                            </div>
                            <div>
                                <button onClick={()=>isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                {
                                    isProductInCart ?
                                    <RemoveFromCartIcon/> : <AddToCartIcon/>
                                }
                                </button>
                                    
                            </div>
                        </li>
                        )
                    }  
                    )
                }
                
            </ul>
        </main>
    )
}