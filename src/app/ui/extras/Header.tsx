import { pages } from "next/dist/build/templates/app-page";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About Us", href: "/aboutus" },
  { name: "Contact Us", href: "/contactus" },
];

export default function Header() {
  return (
    <header>
      <div className="flex justify-center p-2 bg-blue-700 text-white font-semibold text-xs">
        Get free delivery on orders over Rs 10,000
      </div>
      <nav className="max-w-5xl m-auto flex justify-between">
        <div className="flex gap-8 font-semibold">
          <div>
            <Image src="/logo.png" alt="" width={80} height={80} />
          </div>
          <div className=" gap-10 text-sm flex flex-row items-center">
            {navigation.map((page: any) => (
              <Link href={page.href}>{page.name}</Link>
            ))}
          </div>
        </div>

        <div className="flex items-center flex-row gap-5">
          <div className="flex gap-4">
            <button className="bg-black px-2 py-1 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
              Sign Up
            </button>
            <button className="bg-black px-2 py-1 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
              Sign In
            </button>
          </div>
          <div className="flex gap-4">
            <Link href={'/cart'}>S</Link>
            <Link href={'/cart'}>C</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
