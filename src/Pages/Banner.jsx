const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[477px] w-full rounded-xl"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dvdewrd4a/image/upload/v1720030528/Rectangle_32_p4lfrk.png')`,
      }}
    >
      <div className="flex justify-between w-full h-full opacity-80 bg-gradient-to-r from-[#020043] to-[#403be1] p-10 rounded-lg shadow-lg">
        <div className="flex flex-col text-start my-10 ">
          <h1 className="text-4xl font-bold text-yellow-400 w-[300px] mb-3">
            Get Your First Appointment
          </h1>
          <h2 className="text-3xl font-medium text-white">at 50% Off!</h2>
          <div className="mt-6 flex space-x-4">
            <button className="bg-[#FFC637] hover:bg-yellow-500 text-[#020043] font-medium py-2 px-4 rounded-full">
              Appointment
            </button>
            <button className="bg-gray-800 flex items-center hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-full">
              Learn More
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
        </div>
        <div className="mt-10 flex justify-end">
          <img
            src="https://res.cloudinary.com/dvdewrd4a/image/upload/v1720030473/logo_light_idwvpg.png"
            alt="DOC+ Logo"
            className="h-8 w-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
