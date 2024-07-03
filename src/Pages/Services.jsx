const Services = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Empowering Health, Enriching Lives
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
          Service
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-6">
          Appointment ➡️
        </button>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1503023345541-a71084147003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Doctor examining x-ray"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1505419475480-c6e89d996b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Doctor using a computer"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1505419475480-c6e89d996b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Doctor talking to patient"
              className="w-full h-auto"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1503023345541-a71084147003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Doctor explaining to patient"
              className="w-full h-auto"
            />
            <div className="absolute bottom-10 left-10 bg-white p-4 rounded shadow-md">
              <h3 className="text-xl font-bold text-gray-900">
                Consultancy your health
              </h3>
              <p className="text-gray-600 mt-2">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision.
              </p>
              <div className="flex items-center mt-4">
                <span className="text-gray-600">321 x 144</span>
                <svg
                  className="ml-2 h-4 w-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L11.414 11H17a1 1 0 100-2H11.414l1.293-1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
