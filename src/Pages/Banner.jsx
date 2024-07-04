const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-purple-900 p-10 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-yellow-400">
          Get Your First Appointment
        </h1>
        <h2 className="text-3xl font-medium text-white">at 50% Off!</h2>
        <div className="mt-6 flex space-x-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
            Appointment
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <img src="/doc-logo.png" alt="DOC+ Logo" className="h-16 w-auto" />
      </div>
    </div>
  );
};

export default Banner;
