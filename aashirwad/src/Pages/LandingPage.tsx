import { About } from "../Components/About";
import { Rooms } from "../Components/Rooms";
import { Services } from "../Components/Services";

export const LandingPage = () => {
  return (
    <>
      <div>
        <About />
        <Services />
        <Rooms />
      </div>
    </>
  );
};
