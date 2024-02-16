/* eslint-disable react/prop-types */
import './products.css'
import { products as initalProducts } from '../mocks/products.json'
import { AddToCartIcon } from "./icons";
import { useFilters } from '../hooks/useFilter';

export function Products() {
    const {filterProducts}= useFilters()
    const filteredProduct= filterProducts(initalProducts)
    return(
        <main className='products'>
            <ul>
                {
                    filteredProduct.slice(0,10).map(product=>(
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