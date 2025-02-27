export const ReservationPage = () => {
  return (
    <>
      <div className="">
        <div className="relative">
          <img
            src="/room.jpg"
            alt="rooms"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute top-1/2 w-full">
            <h1 className=" font-poppins text-white text-4xl lg:text-8xl text-center w-full">
              Reservation
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eeeeee] lg:py-10">
        {/* <div className="bg-[url('/bgimage.jpg')] absolute inset-0 bg-cover opacity-20 "></div> */}
        <div>
          <div className=" w-full text-center">
            <h1 className="font-poppins w-full  text-8xl lg:text-[120px] opacity-10">
              Welcome{" "}
            </h1>
            <h1 className="font-medium -mt-10 lg:-mt-12  font-carm tracking-[0.2rem] text-[#10377a] text-6xl">
              MAKE A RESERVATION
            </h1>
          </div>
          <div className="py-10 w-1/3  mx-auto">
            <form className="flex flex-col text-gray-500 gap-5">
              <div className="flex flex-col gap-2">
                <label>Name</label>
                <input
                  type="text"
                  alt=""
                  placeholder="Name"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label>Contact</label>
                <input
                  type="text"
                  alt=""
                  placeholder="Contact"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Email</label>
                <input
                  type="text"
                  alt=""
                  placeholder="Email"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Adults</label>
                <input
                  type="number"
                  alt=""
                  placeholder="Adults"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Children</label>
                <input
                  type="number"
                  alt=""
                  placeholder="Children"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Check In Date</label>
                <input
                  type="date"
                  alt=""
                  placeholder="Name"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>Check Out Date</label>
                <input
                  type="date"
                  alt=""
                  placeholder="Name"
                  className="border p-3 rounded bg-white"
                />
              </div>
              <div className="mx-auto w-full">
                <button className="p-3 w-full hover:bg-black cursor-pointer bg-[#10377a] text-white">
                  MAKE A RESERVATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
