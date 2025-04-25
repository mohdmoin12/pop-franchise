import { motion } from 'framer-motion';
import React from 'react';

const brandVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Brand() {
  const brands = [
    "/assets/images/brand/brand-1-1.png",
    "/assets/images/brand/brand-1-2.png",
    "/assets/images/brand/brand-1-3.png",
    "/assets/images/brand/brand-1-4.png",
    "/assets/images/brand/brand-1-5.png",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
        {brands.map((brand, index) => (
          <motion.img
            key={index}
            variants={brandVariants}
            initial="hidden"
            animate="visible"
            src={brand}
            alt="Brand"
            className="h-12"
          />
        ))}
      </div>
    </section>
  );
}

export default Brand;