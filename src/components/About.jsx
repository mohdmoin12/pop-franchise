import { motion } from 'framer-motion';
import React from 'react';

const aboutVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Fast and Reliable Car Care
          </h2>
          <p className="text-gray-600 mb-6">
            Car service is essential for maintaining the performance and longevity.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center"><i className="fas fa-arrow-right mr-2"></i> Fast and Reliable</li>
            <li className="flex items-center"><i className="fas fa-arrow-right mr-2"></i> Free with Our Services</li>
          </ul>
        </motion.div>
        <motion.div
          variants={aboutVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img src="/assets/images/resources/about-one-img-1.jpg" alt="About" className="w-full rounded-lg shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;