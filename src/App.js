import Footer from "./components/Footer"
import NavScroll from "./components/Navbar"
import UnderConstrution from "./components/UnderConstrution"
import Products from "./components/Products"
// import Carousel from "./components/Carousel"
import Styles from './styles/app.module.css'


function App() {
  return (
    <>
      <NavScroll />
      <div className="welcome">
        <img src='https://mdbootstrap.com/img/new/slides/041.webp' className={`${Styles.imgTitle} w-100`} shadow-4 alt='...' />
        <h1 className={Styles.title}>E-Store Products Center</h1>
        <p className={Styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae odit, ad corrupti neque hic, consectetur nulla illum excepturi nisi error eaque delectus ex ipsa sint? Mollitia ut dicta corporis!</p>
      </div>
      {/* <Carousel /> */}
      <UnderConstrution />
      <Products />
      <Footer />
    </>
  )
}
export default App