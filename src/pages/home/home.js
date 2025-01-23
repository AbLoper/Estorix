import Footer from "../../components/footer/Footer";
import Jumbotron from "../../components/jumbtron/Jumbotron";
import ScrollToTopButton from "../../components/scrollToTopButton/ScrollToTopButton";
import UnderConstruction from "../../components/underConstruction/UnderConstruction";
import Products from "../products/products";

function Home() {
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

export default Home;




