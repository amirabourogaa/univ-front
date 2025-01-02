'use client'; // Assurez-vous que ceci est au sommet si nécessaire dans votre environnement.

import React, { useState } from 'react';
import { categories } from './data.js'; // Chemin relatif vers data.js
import { motion } from 'framer-motion'; // Pour les animations

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory?.name === category.name ? null : category);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-primary text-center mb-8">
        Découvrez nos produits
      </h1>

      {/* Liste des catégories principales */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {categories.map((category) => (
          <motion.div
            key={category.name}
            layout
            className={`cursor-pointer border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition transform hover:scale-105 ${
              selectedCategory?.name === category.name
                ? 'border-primary'
                : 'border-gray-300'
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <motion.img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-lg mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-center font-semibold">{category.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Liste des sous-catégories */}
      {selectedCategory && (
        <motion.div
          layout
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
            Sous-catégories : {selectedCategory.name}
          </h2>
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {selectedCategory.subcategories.map((subcategory) => (
              <motion.div
                key={subcategory.name}
                layout
                className="cursor-pointer border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                <motion.img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <p className="text-center font-semibold">{subcategory.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Products;
