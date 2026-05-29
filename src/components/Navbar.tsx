import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Logo from '../assets/LOGO.png';
import ShoppingChart from '../assets/purchase.png';

export default function Navbar() {
    return (
        <nav className='
            bg-slate-700 text-white px-6
            phone-landscape:px-3 phone-landscape:py-1
            py-4 flex items-center justify-between
            shadow-lg
        '>

            {/* Logo */}
            <Link to={"/main"} className='flex items-center'>
                <img 
                    src={Logo}
                    alt='Logo'
                    className='
                        w-14 h-auto
                        phone-landscape:w-8
                    '
                />
            </Link>

            {/* Search bar */}
            <div className='
                flex items-center gap-3
                bg-white/10 backdrop-blur
                border border-white/20
                rounded-xl
                px-3 py-2
                flex-1 mx-4
                max-w-[180px]
                phone-landscape:max-w-[200px]
                phablet:max-w-[260px]
                tablet:max-w-[340px]
                laptop:max-w-md
            '>
                <FaSearch className='text-gray-300 text-lg' />
                <input 
                    type='text'
                    placeholder='Search...'
                    className='
                        flex-1 bg-transparent
                        text-white placeholder-gray-400
                        focus:outline-none
                        text-sm tablet:text-base
                    '
                />
            </div>

            {/* Right side */}
            <div className='flex gap-3 items-center'>
                <Link 
                    to={"/main"}
                    className='text-sm phone-landscape:text-xs'
                >
                    Login
                </Link>
                <Link to={"/main"}>
                    <img 
                        src={ShoppingChart}
                        alt='ShoppingChart'
                        className='
                            w-8 h-auto
                            phone-landscape:w-5
                        '
                    />
                </Link>
            </div>
        </nav>
    );
}