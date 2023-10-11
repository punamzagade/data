import React from 'react';
import Product from './Product';

const ProductList = ({ filteredData, currentPage, itemsPerPage }) => {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min((currentPage + 1) * itemsPerPage, filteredData.length);
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      {currentData.length === 0
        ? "No items match the search criteria"
        : currentData.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              author={product.author}
              country={product.country}
              language={product.language}
              link={product.link}
              pages={product.pages}
              year={product.year}
            />
          ))}
    </>
  );
};

export default ProductList;
