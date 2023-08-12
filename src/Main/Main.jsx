import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";

const Main = () => {
  return (
    <div className="max-w-[1440px] ">
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
};

export default Main;