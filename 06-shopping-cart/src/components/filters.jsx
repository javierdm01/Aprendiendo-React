/* eslint-disable react/prop-types */
import {  useId } from 'react'
import './filters.css' 
import { useFilters } from '../hooks/useFilter'
export function Filters() {
    const {filters,setFilters}=useFilters();
    const minPriceFilterId=useId()
    const categoryFilterId=useId()


    const handleChangeMinPrice=(e)=>{
        setFilters(prevState =>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory=(e)=>{
        setFilters(prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input
                type='range'
                id={minPriceFilterId}
                min='0'
                max='1000'
                value={filters.minPrice}
                onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>        
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory} >
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Celulares</option>
                </select>
            </div>
        </section>
    )
}