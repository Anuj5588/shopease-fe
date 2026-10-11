import React from "react";
import Image from "next/image";
import headphone from '../../public/Assests/NavImages/headphone.png'

const CardComponent = ({ image, title, price, rating, likes, cart }) => {
  return (
    <div className="flex justify-around ">
      <div className="bg-white w-[200px] h-[300px] flex flex-col items-center  gap-4 rounded-2xl border-2 border-gray-200">
        <div className="bg-gray-100 w-full h-37.5 rounded-2xl justify-center ">
            <Image src={headphone}  alt="headphone" className=" scale-140 p-4" />
       
        </div>
        <div className="bg-yellow-100 mt-8">
          <div>glsgjpo</div>
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
