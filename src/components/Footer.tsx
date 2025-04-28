
import { Heart, Link, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

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
