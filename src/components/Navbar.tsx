import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='
            bg-slate-700 text-white px-6
            py-4 flex items-center justify-between
            shadow-lg
        '>
            <Link to={"/dashboard"} className='font-bold text-xl'>
                u-sell-it
            </Link>

            <div className='flex gap-6'>
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/dashboard"}>Profile</Link>
                <Link to={"/dashboard"}>Inventory</Link>
            </div>
        </nav>
    );
}