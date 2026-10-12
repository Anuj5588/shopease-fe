import React from "react";
import Image from "next/image";
import headphone from "../../public/Assests/featuredCard/headphone.png"
import shopping from "../../public/Assests/featuredCard/shopping.png"

const CardComponent = ({ image, title, price, rating, likes, cart }) => {
  return (
    <div className="m-8 ">
      <div className="bg-white w-50 h-70 rounded-xl border-2 border-gray-200">
        <div className="bg-[#F8FAFC] w-49 h-42 rounded-xl flex justify-center items-center">
          <Image
            src={headphone}
            width={200}
            height={200}
            alt="headphone"
            className=" scale-100"
          />
        </div>
        <div className="flex flex-col mt-2 pl-2 font-semibold text-[15px]">
          <div className=" ">
            Wireless Headphones
          </div>
          <div>₹4,999</div>
        </div>

        <div className=" flex justify-between font-semibold text-[15px]">
          <div className="flex gap-1">
            <div>⭐4.5</div>
            <div>(120)</div>
          </div>
          <div className="px-4  "><Image src={shopping} width={20} height={50} alt="cart"/></div>
          
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
