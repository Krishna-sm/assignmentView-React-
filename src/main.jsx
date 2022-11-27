import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import App1 from './Components/App1'
import App2 from './Components/App2'
import App3 from './Components/App3'
import App4 from './Components/App4'
import App5 from './Components/App5'
import App6 from './Components/404'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
   <Route  path='/' element={ <App />}/>
   <Route  path='/internet' element={ <App1 />}/>
   <Route  path='/categories' element={ <App2 />}/>
   <Route  path='/Networks' element={ <App3 />}/>
   <Route  path='/faq' element={ <App4 />}/>
   <Route  path='/thanku' element={ <App5 />}/>
   <Route  path='*' element={ <App6 />}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
