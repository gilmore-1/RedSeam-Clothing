import { useState } from "react";
import { FiShoppingCart, FiUser, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-1 justify-center">
        <img src="/fire.svg" alt="Fire" className="w-6 h-6" />
        <h1 className="text-base text-darkblue font-semibold leading-none">RedSeam Clothing</h1>
      </div>
      {isLoggedIn ? (
      <div className="flex items-center gap-2  justify-center ">
        <div className="flex items-center gap-1 justify-center">
            <FiShoppingCart className="w-5 h-5 text-darkblue cursor-pointer gap-5 mr-5" />
            <div className="w-8 aspect-square h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <img src="/avatar.png" alt="Avatar" className="w-full h-full rounded-full" />
            </div>
        </div>
        <div className="flex items-center gap-1 w-full">
            
            <FiChevronDown className="w-5 h-5 text-darkblue cursor-pointer" />
        </div>
      </div>
      ) : (
        <div className="flex items-center gap-2 w-8 justify-center">
             <div className="w-8 aspect-square h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <FiUser className="w-4 h-4 text-darkblue" />
            </div>
            <button className="text-darkblue text-xs font-medium leading-none">Login</button>
        </div>
      )}
    </div>
  )
}