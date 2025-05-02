import { useState } from "react";

const categories = ["SHIRT", "TROUSER", "BLAZER", "BOW/TIE", "ACCESSORIES"];

export default function BottomNavbar() {
  const [active, setActive] = useState("SHIRT");

  return (
    <div className="container mx-auto bg-white border border-l-0 border-r-0  border-[rgba(25,25,25,0.3)] my-10 ">
        <div className="flex justify-around items-center py-4">
            {categories.map((item) => (
            <button
                key={item}
                onClick={() => setActive(item)}
                className={`uppercase font-semibold hover:text-[#191919] hover:opacity-90 ease-in-out duration-200 ${
                active === item ? "text-[#191919] opacity-90" : "text-[#191919] opacity-40"
                }`}
            >
                {item}
            </button>
            ))}
        </div>
    </div>
  );
}
