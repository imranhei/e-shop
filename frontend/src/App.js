import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from './components/AdminPanel';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AdminPanel />
      <Routes>

      </Routes>
      {/* <h1 className='text-2xl'>Hello</h1> */}
    </Router>
  );
}

export default App;
