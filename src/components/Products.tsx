import { MdKeyboardArrowDown, MdTune } from "react-icons/md";

export default function Products() {
  return (
    <div className="flex flex-col w-full">
       <div className="flex items-center justify-between">
             <h1 className="text-[42px] text-darkblue font-semibold leading-none">Products</h1>
            <div className="flex items-center justify-center gap-8">
                 <span className="text-darkblue-2 text-xs font-normal leading-none">Showing 1 - 10 of 1000</span>
                 <div className="flex items-center gap-8">
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
    </div>
  )
}