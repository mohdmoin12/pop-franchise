import { motion } from 'framer-motion';
import React from 'react';

const preloaderVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0, transition: { delay: 1.5, duration: 0.5 } },
};

function Preloader() {
  return (
    <motion.div
      variants={preloaderVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-0 bg-gray-800 flex items-center justify-center z-50"
    >
      <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse"></div>
    </motion.div>
  );
}

export default Preloader;