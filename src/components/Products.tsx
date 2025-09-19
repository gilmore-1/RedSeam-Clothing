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
import { useState, useMemo } from "react";
import Filter from "./PriceRange";
import Sort, { type SortOption } from "./SortBy";
// Product data structure
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Sample product data
const productsData: Product[] = [
  { id: 1, name: "Kids' Curved Hilfiger Graphic T-Shirt", price: 25, image: Product1 },
  { id: 2, name: "Kids' Script Foil Logo T-Shirt", price: 65, image: Product2 },
  { id: 3, name: "Kids' Varsity Logo T-Shirt", price: 80, image: Product3 },
  { id: 4, name: "Kids' Crewneck Sweater", price: 45, image: Product4 },
  { id: 5, name: "Kids' Curved Hilfiger Graphic T-Shirt", price: 25, image: Product5 },
  { id: 6, name: "Kids' Script Foil Logo T-Shirt", price: 65, image: Product6 },
  { id: 7, name: "Kids' Varsity Logo T-Shirt", price: 80, image: Product7 },
  { id: 8, name: "Kids' Crewneck Sweater", price: 45, image: Product8 },
  { id: 9, name: "Kids' Varsity Logo T-Shirt", price: 80, image: Product9 },
  { id: 10, name: "Regular Fit 7 Comfort Waist Tommy Short", price: 45, image: Product10 },
];

// Sort options
const sortOptions: SortOption[] = [
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

export default function Products() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min?: number; max?: number }>({});
  const [sortBy, setSortBy] = useState("price-low");

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = productsData.filter(product => {
      if (priceRange.min !== undefined && product.price < priceRange.min) return false;
      if (priceRange.max !== undefined && product.price > priceRange.max) return false;
      return true;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [priceRange, sortBy]);

  // Handle price range filter
  const handlePriceFilter = (min?: number, max?: number) => {
    setPriceRange({ min, max });
    setIsFilterOpen(false);
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortBy(value);
    setIsSortOpen(false);
  };
  return (
    <div className="flex flex-col w-full mt-4 sm:mt-6 md:mt-8 lg:mt-25">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-darkblue font-semibold leading-none">Products</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 sm:gap-4 md:gap-8">
                 <span className="text-darkblue-2 text-xs font-normal leading-none">
                   Showing 1 - {filteredAndSortedProducts.length} of {productsData.length}
                 </span>
                 <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
                    <div className="flex items-center gap-2 justify-center cursor-pointer" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        <MdTune className="w-6 h-6 text-darkblue-2" />
                        <span className="text-darkblue text-base font-normal leading-none">Filter</span>
                    </div>
                    <Sort value={sortBy} onChange={handleSortChange} options={sortOptions} />
                 </div>
            </div>
       </div>
       {isFilterOpen && (
         <div className="mt-4 sm:mt-6">
           <Filter onApply={handlePriceFilter} />
         </div>
       )}
       {isSortOpen && (
         <div className="mt-4 sm:mt-6">
           <Sort value={sortBy} onChange={handleSortChange} options={sortOptions} />
         </div>
       )}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8">
         {filteredAndSortedProducts.length > 0 ? (
           filteredAndSortedProducts.map((product) => (
             <ProductCard
               key={product.id}
               description={product.name}
               price={product.price}
               image={product.image}
             />
           ))
         ) : (
           <div className="col-span-full text-center py-8">
             <p className="text-darkblue-2 text-lg">No products found matching your criteria.</p>
           </div>
         )}
       </div>
    </div>
  )
}