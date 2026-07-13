import React from 'react'
import{Route, Routes} from 'react-router-dom'
import AddProduct from './components/AddProduct.jsx'
import LandingPage from './components/LandingPage.jsx'

function App() {
 
  return (
    
    <Routes>  
      <Route path="/" element = {<LandingPage/>}/>
      <Route path='/add' element={<AddProduct/>}/>
    </Routes>
  )
}

export default App;
  