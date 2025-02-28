import { useNavigate } from "react-router-dom";

export const Rooms = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="relative ">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className=" font-poppins text-white text-8xl text-center w-full">
              Rooms
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] font-playfair lg:py-10 h-fit ">
        <div>
          <div className=" w-full text-center">
            <h1 className="font-poppins w-full  text-8xl lg:text-[150px] opacity-10">
              Luxury{" "}
            </h1>
            <h1 className="font-medium -mt-10 lg:-mt-16 text-[#10377a] text-6xl">
              Rooms
            </h1>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mx-auto font-playfair gap-10 py-20 w-3/4">
          <div
            className="flex flex-col w-2/5 cursor-pointer"
            onClick={() => navigate("/roomdetail")}
          >
            <div className="overflow-hidden ">
              <img
                src="/9.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl">Luxury Double Suite Room</h1>
              <h1 className="text-red-900">500/Night</h1>
            </div>
          </div>
          <div className="flex flex-col w-2/5 cursor-pointer">
            <div className="overflow-hidden">
              <img
                src="/GOVL1846.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl">Single Room</h1>
              <h1 className="text-red-800">500/Night</h1>
            </div>
          </div>
          <div className="flex flex-col w-2/5 cursor-pointer">
            <div className="overflow-hidden">
              <img
                src="/GOVL1872.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl">Luxury Double Suite Room</h1>
              <h1 className="text-red-800">500/Night</h1>
            </div>
          </div>
          <div className="flex flex-col w-2/5 cursor-pointer">
            <div className="overflow-hidden">
              <img
                src="/9.jpg"
                alt=""
                className="object-cover hover:scale-110 duration-1000"
              />
            </div>
            <div className="py-5  font-light flex flex-col gap-2 hover:text-red-800 duration-1000">
              <h1 className="text-3xl">Single Room</h1>
              <h1 className="text-red-800">500/Night</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
