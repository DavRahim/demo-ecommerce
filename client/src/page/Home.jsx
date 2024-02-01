import TitleSection from "../components/Home/TitleSection";
import Header from "../components/Header/Header";
import Banner from "../components/Home/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <TitleSection
        title={"Our Shop Product"}
        description={"Our summer product "}
      />
    </div>
  );
};

export default Home;
