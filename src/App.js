import React from 'react';
import Footer from "./components/Footer";
import NavScroll from "./components/Navbar";
import UnderConstrution from "./components/UnderConstrution";
import Products from "./pages/products";
import Carousel from "./components/Carousel";
import ScrollToTopButton from './components/ScrollToTopButton'; 

function App() {
  return (
    <>
      <NavScroll />
      <Carousel />
      <UnderConstrution />
      <Products />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;