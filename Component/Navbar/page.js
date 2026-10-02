import React from "react";
import Image from "next/image";
import logo from '@/public/Assests/NavImages/logo.png'
import profile from '@/public/Assests/NavImages/profile.png'
import heart from '@/public/Assests/NavImages/heart.png'
import shoppingcart from '@/public/Assests/NavImages/shoppingcart.png'
import search from '@/public/Assests/NavImages/search.png'

const Navbar = () => {
  return (
    <div className="">
      <div className = "flex w-full h-25  bg-[#ffff] justify-around items-center border-2 border-[#E5E7EB] text-[#35a5ca] text-2xl cursor-pointer">
    <div className = "flex items-center">
        <div><Image src={logo} height={50} width={50} alt="logo"/></div>
        <div className="font-bold">ShopEase</div>
    </div>
    <div>Home</div>
    <div>Products</div>
    <div>Categories</div>
    <div className="flex items-center gap-3 w-full max-w-md px-4 py-2.5 rounded-full bg-slate-100/70 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#35a5ca] transition-all duration-200">
      <Image  src={search} height={20} width={20} alt="search"/>
      <input
        type="text"
        placeholder="Search for products, brands and more..."
        className="w-full bg-transparent  placeholder-slate-400 text-sm focus:outline-none border-none p-0"
      />
    </div>
    <div><Image src={shoppingcart} height={30} width={30}alt="shoppingcart" /></div>
    <div><Image src={heart} height={30} width={30}alt="heart"/></div>
    <div><Image src={profile} height={30} width={30} alt="profile"/></div>
      </div>
    </div>
  );
};

export default Navbar;
