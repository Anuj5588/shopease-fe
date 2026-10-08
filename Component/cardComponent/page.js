import React from "react";
import Image from "next/image";
import headphone from '../../public/Assests/NavImages/headphone.png'

const CardComponent = ({ image, title, price, rating, likes, cart }) => {
  return (
    <div className="flex justify-around ">
      <div className="bg-white w-[300px] h-[350px] flex flex-col items-center gap-4 ">
        <div className="">
          <Image src={headphone} width={400} height={50}/>
        </div>
        <div className="bg-yellow-100">
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
