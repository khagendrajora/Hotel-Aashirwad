import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [
    {
      src: "/Dashboard/hotel_view.jpg",
      alt: "Hero Image 2",
      text: "Peaceful Environment",
    },
    { src: "/room.jpg", alt: "Hero Image 2", text: "Finest Rooms" },

    {
      src: "/Dashboard/mountain_range.jpg",
      alt: "Hero Image 2",
      text: "Eye Catching View",
    },
  ];
  return (
    <>
      <div className="slider-container w-full z-10 ">
        <Slider {...settings}>
          {images.map((image, i) => (
            <div key={i} className="relative">
              <img
                src={image.src}
                alt="image"
                className="h-screen w-screen bg-fixed object-cover"
              />
              <div className="absolute top-1/2 w-full">
                {/* <h1 className=" font-poppins text-white text-8xl text-center w-full">
                    {image.text}
                  </h1>
                  <button className="flex mx-auto  p-4 font-mono cursor-pointer hover:bg-black transition duration-800 text-4xl  text-white bg-[#10377a]">
                    Find More
                  </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
