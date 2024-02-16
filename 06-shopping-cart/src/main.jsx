
import ReactDOM from 'react-dom/client'
import { FilterProvider } from './context/filters.jsx'
import App from './App.jsx'
import './index.css'
import { ArticleProviders } from './context/articles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
      <App />
  </FilterProvider>,
)
