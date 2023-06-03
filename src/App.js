import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import SlideNav from './component/SlideNav';
import Footer from './component/Footer';
import AddProductForm from './component/Form';
import EditProductForm from './component/EditProductForm';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/edit-product/:id" element={<EditProductForm />} />
      </Routes>
      <SlideNav />
    </Router>
  );
}

export default App;
