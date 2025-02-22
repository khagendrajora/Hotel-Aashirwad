export const About = () => {
  return (
    <>
      <div className="bg-[rgb(244,246,246)] py-16">
        <div className="flex mx-auto text-center md:w-1/2 lg:w-1/3 w-11/12">
          <div className="flex flex-col gap-10">
            <div className=" w-full text-center">
              <h1 className="font-poppins w-full  text-8xl lg:text-[150px] opacity-10">
                Welcome
              </h1>
              <h1 className="font-thin -mt-10 lg:-mt-16  text-gray-500 text-4xl">
                WONDERFUL HOTEL IN THE HEART OF POKHARA.
              </h1>
            </div>
            <p className="font-light text-gray-500 ">
              Hotel Aashirwad is one of the finest hotels in Pokhara, offering
              luxurious rooms and excellent comfort. Situated by the lake, it
              provides a breathtaking view of the mountains, best enjoyed with a
              cup of tea.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
