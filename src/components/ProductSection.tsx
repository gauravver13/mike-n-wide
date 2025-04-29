import ProductCard from "./ProductCard";

export default function ProductSlider() {
    return (
        <div className="container my-40">
            <div className="hidden md:flex md:flex-1/4 justify-between">
            
                {/* Desktop View: Fixed 4 cards */}
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="">
                        <ProductCard />
                    </div>
                ))}
            </div>

            <div className="flex md:hidden container scrollbar-hide">
                {/* Mobile View: Sliding */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex-shrink-0 w-[70%] h-full">
                        <ProductCard />
                    </div>
                ))}
            </div>
        </div>
    );
}
