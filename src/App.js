import './App.css';
import Header from './components/header';
import ReactDOM from "react-dom/client";
import HomePage from './components/home';
import AboutUs from './components/aboutUs';
import OurProducts from './components/our-products';
import Services from './components/services';
import Contact from './components/contact';
import Man from './components/man';
import Woman from './components/woman';
import Children from './components/children';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

const tovars = [
  {
      id: 1, 
      img: "Image.png",
      title: "Gloves",
      brand: "Lacoste",
      price: 55
  },
  {
      id: 2, 
      img: "Image-2.png",
      title: "Tankini",
      brand: "Gucci",
      price: 55
  },
  {
    id: 3, 
    img: "Image-1.png",
    title: "Kilt",
    brand: "Diesel",
    price: 55
  },
  {
      id: 4, 
      img: "Image-3.png",
      title: "Underwear",
      brand: "Polo Ralph Lauren",
      price: 55
  },
  {
      id: 5, 
      img: "Image-4.png",
      title: "Sandals",
      brand: "Reserved",
      price: 55
  },
  {
      id: 6, 
      img: "Image-5.png",
      title: "Corset",
      brand: "Marc Jacobs",
      price: 55
  },
  {
      id: 7, 
      img: "Image-6.png",
      title: "Cravat",
      brand: "Guess Jeans",
      price: 55
  },
  {
      id: 8, 
      img: "Image-7.png",
      title: "Camisole",
      brand: "Asics",
      price: 55
  },
  {
    id: 9, 
    img: "Image-2.png",
    title: "Tankini",
    brand: "Gucci",
    price: 55
  }
]

function App() {
  const [tovar, setTovar] = useState(tovars)

  return (
    <>
     <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='home' element={<HomePage tovar={tovar}/>}></Route>
        <Route path='about-us' element={<AboutUs/>}></Route>
        <Route path='our-products' element={<OurProducts/>}></Route>
        <Route path='services' element={<Services/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='man' element={<Man/>}></Route>
        <Route path='woman' element={<Woman/>}></Route>
        <Route path='children' element={<Children/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
