import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Logo from "../assets/LOGO.png";
import ShoppingChart from "../assets/purchase.png";
import Pin from "../assets/pin.png";
import USFlag from "../assets/usa.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          bg-slate-700 text-white px-4 py-3 gap-4
          sm:px-6 sm:py-4
          lg:px-10 lg:py-5
          xl:px-16 xl:py-6
          flex items-center justify-between shadow-lg
        "
      >
        {/* LEFT SIDE */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="
                w-16
                sm:w-20
                lg:w-24
                xl:w-26
              "
            />
          </Link>

          {/* Deliver To */}
          <div className="hidden sm:flex lg:flex items-center ml-4">
            <img src={Pin} alt="Location Pin" className="w-5 h-5 mr-2 opacity-70" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-300 tracking-wide hidden md:block">Delivering to</span>
              <span className="text-sm font-semibold text-white">Victoria, TX 77901</span>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div
          className="
            flex items-center gap-3
            bg-white/10 backdrop-blur border border-white/20
            rounded-xl px-3 py-2 flex-1
            max-w-full
            sm:max-w-full
            md:max-w-[340px]
            lg:max-w-sm
            xl:max-w-[1024px]
            
          "
        >
          {/* Category dropdown */}
          <select
            className="
              hidden lg:block
              bg-white/20 text-white text-xs
              px-2 py-1 rounded-md border border-white/20
              hover:bg-white/30 transition
            "
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home</option>
            <option>Sports</option>
            <option>Marketplace</option>
          </select>

          {/* Search icon */}
          <FaSearch className="text-gray-300 text-lg lg:text-xl xl:text-2xl" />

          {/* Mobile input */}
          <input
            type="text"
            placeholder="Search..."
            className="
              flex-1 bg-transparent text-white placeholder-gray-400
              focus:outline-none text-sm md:text-base
              lg:hidden
            "
          />

          {/* Desktop input */}
          <input
            type="text"
            placeholder="Search products, categories, and more..."
            className="
              hidden lg:flex flex-1 bg-transparent
              text-white placeholder-gray-400 focus:outline-none
              lg:text-lg xl:text-xl
            "
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-10">
          {/* Mobile menu button */}
          <button
            className="sm:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-[3px] bg-white rounded"></span>
              <span className="block w-6 h-[3px] bg-white rounded"></span>
              <span className="block w-6 h-[3px] bg-white rounded"></span>
            </div>
          </button>

          {/* Language selector */}
          <div className="hidden sm:flex lg:flex items-center gap-1 cursor-pointer">
            <img
              src={USFlag}
              alt="US Flag"
              className="w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 rounded-full object-cover"
            />
            <span className="text-sm lg:text-sm xl:text-base font-semibold tracking-wide">
              EN
            </span>
          </div>

          {/* Account */}
          <div className="hidden sm:flex lg:flex flex-col leading-tight cursor-pointer">
            <span className="text-xs hidden md:block">Hello, sign in</span>
            <span className="text-sm font-semibold">Profile & Settings</span>
          </div>

          {/* Orders */}
          <div className="hidden lg:flex flex-col leading-tight cursor-pointer">
            <span className="text-lg font-semibold">Returns</span>
          </div>

          {/* Cart */}
          <Link to="/" className="hidden sm:flex lg:flex relative items-center">
            <img
              src={ShoppingChart}
              alt="ShoppingCart"
              className="w-10 sm:w-12 lg:w-10 xl:w-12"
            />
            <span
              className="
                absolute -top-2 -right-2 bg-yellow-400 text-black
                text-xs font-bold rounded-full px-2
              "
            >
              0
            </span>
          </Link>
        </div>
      </nav>

      {/* BOTTOM TOOLBAR */}
      <div
        className="
          w-full bg-slate-800 text-white border-t border-white/10
          py-2 px-2 flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide
          sm:justify-center lg:justify-center
        "
      >
        <button className="text-sm font-medium hover:text-yellow-300 transition">Electronics</button>
        <button className="text-sm font-medium hover:text-yellow-300 transition">Clothes</button>
        <button className="text-sm font-medium hover:text-yellow-300 transition">Furniture</button>
        <button className="text-sm font-medium hover:text-yellow-300 transition">Shoes</button>
        <button className="text-sm font-medium hover:text-yellow-300 transition">Miscellaneous</button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`
          sm:hidden lg:hidden
          ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          overflow-hidden transition-all duration-300
          bg-slate-800 text-white rounded-b-xl px-6 py-4 space-y-4
        `}
      >
        {/* Deliver To */}
        <div className="flex items-center">
          <img src={Pin} alt="Location Pin" className="w-5 h-5 mr-2 opacity-70" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-300 tracking-wide">Delivering to</span>
            <span className="text-sm font-semibold">Victoria, TX 77901</span>
          </div>
        </div>

        {/* Language */}
        <div className="flex items-center gap-2">
          <img src={USFlag} alt="US Flag" className="w-5 h-5 rounded-full" />
          <span className="text-sm font-semibold">EN</span>
        </div>

        {/* Account */}
        <div className="flex flex-col">
          <span className="text-xs">Hello, sign in</span>
          <span className="text-sm font-semibold">Profile & Settings</span>
        </div>

        {/* Orders */}
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Returns</span>
        </div>

        {/* Cart */}
        <Link to="/main" className="flex items-center gap-2">
          <img src={ShoppingChart} alt="ShoppingCart" className="w-6" />
          <span className="text-sm font-semibold">Cart (0)</span>
        </Link>
      </div>
    </>
  );
}
