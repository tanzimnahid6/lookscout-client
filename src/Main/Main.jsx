import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";
import InputSection from "../components/Input/InputSection";
import LeftToright from "../components/leftToright/leftToright";
import Message from "../components/messaging/Message";
import RefundingSection from "../components/refunding/RefundingSection";
import Sponsored from "../components/sponsore-logo/Sponsored";
import Testimonial from "../components/testimonial/Testimonial";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <NavBar></NavBar>
      <Banner></Banner>
      <Message></Message>
      <RefundingSection></RefundingSection>
      <LeftToright></LeftToright>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Sponsored></Sponsored>
      <InputSection></InputSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
