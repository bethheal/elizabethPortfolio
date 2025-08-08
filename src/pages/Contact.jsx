import React from "react";

const Contact = () => {
  return (
    <section className="bg-amber-50 mb-20 text-black min-h-screen py-10 px-4 sm:py-16 sm:px-6">
      {/* Heading */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-y-2 px-4 sm:px-6 py-2 text-center">
          CONTACT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Profile Card */}
        <div className="p-4 sm:p-6 shadow-lg rounded-xl">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Contact Visual"
            className="rounded-xl mb-4 w-full object-cover"
          />
          <p className="text-sm mb-2">
            I am available for remote, hybrid and freelancing work or one-time
            projects. Connect with me via email or call in to my account.
          </p>
          <p className="text-sm mb-4 break-words">
            Email: elizabethbarden18@.com
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-blue-400">
              🔗
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              LinkedIn
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400">
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-black p-4 sm:p-6 rounded-2xl shadow-lg space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-amber-50 p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-white p-2 rounded w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="bg-amber-50 p-2 w-full rounded"
          />
          <input
            type="text"
            placeholder="Subject"
            className="bg-amber-50 p-2 w-full rounded"
          />
          <textarea
            placeholder="Your Message"
            className="bg-amber-50 p-2 w-full h-32 rounded"
          />
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded text-white w-full sm:w-auto"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
