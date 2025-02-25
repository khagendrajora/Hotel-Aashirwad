export const About = () => {
  return (
    <>
      <div className="bg-[#ecf3f3] md:py-20 relative py-10">
        <div className="bg-[url('/bgimage.jpg')] absolute inset-0 bg-cover opacity-20 "></div>
        <div className="mx-auto relative w-11/12">
          <div className="flex flex-wrap justify-center ">
            <div className="flex flex-col w-full gap-3  md:gap-5 md:w-1/2">
              <span className="text-gray-500 font-carm text-xl">
                {" "}
                WELCOME TO AASHIRWAD{" "}
              </span>
              <h1 className="text-3xl font-carm md:text-6xl text-[#10377a] font-bold">
                Feel Like Home
              </h1>
              <p className="text-gray-500 md:py-5 font-carm lg:leading-10 text-justify lg:text-[23px] text-lg md:w-3/4">
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
            <div className="md:w-1/3 relative flex py-10">
              <div className="hidden md:flex absolute top-1/4 -left-1/5 flex-col gap-10 items-center justify-center">
                <img
                  src="/room.jpg"
                  className="w-[200px] hover:scale-125 duration-1000"
                />
                <img
                  src="/launge.jpg"
                  className="w-[200px] hover:scale-125 duration-1000"
                />
                <img
                  src="/hotel.jpg"
                  className="w-[200px] hover:scale-125 duration-1000"
                />
              </div>
              <div className="h-full">
                <img
                  src="/Dashboard/hotel_view.jpg"
                  className="object-cover h-[700px] w-[600px]"
                />
              </div>
              <div className="flex md:hidden absolute top-1/6 right-1 flex-col gap-10 items-center justify-center">
                <img
                  src="/room.jpg"
                  className="w-[150px] hover:scale-125 duration-1000"
                />
                <img
                  src="/launge.jpg"
                  className="w-[150px] hover:scale-125 duration-1000"
                />
                <img
                  src="/hotel.jpg"
                  className="w-[150px] hover:scale-125 duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
