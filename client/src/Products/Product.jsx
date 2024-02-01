import React from "react";

const Product = () => {
  return (
    <div className="shadow-lg p-4 rounded-md ">
      <div>
        <img
          className="w-[270px] h-[270px] rounded-md"
          src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="hover:underline">Apple Airpods Pro 2nd Generation Copy - White</h2>
        <p className="line-through">৳1990</p>
        <p className="font-bold">$957</p>
       <div className="flex gap-2 justify-center items-center"> <progress
          className="progress w-40 progress-info"
          value="70"
          max="100"
        ></progress>
        <p className="text-[12px]">916pc left</p>

       </div>
      </div>
    </div>
  );
};

export default Product;
