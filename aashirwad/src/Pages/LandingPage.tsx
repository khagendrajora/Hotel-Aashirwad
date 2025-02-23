import { About } from "../Components/About";
import { Rooms } from "../Components/Rooms";
import { Gallary } from "../Components/Gallary";
import { Services } from "../Components/Services";
import { Testimonials } from "../Components/Testimonials";

export const LandingPage = () => {
  return (
    <>
      <div>
        <About />
        <Gallary />
        <Rooms />
        <Services />
        <Testimonials />
      </div>
    </>
  );
};
