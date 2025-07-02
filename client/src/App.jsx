import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import UpperContent from './Components/UpperContent/UpperContent';
import ProductPage from './Pages/ProductPage/ProductPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/> 
      <UpperContent/>
      <ProductPage/>

    
    </>
  )
}

export default App
