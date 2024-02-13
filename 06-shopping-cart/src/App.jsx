import { useState } from "react"
import { Products } from "./components/products"
import { products as initalProducts } from './mocks/products.json'
import { Header } from "./components/header";

function App() {
  const [products] = useState(initalProducts)
  const [filters, setFilters]= useState({ category:'all', minPrice:0});

const filterProducts=()=>{
  return products.filter(product =>{
    return(
      product.price >= filters.minPrice &&
      (
        filters.category==='all' ||
        product.category===filters.category
      )
    )
  })
}

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)}/>

    </>
  )
}

export default App
