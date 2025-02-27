import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  useEffect(() => {
    setIsMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutsideMenu = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  return (
    <>
      <div className="relative overflow-hidden font-playfair">
        <div className="flex lg:justify-center justify-between gap-10 bg-white w-full z-50 p-2 fixed ">
          <div className="flex  items-center gap-1 lg:w-1/5">
            <img src="/logo.jpeg" alt="logo" className="w-[60px] h-[60px]" />
            <h1 className="text-[#10377a] font-medium lg:text-3xl">
              Hotel Aashirwad
            </h1>
          </div>
          <div className="flex items-center  lg:justify-between justify-end ">
            <div className="lg:hidden">
              <FontAwesomeIcon
                icon={faBars}
                size="2xl"
                onClick={() => setIsMenu(!isMenu)}
                className="cursor-pointer hover:bg-[#10377a] hover:text-white border p-3 text-gray-500 rounded "
              />
            </div>
            <ul className="lg:flex hidden  text-xl list-none text-blue-950 gap-8">
              <li className="hover:text-black transition duration-500 cursor-pointer">
                <Link to="/"> Home</Link>
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                <Link to="/rooms">Rooms</Link>
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                <Link to="/aboutus">About</Link>
              </li>
              {/* <li className="hover:text-black transition duration-500 cursor-pointer">
                Features
              </li> */}
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Services
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Review
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <button className="hidden rounded-md lg:block px-5 py-3 h-fit mt-2 transition duration-500  justify-between hover:bg-black hover:text-white   bg-[#10377a]  cursor-pointer text-white  text-2xl">
            <Link to="/reservationform">Reservation</Link>
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`absolute z-50 top-0 left-0 h-screen min-w-[200px] w-1/5 bg-[#10377a] 
    transition-all  duration-400 ease-linear 
    ${isMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
  `}
      >
        <ul className="w-full p-10 text-2xl bg-[#10377a]  list-none text-gray-500 flex flex-col gap-7  ">
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/"> Home</Link>
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/rooms">Rooms</Link>
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/aboutus">About</Link>
          </li>

          <li className="hover:text-black transition duration-500 cursor-pointer">
            Services
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Review
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/contactus">Contact</Link>
          </li>
          <button className="hover:text-black transition duration-500 cursor-pointer">
            <Link to="/reservationform">Reservation</Link>
          </button>
        </ul>
      </div>
    </>
  );
};
