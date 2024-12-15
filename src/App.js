import Footer from "./components/Footer"
import NavScroll from "./components/Navbar"
import UnderConstrution from "./components/UnderConstrution"
import Products from "./pages/products"
import Carousel from "./components/Carousel"
import ContactUs from "./pages/contactus"
// import Product from "./pages/product"

function App() {
  return (
    <>
      <NavScroll />
      <Carousel />
      <UnderConstrution />
      <Products />
      <Footer />
      {/* <Product/> */}
      {/* <ContactUs/> */}
    </>
  )
}
export default App