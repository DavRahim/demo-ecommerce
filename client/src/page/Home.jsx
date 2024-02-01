import TitleSection from "../components/Home/TitleSection";
import Header from "../components/Header/Header";
import Banner from "../components/Home/Banner";
import Products from "../components/Products/Products";
import FlashSale from "../components/Home/FlashSale";
import Footer from "../components/Footers/Footer";

const Home = () => {
    return (
        <div className="container">
          <Header/>
          <Banner/>
            <TitleSection title={"Our Shop Product"} description={"Our summer product "}/>
            <Products/>
            <FlashSale/>
            <Footer/>
           
        </div>
    );
};

export default Home;
