import React from "react";
import page6 from "../pages/GloryFurniture";
import Image from 'next/image'
const GloryFurniture = () => {
  return (
    <div>
        <nav className="flex justify-between items-center">
        <div className="logo p-5 ">
           <Image src="/Group.png" width={56} height={72} />
        </div>
        
        <ul className="font-['Poppins'] flex items-center justify-center gap-x-4" >
            <li
            className="cursor-pointer font-bold">
            Bedroom
            </li>
            <li
            className="cursor-pointer font-bold">
            Living Room
            </li>
            <li
            className="cursor-pointer font-bold">
            Dining & Kitchen
            </li>
            <li
            className="cursor-pointer font-bold">
            Office
            </li>
        </ul>

        <div className="logo p-5 flex">
           <Image src="/Group 6.png" width={20} height={20} />
           <Image src="/Group 260.png" width={20} height={20} />
        </div>
    </nav>
    <div className="bg-pink-100 flex pt-20 px-20">
      <div>
        <h1 className="text-4xl text-gray-900 px-15 w-2/5">The Glory Cambalk Furniture</h1>
        <h3 className="text-1xl text-gray-700 py-5 px-15 xl:w-8/12 2xl:w-full">Avoid the hassle of physically visiting a store and order your favorite product with a few clicks online for the best wood furniture design. Free delivery is available.</h3>
        <button className="font-['Poppins'] bg-gray-900 text-white rounded-xl bold py-4 px-7 ">Shop Now</button>
      </div>
      <div className="">
        <Image src="/image 5 (1).png" width={549} height={491} />
      </div>
    </div>
    
    <div className="flex">
      <div>
        <h1 className="text-4xl bolder text-center ">Why Choose Us?</h1>
      </div>
      <div className="align-center">
        <div className="flex-col bg-cyan-200 align-center text-center">
          <Image src="/Group 297.png" width={19} height={16} />
          <p className="text-sm bold">SAFE SHIPPING</p>
          <p className="text-sm w-3/5 text-center">In all major cities across the country</p>
        </div>
      </div>
    </div>
    </div>
     );
   };
export default GloryFurniture;
    
