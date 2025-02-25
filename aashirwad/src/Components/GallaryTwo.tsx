export const GallaryTwo = () => {
  return (
    <>
      <div className="lg:py-28 pt-10">
        <div className="w-full">
          <div className="flex lg:w-3/4 w-11/12 lg:gap-24 gap-10 mx-auto flex-wrap justify-center ">
            <div className="flex flex-col lg:w-1/2 lg:gap-10 gap-5">
              <h1 className="text-[#10377a] font-carm lg:text-4xl text-xl">
                Features and Anemities
              </h1>

              <h1 className="xl:text-5xl text-3xl tracking-[0.2rem] w-full text-red-900 font-carm font-medium ">
                Our hotel offers an amazing top view of Annapurna and Fewa Lake.
              </h1>
              <div className="flex lg:p-10 justify-center lg:justify-end">
                <img
                  src="/fewa.jpg "
                  className=" w-[400px] h-[300px] lg:h-[400px]  xl:h-[500px] object-cover "
                />
              </div>
            </div>
            <div className="flex flex-col gap-10 font-serif tracking-[0.1rem] text-gray-500  lg:w-1/3">
              <p className="text-lg lg:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                error obcaecati ab, voluptas, natus suscipit exercitationem
                nihil repudiandae mollitia distinctio minus iure rem eos,
                debitis accusamus sequi sit qui pariatur.
              </p>
              <div className="flex justify-center">
                {" "}
                <img
                  src="/bar.jpg"
                  className="w-[600px] lg:h-[400px] xl:h-[500px] object-cover "
                />
              </div>
              <p className="xl:text-2xl hidden lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                error obcaecati ab, voluptas, natus suscipit exercitationem
                nihil repudiandae mollitia distinctio minus iure rem eos,
                debitis accusamus sequi sit qui pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
