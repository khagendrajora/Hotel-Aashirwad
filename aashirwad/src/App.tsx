import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./Layout/Layout";
import { LandingPage } from "./Pages/LandingPage";
import { Rooms } from "./Pages/Rooms";
import { RoomDetail } from "./Pages/RoomDetail";
import { ReservationPage } from "./Pages/ReservationPage";
import { ContactPage } from "./Pages/ContactPage";
import { AboutPage } from "./Pages/AboutPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/roomdetail" element={<RoomDetail />} />
            <Route path="/reservationform" element={<ReservationPage />} />
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/aboutus" element={<AboutPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
