
import { Products } from "./components/products"
import { Header } from "./components/header";
import {Footer} from './components/footer'
import { Cart } from "./components/cart";
import { ArticleProviders } from "./context/articles";


function App() {

  return (
    <ArticleProviders>
      <Header/>
      <Cart />
      <Products/>
      <Footer/>

    </ArticleProviders>
  )
}

export default App
