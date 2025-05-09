'use client';

import { Heart, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BottomNavbar from "./ui/BottomNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white text-black py-6 px-4 lg:px-52 relative">

      <div className="flex justify-between items-center">

        {/* LEFT - Hamburger on mobile */}
        <div className="flex items-center">
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* LEFT - Shipping Info (Desktop only) */}
          <div className="hidden lg:flex flex-col text-xs text-gray-400">
            <span>SHIPPING TO</span>
            <Link href="#" className="font-bold underline underline-offset-2 text-black text-sm">
              INDIA
            </Link>
          </div>
          
        </div>

        {/* CENTER - Logo */}
        <div className="text-xl">
          <Link href="/">
            <Image
              src="/mikenwidelogo.png"
              alt="Mike & Wide Logo"
              width={150}
              height={50}
              priority
              className="mx-auto"
            />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-black ">
          {/* Search Icon - Always visible */}

          {/* // TODO: change this to consistent search bar  */}
          <Link href="/search" aria-label="Search" className="md:hidden">
            <Search size={24} />
          </Link>

          {/* Desktop other icons */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/search" aria-label="Search" className="opacity-60 hover:opacity-80 active:opacity-100">
              <Search size={20} />
            </Link>
            <Link href="/account" aria-label="Account" className="opacity-60 hover:opacity-80 active:opacity-100">
              <User size={20} />
            </Link>
            <Link href="/wishlist" aria-label="Wishlist" className="opacity-60 hover:opacity-80 active:opacity-100">
              <Heart size={20} />
            </Link>
            <Link href="/cart" aria-label="Cart" className="flex items-center gap-1 opacity-60 hover:opacity-80 active:opacity-100">
              <ShoppingBag size={20} />
              <span className="text-sm">0</span>
            </Link>
          </div>
        </div>

      </div>
      <div className="hidden lg:block">
          <BottomNavbar />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col py-4 space-y-4 px-6 md:hidden z-50">
          <Link href="/account" className="flex items-center gap-2 text-gray-800" onClick={() => setIsOpen(false)}>
            <User size={20} /> Account
          </Link>
          <Link href="/wishlist" className="flex items-center gap-2 text-gray-800" onClick={() => setIsOpen(false)}>
            <Heart size={20} /> Wishlist
          </Link>
          <Link href="/cart" className="flex items-center gap-2 text-gray-800" onClick={() => setIsOpen(false)}>
            <ShoppingBag size={20} /> Cart (0)
          </Link>
        </div>
      )}
    </nav>
  );
}
