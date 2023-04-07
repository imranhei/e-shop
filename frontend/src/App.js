import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Customer from './components/Customer';

const App = () => {
  const isAdmin = true;
  return (
    <div className='flex'>
      <Router>
      <Navbar />
      {isAdmin ? <AdminPanel /> : <></>}
      <div className='bg-green-100 w-full'>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/admindashboard' element={<AdminDashboard />}/>
          <Route path='/products' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/customers' element={<Customer />} />
        </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;
