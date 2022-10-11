import React from 'react';
import logo from './img/upay-logo-1.png';
import { Disclosure, Menu, Transition,Switch  } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css';
import { useState,Fragment } from 'react'
import { Routes, Route,Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import Products from './components/Products';



function App() {

  return (
    <div className="md:container md:mx-auto">

      <Navbar/>
      

    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/detail' element={<ProductDetail/>} />
      <Route path='/add' element={<AddProduct/>} />
    </Routes>

    </div>   
  );
}

export default App;
