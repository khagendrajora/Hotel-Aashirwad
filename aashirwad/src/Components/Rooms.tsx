import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Rooms = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-[#f5f5f5] font-playfair h-fit lg:py-10 py-5">
        <div>
          <div className=" w-full text-center">
            <h1 className="font-poppins w-full font-light text-8xl lg:text-[120px] opacity-10">
              Luxury{" "}
            </h1>
            <h1 className="font-medium -mt-10 lg:-mt-14 text-[#10377a] text-6xl">
              ROOMS
            </h1>
          </div>
          <div className="slider-container w-full overflow-hidden lg:pt-20 pt-10 lg:p-3 ">
            <Slider {...settings}>
              <div>
                <div className="flex w-11/12 lg:w-3/4 flex-wrap flex-col md:flex-row  mx-auto">
                  <div className="w-full md:w-3/5">
                    <img
                      src="/GOVL1878.JPG"
                      className="h-[500px] w-full object-cover"
                    />
                  </div>

                  <div className="md:w-2/5 sm:p-10 gap-2 p-3 flex flex-col bg-white">
                    <div className="flex flex-col sm:gap-10 gap-5">
                      <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-extralight">
                          Luxury Single Room
                        </h1>
                        <p className="text-gray-500">A quality room you want</p>
                      </div>
                      <p className=" sm:text-lg font-light text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quia reprehenderit dolorem laudantium, id
                        officiis, veritatis possimus minus natus dolores
                      </p>
                    </div>
                    <div className="flex justify-between mt-auto w-11/12  text-orange-500 sm:text-2xl items-baseline">
                      <div>100/Night</div>
                      <button className="cursor-pointer hover:text-black duration-1000">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex w-11/12  lg:w-3/4 flex-wrap flex-col md:flex-row mx-auto">
                  <div className="w-full md:w-3/5">
                    <img
                      src="/GOVL1878.JPG"
                      className="h-[500px] w-full object-cover"
                    />
                  </div>

                  <div className="md:w-2/5 sm:p-10 gap-2 p-3 flex flex-col bg-white">
                    <div className="flex flex-col sm:gap-10 gap-5 ">
                      <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-extralight">
                          Double Room
                        </h1>
                        <p className="text-gray-500 ">
                          A quality room you want
                        </p>
                      </div>
                      <p className=" sm:text-lg font-light text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quia reprehenderit dolorem laudantium, id
                        officiis, veritatis possimus minus natus dolores
                      </p>
                    </div>
                    <div className="flex justify-between mt-auto w-11/12  text-orange-500 md:text-2xl items-baseline">
                      <div>100/Night</div>
                      <button className="cursor-pointer hover:text-black duration-1000">
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
