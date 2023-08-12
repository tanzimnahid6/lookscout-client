import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";
import Message from "../components/messaging/Message";

const Main = () => {
  return (
    <div className="max-w-[1440px] ">
      <NavBar></NavBar>
      <Banner></Banner>
      <Message></Message>
    </div>
  );
};

export default Main;