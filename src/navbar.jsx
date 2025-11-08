"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-5 w-full z-[999] transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="backdrop-blur-md bg-[#037ffc39] rounded-full py-2 lg:mx-50 md:mx-25 mx-5 px-5 text-[#172a3d] flex items-center justify-between shadow-md">
        <a href="/"><span className="text-xl font-bold">NAVBAR</span></a>
        <ul className="flex gap-5 font-semibold">
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
