import { useState } from 'react'
import Header from './components/Header/Header';
import CarouselEffect from "./components/Carousel/CarouselEffect";
import Category from './components/Category/Category';
import Product from './components/Product/Product'
// import './App.css'

function App() {
  return (
    <>
      <Header />
      <CarouselEffect />
      <Category/>
      <Product/>
    </>
  );
}

export default App
