export const About = () => {
  return (
    <>
      <div className="bg-[#ecf3f3] py-16">
        <div className="mx-auto w-11/12">
          <div className="flex flex-wrap justify-center ">
            <div className="flex flex-col gap-5 w-1/2">
              <span className="text-gray-500">WELCOME TO AASHIRWAD</span>
              <h1 className="text-5xl text-[#10377a] font-bold">
                Feel Like Home
              </h1>
              <p className="text-gray-500 py-5 w-3/4">
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
            <div className="w-1/3 relative flex">
              <div className="flex absolute top-1/6 -left-1/5 flex-col gap-2 items-center justify-center">
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
              <div className="h-full">
                <img
                  src="/Dashboard/hotel_view.jpg"
                  className="object-cover h-[400px] w-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
