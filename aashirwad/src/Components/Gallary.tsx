import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Gallary = () => {
  return (
    <>
      <div className="bg-white w-full px-2 font-playfair lg:py-10">
        <div className="w-full items-center  mx-auto lg:py-10  font-medium tracking-[0.2rem] text-[#10377a] lg:text-4xl">
          <div className="flex flex-row items-center justify-center py-5 gap-2 lg:gap-5">
            <div className=" flex py-3 justify-center">
              <img src="/Icons/Adobe Express - file.png" className="w-[80px]" />
            </div>
            <h1 className="font-bold">WHAT&nbsp;WE&nbsp;HAVE</h1>
            <div className=" flex py-3 justify-center">
              <img src="/Icons/Adobe Express - file.png" className="w-[80px]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center w-11/12 mx-auto ">
          <div className="lg:w-1/4 w-1/3">
            <img src="/GOVL1878.JPG" className="sm:h-[300px] object-cover" />
          </div>
          <div className="lg:w-1/4 w-1/3">
            <img src="/GOVL2047.JPG" className="sm:h-[300px] object-cover" />
          </div>
          <div className="lg:w-1/4 w-1/3">
            <img src="/GOVL2052.JPG" className="sm:h-[300px] object-cover" />
          </div>
        </div>
      </div>
      <div className="flex justify-center  py-10">
        <div className="text-center text-[#10377a] flex flex-col items-center gap-5">
          <div className="flex flex-row items-center gap-2  lg:gap-5">
            <div className=" flex py-3 justify-center">
              <img
                src="/Icons/Adobe Express - file.png"
                className="w-[80px] "
              />
            </div>
            <h1 className="font-medium font-playfair text-xl">
              More Ways To Stay
            </h1>
            <div className=" flex py-3 justify-center">
              <img src="/Icons/Adobe Express - file.png" className="w-[80px]" />
            </div>
          </div>
          <p className="font-bold lg:text-3xl font-playfair">
            WHAT WE PROVIDE TO OUR CUSTOMERS
          </p>
          <div className="flex justify-center font-playfair flex-wrap text-black gap-10 lg:py-15">
            <div className="flex flex-col gap-2 hover:bg-neutral-100 p-2 lg:p-4 hover:scale-105 duration-700 lg:w-1/5">
              <div className="flex mx-auto">
                <img src="/Icons/guest icon.jpg" className="w-10 " />
              </div>
              <h1 className="font-bold">Guest Rooms</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:bg-neutral-100 p-4 hover:scale-105 duration-700 lg:w-1/5">
              <div className="flex mx-auto">
                <img src="/Icons/bar-counter (1).png" className="w-10 " />
              </div>
              <h1 className="font-bold">Bars</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:bg-neutral-100 p-4 hover:scale-105 duration-700 lg:w-1/5">
              <FontAwesomeIcon icon={faCarSide} size="2xl" />
              <h1 className="font-bold">Travel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:bg-neutral-100 p-4 hover:scale-105 duration-700 lg:w-1/5">
              <div className="flex mx-auto">
                <img src="/Icons/night.png" className="w-10 " />
              </div>
              <h1 className="font-bold">Night Activities</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
