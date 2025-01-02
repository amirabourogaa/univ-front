'use client'; // Assurez-vous que ceci est au sommet si nécessaire dans votre environnement.

import React, { useState } from 'react';
import { categories } from './data.js'; // Chemin relatif vers data.js

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-primary text-center mb-6">
        Nos produits
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="cursor-pointer border border-gray-300 rounded-lg p-2 bg-white hover:bg-primary hover:text-white transition duration-200"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-42 object-cover rounded-lg"
            />
            <p className="text-center mt-2 font-semibold">{category.name}</p>
          </div>
        ))}
      </div>

      {selectedCategory && (
        <>
          <h2 className="text-xl font-bold text-gray-600 mt-8">
            Sous-catégories pour {selectedCategory.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {selectedCategory.subcategories.map((subcategory) => (
              <div
                key={subcategory.name}
                className="cursor-pointer border border-gray-300 rounded-lg p-2 bg-white hover:bg-primary hover:text-white transition duration-200"
                onClick={() => handleSubcategoryClick(subcategory)}
              >
                <p className="text-center font-semibold">{subcategory.name}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedSubcategory && (
        <>
          <h3 className="text-lg font-bold text-gray-600 mt-8">
            Produits pour {selectedSubcategory.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {selectedSubcategory.products.map((product) => (
              <div
                key={product.name}
                className="cursor-pointer border border-gray-300 rounded-lg p-2 bg-white hover:bg-primary hover:text-white transition duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-42 object-cover rounded-lg"
                />
                <p className="text-center mt-2 font-semibold">{product.name}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
