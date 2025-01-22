import Jumbotron from "./components/jumbtron/Jumbotron";
import UnderConstruction from "./components/underConstruction/UnderConstruction";
import Products from "./pages/products/products"
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>
      <Jumbotron />
      <UnderConstruction />
      <Products />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;