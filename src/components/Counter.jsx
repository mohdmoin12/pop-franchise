import { motion } from 'framer-motion';
import React from 'react';

const counterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Counter() {
  const counters = [
    { count: 600, text: "Team member", suffix: "+" },
    { count: 2000, text: "Service Complete", suffix: "k+" },
    { count: 53, text: "Winning award", suffix: "+" },
    { count: 3000, text: "Client Review", suffix: "k+" },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {counters.map((counter, index) => (
          <motion.div
            key={index}
            variants={counterVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
            <h3 className="text-4xl font-bold text-blue-500">
              {counter.count}
              <span>{counter.suffix}</span>
            </h3>
            <p className="text-gray-700 mt-2">{counter.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Counter;