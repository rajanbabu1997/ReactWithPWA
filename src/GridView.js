import React, { useState, useEffect } from 'react';
import ProductView from './ProductView';
const GridView = () => {
    const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {console.log(json); setProducts(json); console.log(Products)});
  }, []);

  return (
       <div>
      {Products.map((product) => (
       <ProductView Product = {product}></ProductView>
      ))}
    </div>
  )
}

export default GridView