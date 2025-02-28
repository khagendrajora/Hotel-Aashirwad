// import {
//   faBed,
//   faChampagneGlasses,
//   faLightbulb,
//   faUtensils,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

import { useState } from "react";

export const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<string>("");
  // const [service, setService] = useState<string>("resturant");
  return (
    <>
      <div className="bg-[#f5f5f5] lg:pb-20 py-10 font-playfair">
        <div className="flex flex-col justify-center w-full text-center gap-6">
          <div className=" w-full lg:py-10 text-center">
            <h1 className="font-poppins w-full lg:text-7xl text-5xl opacity-10">
              SERVICES
            </h1>
            <h1 className="font-medium lg:-mt-8 -mt-5 text-[#10377a] lg:text-6xl text-3xl">
              OUR SERVICES
            </h1>
          </div>
          {/* 
          <p className="flex justify-center text-xl mx-auto md:w-1/2 pb-10 text-gray-500 px-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            blanditiis sit, mollitia ad et quidem modi laborum voluptates saepe
          </p> */}

          {/* <div className="flex flex-wrap font-playfair justify-center md:w-11/12 2xl:w-3/4 bg-neutral-100 md:p-15  p-3 gap-6 mx-auto">
            <div className="lg:w-1/2 flex">
              {service === "resturant" ? (
                <img
                  src="/GOVL1878.JPG"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              ) : service === "bar" ? (
                <img
                  src="/bar.jpg"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              ) : service === "rooms" ? (
                <img
                  src="/GOVL1878.JPG"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              ) : service === "launge" ? (
                <img
                  src="/launge.jpg"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col  lg:w-2/5 h-full lg:space-y-8  space-y-5 ">
              <div
                className={`flex items-center gap-5  hover:bg-[#10377a] group p-2 md:py-5 cursor-pointer ${
                  service === "resturant"
                    ? "bg-[#10377a] text-white  "
                    : "bg-white"
                }`}
                onClick={() => setService("resturant")}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faUtensils}
                    size="xl"
                    className="text-orange-400"
                  />
                </div>
                <div className="text-start  flex flex-col gap-2">
                  <h1
                    className={`font-bold text-2xl  ${
                      service === "resturant" ? "text-white" : "text-[#10377a]"
                    } group-hover:text-white`}
                  >
                    Resturant
                  </h1>
                  <p
                    className={`${
                      service === "resturant" ? "text-white" : "text-gray-600"
                    } group-hover:text-white`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    alias maiores earum nesciunt amet culpa, perferendis ut!
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center gap-5 hover:bg-[#10377a] group p-2 md:py-5 cursor-pointer ${
                  service === "bar" ? "bg-[#10377a] text-white " : "bg-white"
                }`}
                onClick={() => setService("bar")}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faChampagneGlasses}
                    size="xl"
                    className="text-orange-400"
                  />
                </div>
                <div className="text-start flex flex-col gap-2">
                  <h1
                    className={`font-bold  text-2xl ${
                      service === "bar" ? "text-white" : "text-[#10377a]"
                    } group-hover:text-white`}
                  >
                    Bar
                  </h1>
                  <p
                    className={`${
                      service === "bar" ? "text-white" : "text-gray-600"
                    } group-hover:text-white`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    alias maiores earum nesciunt amet culpa, perferendis ut!
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center gap-5  hover:bg-[#10377a] group p-2 md:py-5 cursor-pointer ${
                  service === "rooms" ? "bg-[#10377a] text-white " : "bg-white"
                }`}
                onClick={() => setService("rooms")}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faBed}
                    size="xl"
                    className="text-orange-400"
                  />
                </div>
                <div className="text-start flex flex-col gap-2">
                  <h1
                    className={`font-bold  text-2xl ${
                      service === "rooms" ? "text-white" : "text-[#10377a]"
                    } group-hover:text-white`}
                  >
                    Rooms
                  </h1>
                  <p
                    className={`${
                      service === "rooms" ? "text-white" : "text-gray-600"
                    } group-hover:text-white`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    alias maiores earum nesciunt amet culpa, perferendis ut!
                  </p>
                </div>
              </div>
              <div
                className={`flex items-center gap-5  hover:bg-[#10377a] group p-2 md:py-5 cursor-pointer ${
                  service === "launge" ? "bg-[#10377a] text-white " : "bg-white"
                }`}
                onClick={() => setService("launge")}
              >
                <div>
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    size="xl"
                    className="text-orange-400"
                  />
                </div>
                <div className="text-start flex flex-col gap-2">
                  <h1
                    className={`font-bold  text-2xl ${
                      service === "launge" ? "text-white" : "text-[#10377a]"
                    } group-hover:text-white`}
                  >
                    Launge
                  </h1>
                  <p
                    className={`${
                      service === "launge" ? "text-white" : "text-gray-600"
                    } group-hover:text-white`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                    alias maiores earum nesciunt amet culpa, perferendis ut!
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex flex-wrap justify-center font-playfair gap-1 py-5 text-white between w-full  mx-auto">
            <div className="md:w-1/4 min-w-[225px] lg:min-w-[350px]  sm:w-3/4">
              <div
                key={"room"}
                className="relative"
                onMouseEnter={() => setHoveredIndex("room")}
                onMouseLeave={() => setHoveredIndex("")}
              >
                <img
                  src="/room.jpg"
                  alt=""
                  className="object-cover h-[500px]"
                />
                {/* <div className="absolute top-1/2 text-center w-full text-7xl">
                  Room
                </div> */}
                <div
                  className={`absolute bottom-0 left-0 w-full ${
                    hoveredIndex === "room" ? "h-full " : "h-0 "
                  } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                ></div>
                <div
                  className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                    hoveredIndex === "room"
                      ? "translate-y-0 "
                      : "translate-y-1/2 opacity-0"
                  }`}
                >
                  <div className={`  text-7xl text-white `}>Room</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 min-w-[225px] lg:min-w-[350px] sm:w-3/4">
              <div
                key={"bar"}
                className="relative"
                onMouseEnter={() => setHoveredIndex("bar")}
                onMouseLeave={() => setHoveredIndex("")}
              >
                <img
                  src="/bar2.jpg"
                  alt=""
                  className="object-cover h-[500px]"
                />
                {/* <div className="absolute  top-1/2 text-center w-full text-7xl">
                  Bar
                </div> */}
                <div
                  className={`absolute bottom-0 left-0 w-full ${
                    hoveredIndex === "bar" ? "h-full " : "h-0 "
                  } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                ></div>
                <div
                  className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                    hoveredIndex === "bar"
                      ? "translate-y-0 "
                      : "translate-y-1/2 opacity-0"
                  }`}
                >
                  <div className={`  text-7xl text-white `}>Bar</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 min-w-[225px] lg:min-w-[350px] sm:w-3/4">
              <div
                key={"resturant"}
                className="relative"
                onMouseEnter={() => setHoveredIndex("resturant")}
                onMouseLeave={() => setHoveredIndex("")}
              >
                <img
                  src="/launge.jpg"
                  alt=""
                  className="object-cover h-[500px]"
                />
                {/* <div className="absolute top-1/2 text-center w-full text-7xl">
                  Resturant
                </div> */}
                <div
                  className={`absolute bottom-0 left-0 w-full ${
                    hoveredIndex === "resturant" ? "h-full " : "h-0 "
                  } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                ></div>
                <div
                  className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                    hoveredIndex === "resturant"
                      ? "translate-y-0 "
                      : "translate-y-1/2 opacity-0"
                  }`}
                >
                  <div className={`  text-7xl text-white `}>Resturant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
