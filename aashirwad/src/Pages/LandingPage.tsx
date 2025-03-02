import { About } from "../Components/About";
import { Rooms } from "../Components/Rooms";
import { Gallary } from "../Components/Gallary";
import { Services } from "../Components/Services";
import { Testimonials } from "../Components/Testimonials";
import { GallaryTwo } from "../Components/GallaryTwo";
import { Contact } from "../Components/Contact";
import { Hero } from "../Components/Hero";

export const LandingPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Gallary />
        <Rooms />
        <GallaryTwo />
        <Services />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};
