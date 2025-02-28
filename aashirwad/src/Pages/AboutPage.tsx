import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutPage = () => {
  return (
    <>
      <div className="bg-[#eeeeee] ">
        <div className="relative">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className=" font-poppins text-white text-4xl lg:text-8xl text-center w-full">
              About Us
            </h1>
          </div>
        </div>
        <div className="flex justify-center font-playfair py-20 px-10">
          <div className="w-1/2">
            <div className="flex flex-col w-full gap-3 ">
              <span className="text-gray-500 text-xl">
                {" "}
                WELCOME TO AASHIRWAD{" "}
              </span>
              <h1 className="text-3xl  md:text-6xl text-[#10377a] font-bold">
                Feel Like Home
              </h1>
              <p className="text-gray-500 md:py-5  text-justify lg:text-[23px] text-lg md:w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                tempora sed temporibus ex consequuntur aspernatur magni, vel
                molestias, fugit facilis consectetur repellendus ullam? Facilis
                consectetur, maxime voluptas voluptates nostrum nemo. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Minima
                tempora sed temporibus ex consequuntur aspernatur magni, vel
                molestias, fugit facilis consectetur repellendus ullam? Facilis
                consectetur, maxime voluptas voluptates nostrum nemo.
              </p>
            </div>
          </div>
          <div className="w-2/5">
            {" "}
            <div className="flex py-10">
              <div className="h-full">
                <img
                  src="/Dashboard/hotel_view.jpg"
                  className="object-cover h-[600px] w-[600px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] w-11/12 mx-auto ">
          <div className="bg-[url(/hotel_main_entrance.jpg)] inset-0 absolute bg-fixed opacity-65"></div>
          <div className="flex flex-wrap h-full mx-auto w-11/12 text-center text-[#10377a] text-3xl font-bold font-playfair justify-between items-center">
            <div className="bg-white rounded-full py-7 px-8 z-50">
              <h1>30</h1>
              <p className="text-sm">Rooms</p>
            </div>
            <div className="bg-white rounded-full py-7 px-8 z-50">
              <h1>30</h1>
              <p className="text-sm">Rooms</p>
            </div>
            <div className="bg-white rounded-full py-7 px-8 z-50">
              <h1>30</h1>
              <p className="text-sm">Rooms</p>
            </div>
            <div className="bg-white rounded-full py-7 px-8 z-50">
              <h1>30</h1>
              <p className="text-sm">Rooms</p>
            </div>
          </div>
        </div>

        <div className="text-center  font-playfair w-10/12 mx-auto pt-20">
          <h1 className="text-xl "> OUR FEATURES</h1>
          <h1 className="text-4xl tracking-[0.3rem] py-3 ">Why Choose Us</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            dolorum. Recusandae, exercitationem vero voluptatem atque doloremque
            accusantium veniam quidem porro inventore. Accusamus, dolor.
            Adipisci consectetur magni quam? Autem, eveniet fuga.
          </p>
        </div>
        <div className="flex w-3/4 mx-auto flex-wrap  font-playfair  py-14 justify-center">
          <div className="w-1/3">
            <img src="/room.jpg" alt="rooms" className=" object-cover" />
          </div>
          <div className="w-1/2 flex gap-20 justify-center items-center">
            <ul className="space-y-5">
              <li>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Spa/Gym
              </li>

              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Sightseeing
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Screen TV
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Free Wifi
              </li>
            </ul>
            <ul className="space-y-5">
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Spa
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Free Parking
              </li>

              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Full AC
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faCheck} style={{ color: "#38d40c" }} />
                &nbsp;Room Service
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
