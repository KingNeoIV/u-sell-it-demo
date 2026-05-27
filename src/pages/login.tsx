import Background from "../assets/BackgroundImage.png"
import LOGO from "../assets/LOGO.png";
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="
            relative min-h-screen overflow-hidden 
            bg-no-repeat bg-cover bg-center bg-fixed 
            bg-slate-900 flex items-center justify-center
            phone-landscape:min-h-[430px]"
            style={{ backgroundImage: `url(${Background})` }}    
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Column container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Login Card */}
                <div className="relative z-10 bg-white/10  backdrop-blur-xl p-8 sm:p-12 md:p-16 lg:p-20 
                    rounded-3xl shadow-xl text-white border border-white/20 phone-landscape:p-6">
                    
                    {/* Flex container for left + right */}
                    <div className="flex flex-col md:flex-row items-center gap-10
                        phone-landscape:flex-row phone-landscape:gap-4">

                        {/* Left: Logo */}
                        <div className="flex-shrink-0">
                            <img 
                                src={LOGO} 
                                alt="Logo" 
                                className="w-40 md:w-56 lg:w-80 h-auto object-cover
                                    phone-landscape:w-42" />
                        </div>

                        {/* Right: Form */}
                        <div className="flex flex-col gap-4 w-full">

                            {/* Email */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-white/80">Email</label>
                                <input
                                    type="email"
                                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    placeholder="your@email.com" 
                                />
                            </div>
                            
                            {/* Password */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-white/80">Password</label>
                                <input 
                                    type="password"
                                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    placeholder="********"/>
                            </div>

                            {/* Button */}
                            <button className="mt-2 bg-purple-600 hover:bg-purple-700 transition text-white py-2 rounded-lg font-semibold">
                                Login
                            </button>
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="
                        w-full flex justify-end px-10
                        phone-landscape:px-10 
                        phone-landscape:mt-1
                    ">
                        <button className="text-lg text-purple-300 hover:text-purple-400 underline">
                            <Link
                                to={"/resetpassword"}
                            >
                                Forgot Password?
                            </Link>
                        </button>
                    </div>

                </div>

                {/* Registration Button */}
                <div className="relative z-10 mt-4 md:mt-6 flex justify-center gap-x-2">
                    <div className="text-white text-lg">
                        Don't have an account?
                    </div>
                    <Link 
                        to="/signup"
                        className="text-lg text-purple-300 hover:text-purple-400 underline
                    ">
                        Sign up!        
                    </Link>
                </div>

            </div>
        </div>
    );
}