import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);

  return (
    <div className="container mx-auto px-4 py-16 text-start">
      <button className=" py-2 px-4 border rounded-full flex items-center ">
        Faq
      </button>
      <h2 className="text-3xl font-bold my-6">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 gap-6 ml-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="flex justify-between px-6 py-4 cursor-pointer"
            onClick={toggle}
          >
            <h3 className="text-md font-semibold text-[#020043]">
              What are your office hours?
            </h3>
            <div>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {isOpen && (
            <div className="px-6 py-4 bg-gray-100">
              <p className="text-gray-700">
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="px-6 flex justify-between py-4 cursor-pointer"
            onClick={toggle1}
          >
            <h3 className="text-md font-semibold text-[#020043]">
              How can I schedule an appointment?
            </h3>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen1 && (
            <div className="px-6 py-4 bg-gray-100">
              <p className="text-gray-700">
                You can schedule an appointment online, by phone, or by walking
                in.
              </p>
            </div>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="px-6 flex justify-between py-4 cursor-pointer"
            onClick={toggle2}
          >
            <h3 className="text-md font-semibold text-[#020043]">
              Do you accept insurance?
            </h3>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen2 && (
            <div className="px-6 py-4 bg-gray-100">
              <p className="text-gray-700">
                We accept most major insurance plans.
              </p>
            </div>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="px-6 flex justify-between py-4 cursor-pointer"
            onClick={toggle3}
          >
            <h3 className="text-md font-semibold text-[#020043]">
              What should I bring to my appointment?
            </h3>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          {isOpen3 && (
            <div className="px-6 py-4 bg-gray-100">
              <p className="text-gray-700">
                Please bring your insurance card and a photo ID.
              </p>
            </div>
          )}
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="px-6 flex justify-between py-4 cursor-pointer"
            onClick={toggle4}
          >
            <h3 className="text-md font-semibold text-[#020043]">
              Do you offer telemedicine appointments?
            </h3>
            <div>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {isOpen4 && (
            <div className="px-6 py-4 bg-gray-100">
              <p className="text-gray-700">
                Yes, we offer telemedicine appointments for many of our
                services.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
