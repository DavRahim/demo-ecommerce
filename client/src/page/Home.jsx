import TitleSection from "../components/Home/TitleSection";
import Header from "../components/Header/Header";
import Banner from "../components/Home/Banner";
import FlashSale from "../components/Home/FlashSale";
import Footer from "../components/Footers/Footer";
import Products from "../Products/Products";
import Login from "../components/Form/Login";

const Home = () => {
    return (
        <div className="">
          <Header/>
          <Banner/>
            <TitleSection title={"Our Shop Product"} description={"Our summer product "}/>
            <Products/>
            <FlashSale/>
            <Login/>
            <Footer/>
           
        </div>
    );
};

export default Home;
