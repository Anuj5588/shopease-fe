import React from "react";
import Image from "next/image";
import headphone from "../../public/Assests/featuredCard/headphone.png"
import shopping from "../../public/Assests/featuredCard/shopping.png"

const CardComponent = ({ image, title, price, rating, likes, cart }) => {
  return (
    <div className="m-8 ">
      <div className="bg-white w-42 h-62 rounded-xl border-2 border-gray-200">
        <div className="bg-[#F8FAFC] w-41 h-40 rounded-xl flex justify-center items-center">
          <Image
            src={headphone}
            width={180}
            height={180}
            alt="headphone"
            className=" scale-100"
          />
        </div>
        <div className="flex flex-col mt-2 pl-2 font-semibold text-[12px] bg-none">
          <div className=" ">
            Wireless Headphones
          </div>
          <div className="text-[15px]">₹4,999</div>
        </div>

        <div className=" flex justify-between text-gray-400 text-[12px] px-2 items-center">
          <div className="flex gap-1">
            <div>⭐4.5</div>
            <div>(120)</div>
          </div>
          <div className="p-[3px] border-2 border-gray-200 rounded-[5px]"><Image src={shopping} width={18} height={18} alt="cart"/></div>
          
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
