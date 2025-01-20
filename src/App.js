import Footer from "./components/Footer";
import Products from "./pages/products";
import ScrollToTopButton from './components/ScrollToTopButton';
import Jumbotron from './components/Jumbotron';
import UnderConstruction from "./components/underConstruction/UnderConstruction";

function App() {
  return (
    <>
    <UnderConstruction />
      <Jumbotron />
      <Products />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;