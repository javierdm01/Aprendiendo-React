
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

import { Layout } from './components/Layout'
import {Actors} from './components/Actors'
import {Home} from './components/Home'
import { Episodes } from './components/Episodes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='actors' element={<Actors/>}></Route>
            <Route path='episodes' element={<Episodes/>}></Route>
        </Route>
    </Routes>

  </BrowserRouter>
  
)
