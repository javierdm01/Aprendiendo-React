import { useState } from "react"
import { Products } from "./components/products"
import { products as initalProducts } from './mocks/products.json'
import { Header } from "./components/header";
import { useFilters } from "./hooks/useFilter";
import {Footer} from './components/footer'


function App() {
  const [products] = useState(initalProducts)
    const {setFilters,filterProducts}=useFilters()
    const filteredProduct=filterProducts(products)




  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProduct}/>
      <Footer/>

    </>
  )
}

export default App
