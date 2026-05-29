import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Logo from '../assets/LOGO.png';
import ShoppingChart from '../assets/purchase.png';
import Pin from '../assets/pin.png';
import USFlag from '../assets/usa.png';
import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className='
                bg-slate-700 text-white px-6
                phone-landscape:px-3 phone-landscape:py-1
                py-4 flex items-center justify-between
                shadow-lg
                laptop:px-10 laptop:py-5
                desktop:px-16 desktop:py-6
            '>

                {/* LEFT SIDE */}
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <Link to={"/"} className='flex items-center'>
                        <img 
                            src={Logo}
                            alt='Logo'
                            className='
                                w-14 h-auto
                                phone-landscape:w-14
                                laptop:w-20
                                desktop:w-24
                            '
                        />
                    </Link>

                    {/* Deliver To */}
                    <div className='
                        hidden 
                        phone-landscape:flex
                        laptop:flex 
                        leading-tight ml-4
                    '>
                        <img 
                            src={Pin}
                            alt='Location Pin'
                            className='w-5 h-5 mr-2 opacity-70'
                        />
                        <div className='flex flex-col leading-tight'>
                            <span className='text-xs text-gray-300 tracking-wide'>
                                Delivering to
                            </span>
                            <span className='text-sm font-semibold text-white'>
                                Victoria, TX 77901
                            </span>
                        </div>
                    </div>
                </div>

                {/* SEARCH BAR (center) */}
                <div className='
                    flex items-center gap-3
                    bg-white/10 backdrop-blur
                    border border-white/20
                    rounded-xl
                    px-3 py-2
                    flex-1 mx-4
                    max-w-full
                    phone-landscape:max-w-[200px]
                    phablet:max-w-[260px]
                    tablet:max-w-[340px]
                    laptop:max-w-md
                    desktop:max-w-full
                '>

                    {/* Category dropdown (cleaner + unique) */}
                    <select className='
                        hidden laptop:block
                        bg-white/20 text-white text-xs
                        px-2 py-1 rounded-md
                        border border-white/20
                        hover:bg-white/30 transition
                    '>
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Home</option>
                        <option>Sports</option>
                        <option>Marketplace</option>
                    </select>

                    {/* Search icon */}
                    <FaSearch className='
                        text-gray-300 text-lg
                        laptop:text-xl
                        desktop:text-2xl    
                    ' />

                    {/* Input */}
                    {/* Mobile placeholder */}
                    <input 
                        type='text'
                        placeholder='Search...'
                        className='
                            flex-1 bg-transparent
                            text-white placeholder-gray-400
                            focus:outline-none
                            text-sm tablet:text-base
                            laptop:hidden
                        '
                    />

                    {/* Desktop placeholder */}
                    <input 
                        type='text'
                        placeholder='Search products, categories, and more...'
                        className='
                            hidden laptop:flex flex-1 bg-transparent
                            text-white placeholder-gray-400
                            focus:outline-none
                            laptop:text-lg
                            desktop:text-xl
                        '
                    />

                </div>

                {/* RIGHT SIDE */}
                <div className='flex items-center gap-12'>

                    {/* Mobile menu button (portrait only) */}
                    <button 
                        className="flex items-center justify-center w-10 h-10 laptop:hidden phone-landscape:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <div className="space-y-1">
                            <span className="block w-6 h-[3px] bg-white rounded"></span>
                            <span className="block w-6 h-[3px] bg-white rounded"></span>
                            <span className="block w-6 h-[3px] bg-white rounded"></span>
                        </div>
                    </button>

                    {/* Language selector */}
                    <div className='hidden phone-landscape:flex laptop:flex items-center gap-1 cursor-pointer'>
                        <img 
                            src={USFlag}
                            alt="US Flag"
                            className="
                                w-6 h-6
                                laptop:w-5 laptop:h-5
                                desktop:w-6 desktop:h-6
                                object-cover rounded-full
                            "
                        />
                        <span className='
                            text-sm
                            laptop:text-sm
                            desktop:text-base
                            font-semibold tracking-wide
                        '>
                            EN
                        </span>
                    </div>

                    {/* Account & Lists */}
                    <div className='hidden phone-landscape:flex laptop:flex flex-col leading-tight cursor-pointer'>
                        <span className='text-xs'>Hello, sign in</span>
                        <span className='text-sm font-semibold'>Profile & Settings</span>
                    </div>

                    {/* Orders */}
                    <div className='hidden laptop:flex flex-col leading-tight cursor-pointer'>
                        <span className='text-lg font-semibold'>Returns</span>
                    </div>

                    {/* Cart */}
                    <Link 
                        to={"/"} 
                        className="
                            relative items-center
                            hidden
                            phone-landscape:flex
                            laptop:flex
                        "
                    >
                        <img 
                            src={ShoppingChart}
                            alt='ShoppingChart'
                            className='
                                w-8 h-auto
                                phone-landscape:w-8
                                laptop:w-10
                                desktop:w-12
                            '
                        />
                        <span className='
                            absolute -top-2 -right-2
                            bg-yellow-400 text-black
                            text-xs font-bold
                            rounded-full px-2
                        '>
                            0
                        </span>
                    </Link>
                </div>
            </nav>

            {/* BOTTOM TOOLBAR */}
            <div className="
                w-full bg-slate-800 text-white 
                border-t border-white/10 
                py-2 px-2 
                flex gap-6 
                overflow-x-auto 
                whitespace-nowrap 
                scrollbar-hide
                phone-landscape:justify-center
                laptop:justify-center
            ">
                <button className="text-sm font-medium hover:text-yellow-300 transition">
                    Electronics
                </button>
                <button className="text-sm font-medium hover:text-yellow-300 transition">
                    Clothes
                </button>
                <button className="text-sm font-medium hover:text-yellow-300 transition">
                    Furniture
                </button>
                <button className="text-sm font-medium hover:text-yellow-300 transition">
                    Shoes
                </button>
                <button className="text-sm font-medium hover:text-yellow-300 transition">
                    Miscellaneous
                </button>
            </div>

            {/* MOBILE RIGHT-SIDE DROPDOWN */}
            <div
                className={`
                    laptop:hidden phone-landscape:hidden
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
                <Link to={"/main"} className="flex items-center gap-2">
                    <img src={ShoppingChart} alt="ShoppingCart" className="w-6" />
                    <span className="text-sm font-semibold">Cart (0)</span>
                </Link>
            </div>
        </>
    );
}