
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';
import UserCard from './Pages/UserCard/UserCard.jsx';
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<UserCard/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);
