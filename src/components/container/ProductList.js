import React from 'react'
import Product from './Product'

const ProductList = (props) => {
  const { filteredData } = props;

  return (
    <>
    {filteredData.length === 0
      ? "No items match the search criteria"
      : filteredData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            author= {product.author}
            country= {product.country}
            language={product.language}
            link={product.link}
            pages={product.pages}
            year={product.year}
          />
        ))}
        </>
  )
}

export default ProductList
