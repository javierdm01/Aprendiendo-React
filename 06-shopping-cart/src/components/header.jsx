/* eslint-disable react/prop-types */
import { Filters } from "./filters"
export function Header({changeFilters}) {
    return (
        <header>
            <h1>React Shop 🛒</h1>
            <Filters changeFilters={changeFilters}/>
        </header>
    )
}