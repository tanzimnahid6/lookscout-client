import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";
import Message from "../components/messaging/Message";
import RefundingSection from "../components/refunding/RefundingSection";

const Main = () => {
  return (
    <div className="w-full ">
      <NavBar></NavBar>
      <Banner></Banner>
      <Message></Message>
      {/* <RefundingSection></RefundingSection> */}
    </div>
  );
};

export default Main;