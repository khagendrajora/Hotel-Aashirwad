import {
  faBed,
  faChampagneGlasses,
  faLightbulb,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const Services = () => {
  const [service, setService] = useState<string>("resturant");
  return (
    <>
      <div className="bg-white py-10">
        <div className="flex flex-col justify-center w-full text-center gap-6">
          <div className=" w-full text-center">
            <h1 className="font-poppins w-full  lg:text-8xl lg:text-[80px] opacity-10">
              SERVICES
            </h1>
            <h1 className="font-serif font-thin -mt-6 text-[#10377a] lg:text-3xl">
              OUR AWESOME SERVICES
            </h1>
          </div>

          <p className="flex justify-center mx-auto w-1/2 text-gray-500 font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            blanditiis sit, mollitia ad et quidem modi laborum voluptates saepe
          </p>

          <div className="flex flex-wrap justify-center w-3/4 bg-[#d9e8e8] p-10 gap-6 mx-auto">
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
            <div className="flex flex-col lg:w-2/5 h-full lg:space-y-8  space-y-5 ">
              <div
                className={`flex items-center gap-5    hover:bg-[#10377a] group p-2 py-5 cursor-pointer ${
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
                    className={`font-bold ${
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
                className={`flex items-center gap-5   hover:bg-[#10377a] group p-2 py-5 cursor-pointer ${
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
                    className={`font-bold ${
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
                className={`flex items-center gap-5   hover:bg-[#10377a] group p-2 py-5 cursor-pointer ${
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
                    className={`font-bold ${
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
                className={`flex items-center gap-5   hover:bg-[#10377a] group p-2 py-5 cursor-pointer ${
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
                    className={`font-bold ${
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
          </div>
        </div>
      </div>
    </>
  );
};
