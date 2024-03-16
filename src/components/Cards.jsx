import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
      <img className="h-48 w-full object-cover md:w-48" src={product.image} alt={product.name} />
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category}</div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{product.name}</h2>
        <p className="mt-2 text-gray-500">{product.description}</p>
        <div className="mt-4">
          <span className="text-gray-500">Price: ${product.price}</span>
          <span className="ml-4 text-gray-500">Stock: {product.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;