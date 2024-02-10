import React, { useState } from "react";
import Product from "./Product";


const Products = () => {
  return (
    <div className="grid grid-cols-4 mx-auto w-[96%] gap-8">
      {[1, 2, 33, 4, 4, 4].map((product) => (
        <Product key={product} product={product}/>
      ))}
    </div>
  );
};

export default Products;
