
import { motion } from "framer-motion"; // Import motion from framer-motion
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Header/Banner";
import NavBar from "../components/Header/NavBar";
import InputSection from "../components/Input/InputSection";
import LeftToRight from "../components/leftToright/leftToright";
import Message from "../components/messaging/Message";
import Redefining from "../components/refunding/Redefining";
import Sponsored from "../components/sponsore-logo/Sponsored";
import Testimonial from "../components/testimonial/Testimonial";
// import "./Main.css";

const Main = () => {
  // Define a variant for the fade-in animation
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <NavBar></NavBar>

      {/* Apply fade-in animation to the Banner component */}
      <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
        <Banner></Banner>
      </motion.div>

      <Message></Message>
      <Redefining></Redefining>
      <LeftToRight></LeftToRight>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Sponsored></Sponsored>
      <InputSection></InputSection>
      <Footer></Footer>
    </div>
  );
};

export default Main;
