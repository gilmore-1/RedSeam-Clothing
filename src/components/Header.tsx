import { useState } from "react";
import { FiShoppingCart, FiUser, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="w-full flex justify-between items-center mb-4 sm:mb-6 md:mb-8">
      <div className="flex items-center gap-1 justify-center">
        <img src="/fire.svg" alt="Fire" className="w-6 h-6" />
        <h1 className="text-sm sm:text-base text-darkblue font-semibold leading-none">RedSeam Clothing</h1>
      </div>
      {isLoggedIn ? (
      <div className="flex items-center gap-1 sm:gap-2 justify-center">
        <div className="flex items-center gap-1 justify-center">
            <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-darkblue cursor-pointer mr-2 sm:mr-5" />
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <img src="/avatar.png" alt="Avatar" className="w-full h-full rounded-full" />
            </div>
        </div>
        <div className="flex items-center gap-1 w-full">
            
            <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-darkblue cursor-pointer" />
        </div>
      </div>
      ) : (
        <div className="flex items-center gap-1 sm:gap-2 justify-center">
             <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <FiUser className="w-3 h-3 sm:w-4 sm:h-4 text-darkblue" />
            </div>
            <button className="text-darkblue text-xs sm:text-sm font-medium leading-none">Login</button>
        </div>
      )}
    </div>
  )
}