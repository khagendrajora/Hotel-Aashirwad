import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Gallary = () => {
  return (
    <>
      <div className="bg-white w-full py-10">
        <button className="w-full cursor-pointer transition hover:text-black duration-500 mx-auto pb-10 text-[#10377a] text-4xl font-poppins">
          View Our Services
        </button>
        <div className="flex justify-center w-11/12 mx-auto ">
          <div className="w-1/4">
            <img src="/GOVL1878.JPG" />
          </div>
          <div className="w-1/4">
            <img src="/GOVL2047.JPG" />
          </div>
          <div className="w-1/4">
            <img src="/GOVL2052.JPG" />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="text-center text-[#10377a] flex flex-col gap-5">
          <h1 className="font-medium">More Ways To Stay</h1>
          <p className="font-bold lg:text-3xl">YOUR ACCOMMODATION OPTIONS</p>
          <div className="flex justify-center flex-wrap text-black gap-10 py-5">
            <div className="flex flex-col gap-2 hover:bg-[#d9e8e8] p-4 hover:scale-105 duration-700 lg:w-1/5">
              <div className="flex mx-auto">
                <img src="/Icons/guest icon.jpg" className="w-10 " />
              </div>
              <h1 className="font-bold">Guest Rooms</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:bg-[#d9e8e8] p-4 hover:scale-105 duration-700 lg:w-1/5">
              <div className="flex mx-auto">
                <img src="/Icons/bar-counter (1).png" className="w-10 " />
              </div>
              <h1 className="font-bold">Bars</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:bg-[#d9e8e8] p-4 hover:scale-105 duration-700 lg:w-1/5">
              <FontAwesomeIcon icon={faCarSide} size="2xl" />
              <h1 className="font-bold">Travel</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                recusanda
              </p>
            </div>
            <div className="flex flex-col gap-2 hover:bg-[#d9e8e8] p-4 hover:scale-105 duration-700 lg:w-1/5">
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
