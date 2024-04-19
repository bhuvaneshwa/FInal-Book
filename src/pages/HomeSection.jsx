import General from "./Books/General";
import Newbooks from "./Books/NewBooks";
import Permium from "./Books/perminum";
import Homehero from "./Homehero";
import Membership from "./Membership";
import SecondBanner from "./SecondBanner";
import Testimonial from "./Testimonial";

const HomeSection = () => {
  return (
    <div>
      <Homehero />

      <SecondBanner />

     
        <General />
        <Permium />
        <Newbooks />
    

      <Testimonial />

      <Membership />
    </div>
  );
};

export default HomeSection;
