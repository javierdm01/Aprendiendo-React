/* eslint-disable react/prop-types */
import { useState } from 'react'
import './filters.css' 
export function Filters({changeFilters}) {
    const [minPrice, setMinPrice]= useState(30)
    
    const handleChangeMinPrice=(e)=>{
        setMinPrice(e.target.value)
        changeFilters(prevState =>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory=(e)=>{
        changeFilters(prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor='price'>Precio a partir de:</label>
                <input
                type='range'
                id='price'
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>        
            <div>
                <label htmlFor='categoria'>Categoría</label>
                <select id='categoria' onChange={handleChangeCategory} >
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}