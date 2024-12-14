import Footer from "./components/Footer"
import NavScroll from "./components/Navbar"
import UnderConstrution from "./components/UnderConstrution"
import Products from "./components/Products"
import Carousel from "./components/Carousel"
import Product from "./pages/product"

function App() {
  return (
    <>
      <NavScroll />
      <Carousel />
      <UnderConstrution />
      <Products />
      <Footer />
      {/* <Product/> */}
    </>
  )
}
export default App