import { useState } from 'react'
import Header from './components/Header/Header';
import CarouselEffect from "./components/Carousel/CarouselEffect";
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CarouselEffect />
    </>
  );
}

export default App
