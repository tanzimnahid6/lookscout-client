import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";
import LeftToright from "../components/leftToright/leftToright";
import Message from "../components/messaging/Message";
import RefundingSection from "../components/refunding/RefundingSection";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Message></Message>
      <RefundingSection></RefundingSection>
    <LeftToright></LeftToright>
    </div>
  );
};

export default Main;