import { motion } from 'framer-motion';
import React from 'react';

const contactVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function Contact() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Expert Service for Your Best Vehicle
          </h3>
          <form className="space-y-4">
            <select className="w-full p-3 border rounded">
              <option>Make</option>
              <option>Make 01</option>
            </select>
            <input type="text" placeholder="Model" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Year" className="w-full p-3 border rounded" />
            <input type="text" placeholder="Repair Needed" className="w-full p-3 border rounded" />
            <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
              Get Estimate
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={contactVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img src="/assets/images/resources/contact-one-img-1.png" alt="Contact" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;