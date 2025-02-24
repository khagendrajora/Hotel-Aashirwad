import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    {
      src: "/Dashboard/hotel_view.jpg",
      alt: "Hero Image 2",
      text: "Peaceful Environment",
    },
    { src: "/room.jpg", alt: "Hero Image 2", text: "Finest Rooms" },
    // { src: "/Dashboard/cable_car.jpg", alt: "Hero Image 2" },

    {
      src: "/Dashboard/mountain_range.jpg",
      alt: "Hero Image 2",
      text: "Eye Catching View",
    },
  ];

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
      <div className="relative overflow-hidden">
        <div className="flex lg:justify-center justify-between gap-10 bg-white w-full z-50 p-5 fixed ">
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
            <ul className="lg:flex hidden  text-xl font-serif list-none text-blue-950 gap-8">
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Home
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                About
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Features
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Services
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Review
              </li>
              <li className="hover:text-black transition duration-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
          <button className="hidden rounded-md lg:block px-5 transition duration-500 p-2 justify-between hover:bg-black hover:text-white   bg-[#10377a]  cursor-pointer text-white  text-2xl">
            Reservation
          </button>
        </div>

        <div className="slider-container w-full  ">
          <Slider {...settings}>
            {images.map((image, i) => (
              <div key={i} className="relative">
                <img
                  src={image.src}
                  alt="image"
                  className="h-screen w-screen bg-fixed object-cover"
                />
                <div className="absolute top-1/2 w-full">
                  <h1 className=" font-poppins text-white text-8xl text-center w-full">
                    {image.text}
                  </h1>
                  <button className="flex mx-auto  p-4 font-mono cursor-pointer hover:bg-black transition duration-800 text-4xl  text-white bg-[#10377a]">
                    Find More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`absolute z-50 top-0 left-0 h-screen min-w-[200px] w-1/5 bg-[#10377a] 
    transition-all  duration-400 ease-linear 
    ${isMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
  `}
      >
        <ul className="w-full p-10 text-2xl bg-[#10377a] font-serif list-none text-gray-500 flex flex-col gap-7  ">
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Home
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            About
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Features
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Services
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Review
          </li>
          <li className="hover:text-black transition duration-500 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};
