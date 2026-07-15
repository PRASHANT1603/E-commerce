import React from 'react'
import{Route, Routes} from 'react-router-dom'
import AddProduct from './components/AddProduct.jsx'
import LandingPage from './components/LandingPage.jsx'
import LoginPage from './pages/login.page.jsx'

function App() {
 
  return (
    
    <Routes>  
      <Route path="/" element = {<LandingPage/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App;
  