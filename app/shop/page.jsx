"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Chatbot from "@/components/Chatbot";
import { motion } from "framer-motion";

const shopProducts = [
  { src: assets.kohinoor, title: "Kohinoor Powder 1", description: "Essential nutrients for healthier plants." },
  { src: assets.agrozyme, title: "Kohinoor Powder 2", description: "Enhances growth and productivity." },
  { src: assets.shakti, title: "Kohinoor Powder 3", description: "Perfect for all types of crops." },
  { src: assets.starplus, title: "Kohinoor Powder 4", description: "High-quality fertilizer for your farm." },
  { src: assets.vijay_growing, title: "Kohinoor Powder 5", description: "Boost your harvest with nutrients." },
  { src: assets.fungi_killer, title: "Kohinoor Powder 6", description: "Sustainable farming made easy." },
];

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 py-14 px-3 md:px-16">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 text-center mb-10">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="row g-4 justify-content-center">
        {shopProducts.map(({ src, title, description }, index) => (
          <motion.div
            key={index}
            className="col-12 col-sm-6 col-lg-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProduct({ src, title, description })}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 h-100">
              <Image
                src={src}
                alt={title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-900/80 to-transparent p-4 text-white space-y-1">
                <p className="font-semibold text-lg">{title}</p>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative bg-transparent rounded-xl overflow-hidden w-full max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProduct.src}
              alt={selectedProduct.title}
              width={800}
              height={600}
              className="rounded-xl object-contain w-full h-auto max-h-[80vh] sm:max-h-[90vh]"
            />
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <div className="text-white mt-4 text-center px-3">
              <p className="font-bold text-2xl">{selectedProduct.title}</p>
              <p className="text-sm">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot (fixed & full-screen on mobile) */}
      <Chatbot />
    </div>
  );
};

export default Shop;
