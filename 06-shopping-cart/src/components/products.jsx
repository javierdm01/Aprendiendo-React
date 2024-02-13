/* eslint-disable react/prop-types */
import './products.css'
import { AddToCartIcon } from "./icons";

export function Products({products}) {
    return(
        <main className='products'>
            <ul>
                {
                    products.slice(0,10).map(product=>(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - {product.price} €
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon/>
                                </button>
                                    
                            </div>
                        </li>
                        
                    ))
                }
            </ul>
        </main>
    )
}