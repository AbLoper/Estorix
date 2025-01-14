import Footer from "./components/Footer";
import UnderConstrution from "./components/UnderConstrution";
import Products from "./pages/products";
import ScrollToTopButton from './components/ScrollToTopButton';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <>
      <Jumbotron />
      <UnderConstrution />
      <Products />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;