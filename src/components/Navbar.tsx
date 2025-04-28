
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar () {
    return (
        <>
            <nav className="w-full py-9 px-52 bg-white text-black">

                    <div className="flex justify-between">

                        {/* LEFT  */}
                        <div className="flex flex-col text-xs text-gray-400">
                            <span>SHIPPING TO</span>
                            <Link href="#" className="font-bold underline underline-offset-2 text-black text-sm">
                            INDIA
                            </Link>
                        </div>

                        {/* CENTER  */}
                        <div className="text-xl">
                            <Link href="/">
                                <Image
                                src="/mikenwidelogo.png" // path inside /public
                                alt="Mike & Wide Logo"
                                width={150} // adjust width as per your figma
                                height={50}  // adjust height as per your figma
                                priority // important for navbar logos (loads faster)
                                className=""
                                />
                            </Link>
                        </div>

                        {/* RIGHT  */}
                        <div className="flex items-center gap-6 text-gray-800">
                            <Link href="/search" aria-label="Search">
                                <Search size={20} />
                                </Link>
                                <Link href="/account" aria-label="Account">
                                <User size={20} />
                                </Link>
                                <Link href="/wishlist" aria-label="Wishlist">
                                <Heart size={20} />
                                </Link>
                                <Link href="/cart" aria-label="Cart" className="flex items-center gap-1">
                                <ShoppingBag size={20} />
                                <span className="text-sm">0</span>
                            </Link>
                        </div>

                    </div>

            </nav>
        </>
    )
}








// asdfghjkl--------------------------------------------------


































// 'use client';

// import Link from 'next/link';
// import { Search, User, Heart, ShoppingBag } from 'lucide-react'; // using Lucide icons (free & lightweight)
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <nav className="w-full flex justify-between items-center px-8 py-9 bg-white">

//       {/* Left side: Shipping */}
//       <div className="flex flex-col text-xs text-gray-400">
//         <span>SHIPPING TO</span>
//         <Link href="#" className="font-bold underline underline-offset-2 text-black text-sm">
//           INDIA
//         </Link>
//       </div>

//       {/* Center: Logo */}
//       <div className="text-2xl font-light tracking-widest">
//         <Link href="/">
//             <Image
//             src="/mikenwidelogo.png" // path inside /public
//             alt="Mike & Wide Logo"
//             width={150} // adjust width as per your figma
//             height={50}  // adjust height as per your figma
//             priority // important for navbar logos (loads faster)
//             />
//         </Link>
//       </div>

//       {/* Right side: Icons */}
//       <div className="flex items-center gap-6 text-gray-800">
//         <Link href="/search" aria-label="Search">
//           <Search size={20} />
//         </Link>
//         <Link href="/account" aria-label="Account">
//           <User size={20} />
//         </Link>
//         <Link href="/wishlist" aria-label="Wishlist">
//           <Heart size={20} />
//         </Link>
//         <Link href="/cart" aria-label="Cart" className="flex items-center gap-1">
//           <ShoppingBag size={20} />
//           <span className="text-sm">0</span>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
