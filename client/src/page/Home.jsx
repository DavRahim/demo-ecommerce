import TitleSection from "../components/Home/TitleSection";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <TitleSection
        title={"Our Shop Product"}
        description={"Our summer product "}
      />
    </div>
  );
};

export default Home;
