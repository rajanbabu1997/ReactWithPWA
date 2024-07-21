import React, { useState, useEffect } from 'react';
import ProductView from './ProductView';
const GridView = () => {
    const [Products, setProducts] = useState([]);
    const [viewProduct, setViewProduct] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {console.log(json); setProducts(json); setViewProduct(true); console.log(Products)});
  }, []);

  return (
    <div>
    { viewProduct ?
       <div>
        {
        Products.map((product) => (
            <ProductView Product = {product}></ProductView>
           ))
        }
    </div>:
    <div>
      Loading.........
      <div class="loader"></div>
    </div>
}
    </div>
  )
}

export default GridView