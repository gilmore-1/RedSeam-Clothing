import { MdKeyboardArrowDown, MdTune } from "react-icons/md";
import ProductCard from "./ProductCard";
import Product1 from "/assets/img/product/productimg1.png"
import Product2 from "/assets/img/product/productimg2.png"
import Product3 from "/assets/img/product/productimg3.png"
import Product4 from "/assets/img/product/productimg4.png"
import Product5 from "/assets/img/product/productimg5.png"
import Product6 from "/assets/img/product/productimg6.png"
import Product7 from "/assets/img/product/productimg7.png"
import Product8 from "/assets/img/product/productimg8.png"
import Product9 from "/assets/img/product/productimg9.png"
import Product10 from "/assets/img/product/productimg10.png"
export default function Products() {
  return (
    <div className="flex flex-col w-full mt-4 sm:mt-6 md:mt-8 lg:mt-25">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-darkblue font-semibold leading-none">Products</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-2 sm:gap-4 md:gap-8">
                 <span className="text-darkblue-2 text-xs font-normal leading-none">Showing 1 - 10 of 1000</span>
                 <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
                    <div className="flex items-center gap-2 justify-center">
                        <MdTune className="w-6 h-6 text-darkblue-2" />
                        <span className="text-darkblue text-base font-normal leading-none">Filter</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <span className="text-darkblue text-base font-normal leading-none">Sort by</span>
                        <MdKeyboardArrowDown className="w-6 h-6 text-darkblue-2" />
                    </div>
                 </div>
            </div>
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8">
             <ProductCard description="Kids' Curved Hilfiger Graphic T-Shirt" price={25} image={Product1} />
             <ProductCard description="Kids' Script Foil Logo T-Shirt" price={65} image={Product2} />
             <ProductCard description="Kids' Varsity Logo T-Shirt" price={80} image={Product3} />
             <ProductCard description="Kids' Crewneck Sweater" price={45} image={Product4} />
             <ProductCard description="Kids' Curved Hilfiger Graphic T-Shirt" price={25} image={Product5} />
             <ProductCard description="Kids' Script Foil Logo T-Shirt" price={65} image={Product6} />  
             <ProductCard description="Kids' Varsity Logo T-Shirt" price={80} image={Product7} />
             <ProductCard description="Kids' Crewneck Sweater" price={45} image={Product8} />
             <ProductCard description="Kids' Varsity Logo T-Shirt" price={80} image={Product9} />
             <ProductCard description="Regular Fit 7 Comfort Waist Tommy Shor" price={45} image={Product10} />
       </div>
    </div>
  )
}