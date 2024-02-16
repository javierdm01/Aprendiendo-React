
import { Products } from "./components/products"
import { products as initalProducts } from './mocks/products.json'
import { Header } from "./components/header";
import { useFilters } from "./hooks/useFilter";
import {Footer} from './components/footer'


function App() {
    const {filterProducts}=useFilters()

    const filteredProduct=filterProducts(initalProducts)




  return (
    <>
      <Header/>
      <Products products={filteredProduct}/>
      <Footer/>

    </>
  )
}

export default App
