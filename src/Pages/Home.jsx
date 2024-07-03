const Home = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">
            <img
              src="https://res.cloudinary.com/dvdewrd4a/image/upload/v1720030463/logo_dark_l6pehg.png"
              alt="Logo"
              height={70}
              width={70}
            />
          </h1>
          <nav className="flex space-x-4 text-[#020043]">
            <a href="#" className="hover:underline ">
              Home
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              About us
            </a>
          </nav>
          <button className="font-bold py-2 px-4 border rounded-xl flex items-center space-x-2">
            Appointment
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
      </header>
      <main className="text-[#020043] container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-md shadow p-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold">90%</h2>
              <p className="text-gray-500">
                Patient satisfaction rate, reflecting our commitment.
              </p>
            </div>
            <img
              src="/chart.svg"
              alt="Chart"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          <div className="bg-white rounded-md shadow p-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold">Comprehensive Care</h2>
              <h3 className="text-2xl font-medium">for Every Patient</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-md shadow p-6 text-center">
                <h2 className="text-3xl font-bold">500+</h2>
                <p className="text-gray-500">Board-certified doctors</p>
                <img
                  src="/doctor.svg"
                  alt="Doctor"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
              <div className="bg-white rounded-md shadow p-6 text-center">
                <h2 className="text-3xl font-bold">4.8</h2>
                <p className="text-gray-500">Over 20,000 Patient</p>
                <img
                  src="/star.svg"
                  alt="Star"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
                <div className="flex justify-center mt-2">
                  <img
                    src="/patient-1.jpg"
                    alt="Patient 1"
                    width={25}
                    height={25}
                    className="rounded-full mr-1"
                  />
                  <img
                    src="/patient-2.jpg"
                    alt="Patient 2"
                    width={25}
                    height={25}
                    className="rounded-full mr-1"
                  />
                  <img
                    src="/patient-3.jpg"
                    alt="Patient 3"
                    width={25}
                    height={25}
                    className="rounded-full mr-1"
                  />
                </div>
              </div>
              <div className="bg-white rounded-md shadow p-6 text-center">
                <h2 className="text-3xl font-bold">$5000</h2>
                <p className="text-gray-500">Money spend for poor patient</p>
                <img
                  src="/money.svg"
                  alt="Money"
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow p-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold">50+</h2>
              <p className="text-gray-500">Free lesson video for patient</p>
            </div>
            <img
              src="/video.svg"
              alt="Video"
              width={100}
              height={100}
              className="mx-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
