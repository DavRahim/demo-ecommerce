import React, { useState } from 'react';
import Product from '../../Products/Product';



const Products = () => {
   
    return (
        <div className='grid grid-cols-4 mx-6 gap-8'>
            {
                [1,2,33,4,4,4].map((product)=><Product key={product} product={product}></Product>)
            }
          
            
        </div>
    );
};

export default Products;