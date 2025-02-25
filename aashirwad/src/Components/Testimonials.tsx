import Slider from "react-slick";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-neutral-100 py-10">
        <div className="flex mx-auto text-center md:w-1/2 lg:w-1/3 w-full">
          <div className="flex flex-col gap-5">
            <div className=" w-full text-center">
              <h1 className="font-poppins w-full  text-8xl lg:text-[150px] opacity-10">
                Client
              </h1>
              <h1 className=" -mt-10 lg:-mt-16 font-medium font-carm tracking-[0.2rem] text-[#10377a] lg:text-5xl">
                TESTIMONIALS
              </h1>
            </div>
            <p className=" font-carm text-xl text-gray-500 ">
              Hotel Aashirwad is one of the finest hotels in Pokhara, offering
              luxurious rooms and excellent comfort. Situated by the lake, it
              provides a breathtaking view of the mountains, best enjoyed with a
              cup of tea.
            </p>
          </div>
        </div>

        <div className="slider-container w-full font-carm overflow-hidden px-10 py-10 ">
          <Slider {...settings}>
            <div className="flex flex-col text-center space-y-5 p-2 md:p-10 hover:bg-white md:shadow-md">
              <div className="w-full flex justify-center">
                <img src="/logo.jpeg" alt="" className="w-10 rounded-full" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-500 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-medium">Khagendra Singh Jora</h1>
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-5 p-2 md:p-10 hover:bg-white md:shadow-md">
              <div className="w-full flex justify-center">
                <img src="/logo.jpeg" alt="" className="w-10 rounded-full" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-500 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-medium">Khagendra Singh Jora</h1>
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-5 p-2 md:p-10 hover:bg-white md:shadow-md">
              <div className="w-full flex justify-center">
                <img src="/logo.jpeg" alt="" className="w-10 rounded-full" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-500 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-medium">Khagendra Singh Jora</h1>
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-center space-y-5 p-2 md:p-10 hover:bg-white md:shadow-md">
              <div className="w-full flex justify-center">
                <img src="/logo.jpeg" alt="" className="w-10 rounded-full" />
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-500 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam quibusdam fugit fugiat, laudantium asperiores aut
                  expedita natus nisi! Saepe iure molestiae nam. Excepturi
                  cumque ea pariatur quae debitis velit id?
                </p>
                <div>
                  <h1 className="font-medium">Khagendra Singh Jora</h1>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
