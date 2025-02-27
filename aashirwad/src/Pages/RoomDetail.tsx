import { faCheck, faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RoomDetail = () => {
  return (
    <>
      <div className="bg-stone-50">
        <div className="">
          <div className="relative h-screen">
            <img
              src="/room.jpg"
              alt="rooms"
              className="w-full h-11/12 object-cover"
            />
            <div className="absolute top-1/2 w-full">
              <h1 className=" font-poppins text-white text-4xl lg:text-8xl text-center w-full">
                Luxary Double Suite Room
              </h1>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto ">
          <div className="flex lg:gap-10 flex-wrap justify-center">
            <div className="flex font-thin flex-col lg:w-3/5">
              <div className="flex flex-wrap py-2 justify-between">
                <h1 className="lg:text-2xl font-playfair text-gray-500">
                  A quality room with mountail view
                </h1>
                <h1 className="text-red-800 text-3xl font-playfair">
                  $500/Night
                </h1>
              </div>
              <div className="flex gap-1 py-2">
                <FontAwesomeIcon icon={faStar} size="sm" />
                <FontAwesomeIcon icon={faStar} size="sm" />
                <FontAwesomeIcon icon={faStar} size="sm" />
                <FontAwesomeIcon icon={faStar} size="sm" />
              </div>
              <h1 className="text-gray-500 font-playfair text-4xl">
                {" "}
                Luxary Double Suite Room
              </h1>
              <div className="pt-5 w-full">
                <img
                  src="/room.jpg"
                  alt="rooms"
                  className="object-cover w- mx-auto"
                />

                <div className="flex flex-wrap justify-center gap-4 lg:gap-10 py-5">
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5"
                  />
                  {/* <img
                    src="/room.jpg"
                    alt="rooms"
                    className="object-cover w-1/5 hidden lg:block"
                  /> */}
                </div>
              </div>
              <div className="flex flex-wrap gap-[11px] gap-y-10 justify-between text-sm font-playfair font-normal">
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/bath-tub.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>BATHROOM</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/double-bed.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>QUEEN</h1>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/hotel-service.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>ROOM SERVICE</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/hair-dryer.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>HAIR DRIYER</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/minibar.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>MINI BAR</h1>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Icons/air-conditioning.png"
                    className="object-cover w-10 h-10"
                  />
                  <h1>CONDITIONING</h1>
                </div>
              </div>
              <div className="font-playfair py-10 text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
                excepturi tempora. Rerum deserunt neque excepturi voluptates
                fugit earum animi consequatur quis, magni, quos expedita
                voluptate minus molestiae voluptatum quam maxime.
              </div>
              <div className="flex flex-col ">
                <h1 className="text-2xl font-playfair font-bold">
                  Room Services
                </h1>
                <div className="flex flex-wrap py-10 gap-y-5 font-playfair justify-between">
                  <ul className="space-y-3">
                    <li>
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp; Double Bed
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;80 Sq. mt
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp; 6 person
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Free Wifi
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Breakfast Included
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTimes}
                        style={{ color: "#f70820" }}
                      />
                      &nbsp; Private Balcony
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Screen TV
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Full AC
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: "#38d40c" }}
                      />
                      &nbsp;Room Service
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap font-playfair justify-center gap-4">
                <ul className=" border rounded-xl border-gray-300">
                  <li className="border border-gray-300 bg-[0377a] rounded-xl font-medium p-5 px-10 ">
                    1 Night{" "}
                  </li>
                  <li
                    className="text-center p-5 text-2xl font-serif text-red-800
                "
                  >
                    $ 500
                  </li>
                </ul>
                <ul className=" border rounded-xl border-gray-300">
                  <li className="border border-gray-300 bg-[0377a] rounded-xl font-medium p-5 px-10 ">
                    3 Night{" "}
                  </li>
                  <li
                    className="text-center p-5 text-2xl font-serif text-red-800
                "
                  >
                    $ 1400
                  </li>
                </ul>
                <ul className=" border rounded-xl border-gray-300">
                  <li className="border border-gray-300 bg-[0377a] rounded-xl font-medium p-5 px-10 ">
                    7 Night{" "}
                  </li>
                  <li
                    className="text-center p-5 text-2xl font-serif text-red-800
                "
                  >
                    $ 3000
                  </li>
                </ul>
              </div>
              <div className="flex flex-col font-playfair py-10">
                <h1 className="text-2xl font-bold">Similar Rooms</h1>
                <div className="flex flex-wrap  gap-6   py-5 ">
                  <div className="w-2/5 lg:w-[210px] 2xl:w-[300px] shadow-2xs">
                    <div>
                      <img src="/9.JPG" alt="" className="object-cover" />
                    </div>
                    <h1 className="text-xl  py-2">Double Room</h1>
                  </div>
                  <div className="w-2/5 lg:w-[210px] 2xl:w-[300px] shadow-2xs">
                    <div>
                      <img
                        src="/GOVL1846.JPG"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <h1 className="text-xl  py-2">Single Room</h1>
                  </div>
                  <div className="w-2/5 lg:w-[210px] 2xl:w-[300px] shadow-2xs">
                    <div>
                      <img
                        src="/GOVL1872.JPG"
                        alt=""
                        className="object-cover"
                      />
                    </div>
                    <h1 className="text-xl  py-2">Deluex Room</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 font-playfair lg:mt-24">
              <div className="w-full mx-auto">
                <h1 className="text-2xl font-bold">Book Online</h1>
                <form>
                  <div className="flex flex-col py-4 gap-2">
                    <label>Check In Date</label>
                    <input
                      type="date"
                      placeholder="Check In Date"
                      className="border p-1 text-gray-400 rounded lg:w-3/4"
                    />
                  </div>
                  <div className="flex flex-col  gap-2">
                    <label>Check Out Date</label>
                    <input
                      type="date"
                      placeholder="Check Out Date"
                      className="border p-1 text-gray-400 rounded lg:w-3/4"
                    />
                  </div>
                  <div className="flex justify-between lg:w-3/4 py-4">
                    <input
                      type="number"
                      placeholder="Adults"
                      className="border p-1 text-gray-400 rounded w-2/5"
                    ></input>
                    <input
                      type="number"
                      placeholder="Children"
                      className="border p-1 text-gray-400 rounded w-2/5"
                    ></input>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    <input
                      type="text"
                      placeholder="Name"
                      className="border p-1 text-gray-400 rounded lg:w-3/4"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="border p-1 text-gray-400 rounded lg:w-3/4"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      className="border p-1 text-gray-400 rounded lg:w-3/4"
                    />
                  </div>
                  <div className="w-full py-4">
                    <button className="p-3 w-full lg:w-3/4 hover:bg-black cursor-pointer rounded bg-[#10377a] text-white">
                      BOOK A ROOM NOW
                    </button>
                  </div>
                </form>
              </div>
              <div className="pb-10">
                <h1 className="text-xl py-4 font-playfair font-bold">
                  Need Help ?
                </h1>

                <div className=" border-2 p-3 font-playfair text-gray-400 rounded border-gray-500">
                  <p>
                    If you have any question please dont hesitate to contact-us
                  </p>
                  <h1>0991938829</h1>
                  <h1>aashirwad@gmail.com</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
