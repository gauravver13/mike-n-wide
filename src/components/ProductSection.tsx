import ProductCard from "./ProductCard";

export default function ProductSlider() {
    return (
        <div className="container my-40">
            {/* Desktop View: Fixed 4 cards */}
            <div className="hidden lg:flex justify-evenly">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="w-[23%]">
                        <ProductCard />
                    </div>
                ))}
            </div>

            {/* Medium and Small screens: Scrollable */}
            <div className="flex lg:hidden overflow-x-auto scrollbar-hide space-x-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="
                            flex-shrink-0 
                            w-[70%] 
                            sm:w-[45%] 
                            md:w-[45%] 
                            h-full
                        "
                    >
                        <ProductCard />
                    </div>
                ))}
            </div>
        </div>
    );
}
