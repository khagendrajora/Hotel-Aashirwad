import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Rooms = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-[rgb(244,246,246)] h-fit py-10">
        <div>
          <div className=" w-full text-center">
            <h1 className="font-poppins w-full  text-8xl lg:text-[150px] opacity-10">
              Luxury{" "}
            </h1>
            <h1 className="font-serif -mt-10 lg:-mt-16  text-black text-6xl">
              Rooms
            </h1>
          </div>
          <div className="slider-container w-full overflow-hidden pt-20 p-3  ">
            <Slider {...settings}>
              <div>
                <div className="flex w-full lg:w-3/4 flex-wrap flex-col md:flex-row  mx-auto">
                  <div className="w-full md:w-1/2">
                    <img src="/GOVL1878.JPG" className="h-[500px] w-full" />
                  </div>

                  <div className="md:w-1/2 p-5 flex flex-col bg-white">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-serif">
                          Luxury Single Room
                        </h1>
                        <p className="text-gray-500 font-mono">
                          A quality room you want
                        </p>
                      </div>
                      <p className="font-thin text-lg text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quia reprehenderit dolorem laudantium, id
                        officiis, veritatis possimus minus natus dolores
                        recusandae repudiandae alias praesentium nam? Voluptatem
                        id eos in ad vitae?
                      </p>
                    </div>
                    <div className="flex justify-between mt-auto w-11/12 font-poppins text-orange-500 text-2xl items-baseline">
                      <div>100/Night</div>
                      <button className="cursor-pointer">View More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex w-full lg:w-3/4 flex-wrap flex-col md:flex-row  mx-auto">
                  <div className="w-full md:w-1/2">
                    <img src="/GOVL1878.JPG" className="h-[500px] w-full" />
                  </div>

                  <div className="md:w-1/2 p-5 flex flex-col bg-white">
                    <div className="flex flex-col gap-10">
                      <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-serif">
                          Luxury Single Room
                        </h1>
                        <p className="text-gray-500 font-mono">
                          A quality room you want
                        </p>
                      </div>
                      <p className="font-thin text-lg text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quia reprehenderit dolorem laudantium, id
                        officiis, veritatis possimus minus natus dolores
                        recusandae repudiandae alias praesentium nam? Voluptatem
                        id eos in ad vitae?
                      </p>
                    </div>
                    <div className="flex justify-between mt-auto w-11/12 font-poppins text-orange-500 text-2xl items-baseline">
                      <div>100/Night</div>
                      <button className="cursor-pointer">View More</button>
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
