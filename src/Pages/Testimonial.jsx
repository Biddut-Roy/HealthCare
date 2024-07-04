const Testimonial = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        What they say about us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">
            Expertise and Compassion Combined
          </h3>
          <p className="text-gray-600 mb-4">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex items-center">
            <img
              src="/images/testimonial-1.jpg"
              alt="Testimonial 1"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">Sarah D, IT Professional</p>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674zm-2.9 9.923a1 1 0 01.902.609l1.518 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">
            Life-Saving Care, Life-Changing Experience
          </h3>
          <p className="text-gray-600 mb-4">
            My experience at [Healthcare Provider Name] was life-changing. The
            prompt and accurate diagnosis, coupled with the advanced treatments
            they provided, saved my life.
          </p>
          <div className="flex items-center">
            <img
              src="/images/testimonial-2.jpg"
              alt="Testimonial 2"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">Michael R, Business Executive</p>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">
            A Partner in Health and Wellness
          </h3>
          <p className="text-gray-600 mb-4">
            As a busy professional, I appreciate the convenience and quality of
            care I receive at [Healthcare Provider Name]. From telemedicine
            consultations to routine check-ups, they've become my trusted
            partner in health and
          </p>
          <div className="flex items-center">
            <img
              src="/images/testimonial-3.jpg"
              alt="Testimonial 3"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">David S, Lawyer</p>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-4.975 3.648a1 1 0 00-.95.69l-1.52 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-1.24-.588-1.81l4.975-3.648a1 1 0 00.95-.69l1.52-4.674z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-2"></div>
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-2"></div>
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-2"></div>
      </div>
    </div>
  );
};

export default Testimonial;
