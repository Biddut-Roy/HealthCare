const Services = () => {
  return (
    <div className="bg-white container ">
      <div className="mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-start mx-auto px-4 ">
            <button className=" py-2 px-4 border rounded-full flex items-center ">
              Service
            </button>
            <h1 className=" text-4xl font-semibold text-[#020043] mt-5">
              Empowering Health, <br /> Enriching Lives
            </h1>
            <p className="text-lg text-[#4D4C7B] mt-4">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            <button className="font-semibold bg-amber-400 py-2 px-4 mt-20 border rounded-md flex items-center space-x-2 ">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 pl-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </button>
          </div>
          <div className="flex relative justify-center items-center ">
            <img
              src="https://res.cloudinary.com/dvdewrd4a/image/upload/v1720030519/Rectangle_27-2_xrbtne.png"
              alt="Doctor examining x-ray"
              className="w-full h-auto rounded-xl"
            />
            <div className=" flex bg-[#020043] absolute rounded-xl p-2 text-left h-[114px]  w-[321px] left-5 bottom-5 opacity-80">
              <div className="flex-1">
                <h2 className="text-xl font-medium text-white">
                  Advanced Technology
                </h2>
                <p className="text-xs text-[#FFFFF5] mt-4">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
              </div>
              <button className=" bg-amber-400 mt-20  border rounded-full space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex relative justify-center items-center">
            <img
              src="https://res.cloudinary.com/dvdewrd4a/image/upload/v1720030511/Rectangle_27-1_goar5y.png"
              alt="Doctor using a computer"
              className="w-full h-auto rounded-xl"
            />
            <div className=" flex bg-[#020043] absolute rounded-xl p-2 text-left h-[114px]  w-[321px] left-5 bottom-5 opacity-80">
              <div className="flex-1">
                <h2 className="text-xl font-medium text-white">
                  Online Doctor Meet
                </h2>
                <p className="text-xs text-[#FFFFF5] mt-4">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
              </div>
              <button className=" bg-amber-400 mt-20  border rounded-full space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex relative justify-center items-center">
            <img
              src="https://res.cloudinary.com/dvdewrd4a/image/upload/v1720030502/Rectangle_27_pxjesy.png"
              alt="Doctor talking to patient"
              className="w-full h-auto rounded-xl"
            />
            <div className=" flex bg-[#020043] absolute rounded-xl p-2 text-left h-[114px]  w-[321px] left-5 bottom-5 opacity-80">
              <div className="flex-1">
                <h2 className="text-xl font-medium text-white">
                  Consultancy your health
                </h2>
                <p className="text-xs text-[#FFFFF5] mt-4">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
              </div>
              <button className=" bg-amber-400 mt-20  border rounded-full space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
