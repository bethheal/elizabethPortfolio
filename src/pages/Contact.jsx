import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-amber-50 mb-20 text-black min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-16 overflow-x-hidden"
    >
      {/* Heading */}
      <motion.div
        className="flex justify-center mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold border-y-2 px-4 sm:px-6 py-2 text-center">
          CONTACT ME
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Profile Card */}
        <motion.div
          className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row p-4 sm:p-6 rounded-xl w-full max-w-md mx-auto md:max-w-none bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Contact "
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
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="flex flex-col items-center text-center sm:text-left sm:items-start sm:flex-row p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto md:max-w-none bg-black/80 backdrop-blur-lg border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4 w-full">
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-amber-50/80 p-2 rounded w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="bg-amber-50/80 p-2 rounded w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="bg-amber-50/80 p-2 w-full rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="bg-amber-50/80 p-2 w-full rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Message */}
            <textarea
              placeholder="Your Message"
              className="bg-amber-50/80 p-2 w-full h-32 rounded text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            {/* Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded text-white w-full sm:w-auto text-sm sm:text-base transition-colors duration-300 mx-auto sm:mx-0"
            >
              Send Message →
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
