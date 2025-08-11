import React from "react";

const Contact = () => {
  return (
    <section className="bg-amber-50 mb-20 text-black min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-16 overflow-x-hidden">
      {/* Heading */}
      <div className="flex justify-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold border-y-2 px-4 sm:px-6 py-2 text-center">
          CONTACT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Profile Card */}
        <div className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row p-4 sm:p-6 shadow-lg rounded-xl bg-white w-full max-w-md mx-auto md:max-w-none">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Contact Visual"
            className="rounded-xl mb-4 sm:mb-0 w-72 object-cover object-center sm:mr-6"
          />
          <div>
            <p className="text-sm sm:text-base mb-2 leading-relaxed">
              I am available for remote, hybrid, and freelancing work or one-time
              projects. Connect with me via email or phone.
            </p>
            <p className="text-sm sm:text-base mb-4 break-words">
              <strong>Email:</strong> elizabethbarden18@.com
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              <a href="#" className="hover:text-blue-400 text-sm sm:text-base">
                🔗
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-400 text-sm sm:text-base"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-400 text-sm sm:text-base"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row bg-black p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto md:max-w-none">
          <div className="space-y-4 w-full">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-amber-50 p-2 rounded w-full text-sm sm:text-base"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-amber-50 p-2 rounded w-full text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="bg-amber-50 p-2 w-full rounded text-sm sm:text-base"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="bg-amber-50 p-2 w-full rounded text-sm sm:text-base"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              className="bg-amber-50 p-2 w-full h-32 rounded text-sm sm:text-base"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded text-white w-full sm:w-auto text-sm sm:text-base transition-colors duration-300 mx-auto sm:mx-0"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
