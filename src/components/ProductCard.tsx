export default function ProductCard({ description, price, image }: { description?: string, price: number, image: string }) {
    return (
        <div className="w-full flex flex-col gap-2 sm:gap-3">
            <div className="w-full aspect-square rounded-lg overflow-hidden">
                <img src={image} alt={description} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <h3 className="text-darkblue text-xs sm:text-sm font-medium leading-tight mb-1 sm:mb-2">
                    {description}
                </h3>
                <p className="text-darkblue text-sm sm:text-base font-medium leading-none">
                    ${price}
                </p>
            </div>
        </div>
    )
}