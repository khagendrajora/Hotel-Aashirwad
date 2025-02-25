import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Contact = () => {
  return (
    <>
      <div className="lg:py-20 py-10 flex justify-center">
        <div className="flex flex-wrap justify-between lg:justify-center w-2/3">
          <div className="flex w-full md:w-1/2  items-center flex-col">
            <h1 className="text-4xl text-[#10377a] font-semibold tracking-[0.1rem] font-carm">
              Contact Us
            </h1>
            <div className="py-5 w-full px-2">
              <form className="flex w-full flex-col items-start text-gray-500 gap-10">
                <div className="flex flex-wrap justify-between w-full gap-5">
                  <div className="flex flex-col w-full md:w-2/5 gap-2">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="outline outline-gray-200 p-2 lg:min-w-1/2 "
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-2/5 gap-2">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="Phone"
                      className="outline outline-gray-200 p-2 lg:min-w-1/3"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap justify-between w-full gap-5 ">
                  <div className="flex flex-col w-full md:w-2/5 gap-2">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="outline outline-gray-200 p-2 lg:min-w-3/4 "
                    />
                  </div>
                  <div className="flex  w-full md:w-2/5 flex-col gap-2">
                    <label>Subject</label>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="outline outline-gray-200 p-2 lg:min-w-1/2"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <label>Mesage</label>
                  <textarea
                    placeholder="Your Message.."
                    className="outline outline-gray-200 p-2 w-full "
                  />
                </div>
                <div className="flex w-full">
                  <button className="bg-yellow-500 p-3 text-white font-medium cursor-pointer hover:bg-yellow-600">
                    SEND YOUR MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:w-1/3 items-center w-full">
            <h1 className="text-4xl text-[#10377a] font-semibold tracking-[0.1rem] font-carm">
              GET IN TOUCH
            </h1>
            <div className="flex pt-10 gap-5 flex-col">
              <div className="space-y-2">
                <h1 className="text-yellow-500 text-2xl font-bold">ADDRESS:</h1>
                <h1 className="text-2xl text-gray-500">Pokhara</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-yellow-500 text-2xl font-bold">Email:</h1>
                <h1 className="text-2xl text-gray-500">example.com</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-yellow-500 text-2xl font-bold">WEB:</h1>
                <h1 className="text-2xl text-gray-500">www.xyz.com</h1>
              </div>
              <div className="space-y-2">
                <h1 className="text-yellow-500 text-2xl font-bold">Phone:</h1>
                <h1 className="text-2xl text-gray-500">9812772233</h1>
              </div>
            </div>
            <div className="flex pt-5 items-center gap-5">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#046ab9", cursor: "pointer" }}
                size="xl"
                className=""
              />
              <img src="/Icons/instalogo.jpg" className="w-8 cursor-pointer" />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "#f51800", cursor: "pointer" }}
                size="xl"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#74C0FC", cursor: "pointer" }}
                size="xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
