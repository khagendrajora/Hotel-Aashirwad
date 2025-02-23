export const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#10377a] text-white">
        <div className="flex flex-wrap p-10 justify-between mx-auto gap-20 w-3/4">
          <div className="flex flex-col">
            <div className="">
              <img src="/logo.jpeg" className="w-32" />
            </div>
            <div className="flex flex-col gap-2">
              <p>Tel: </p>
              <p>Email: </p>
              <p>Location: </p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-2xl font-bold">About</h1>
            <ul className="list-none flex flex-col">
              <li>Home</li>
              <li>About</li>
              <li>Rooms</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="">Quick Links</h1>
            <ul className="list-none flex flex-col">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Tiktok</li>
            </ul>
          </div>
          <div className="">
            <h1>Google Map</h1>
          </div>
        </div>
      </div>
    </>
  );
};
