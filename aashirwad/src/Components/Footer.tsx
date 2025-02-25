export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#10377a] font-carm tracking-[0.1rem] p-10 text-white">
        <div className="flex flex-wrap lg:p-10 justify-between  mx-auto gap-20 lg:w-3/4">
          <div className="flex flex-col">
            <div className="">
              <img src="/logo.jpeg" className="w-32" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex ">
                <span className="min-w-14">Tel:</span> <span>9812766153</span>{" "}
              </p>
              <p className="flex ">
                <span className="min-w-14">Email:</span> <span></span>{" "}
              </p>
              <p className="flex gap-2 ">
                <span className="min-w-16">Location:</span>{" "}
                <span>Pokhara,&nbsp;Lakeside</span>{" "}
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col gap-7">
            <h1 className="text-3xl font-bold">About</h1>
            <ul className="list-none flex flex-col text-xl gap-3">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Rooms</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-7">
            <h1 className="text-3xl text-center font-bold">Quick Links</h1>
            <div className="flex flex-wrap lg:gap-32 gap-10 ">
              <ul className="list-none flex flex-col text-xl gap-3">
                <li className="cursor-pointer">Rooms</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Reservation</li>
              </ul>
              <ul className="list-none flex flex-col text-xl gap-3">
                <li className="cursor-pointer">Facebook</li>
                <li className="cursor-pointer">Instagram</li>
                <li className="cursor-pointer">Youtube</li>
                <li className="cursor-pointer">Tiktok</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-3xl font-bold">Google Map</h1>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d369.10049689229356!2d83.9587830920682!3d28.212635899589245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d27.688766299999997!2d85.28395689999999!4m5!1s0x399595e339626bc3%3A0xe82e156a04956623!2s6X75%2B4G8%2C%20Pokhara%2033700!3m2!1d28.212722!2d83.95895519999999!5e1!3m2!1sen!2snp!4v1740337343060!5m2!1sen!2snp"
                loading="lazy"
                className="min-w-[200px] max-w-[180px] h-[250px] lg:max-w-[500px]"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full text-center py-10">
          Copyright © Hotel Aashirwad Website by DigiSoft Developers
        </div>
      </div>
    </>
  );
};
