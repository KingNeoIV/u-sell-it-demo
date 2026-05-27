import Background from "../assets/BackgroundImage.png";
import ResetPassImage from "../assets/ResetPassword.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ResetModal from "../components/ResetModal";

export default function ResetPassword() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="
            relative min-h-screen overflow-hidden
            bg-no-repeat bg-cover bg-center bg-fixed
            bg-slate-900 flex items-center justify-center
            phone-landscape:min-h-[430px]
            phone-landscape:py-24"
            style={{ backgroundImage: `url(${Background})`}}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Column container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Reset Card */}
                <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 sm:p-12 md:p-16 lg:p-20
                    rounded-3xl shadow-xl text-white border border-white/20 phone-landscape:p-6">

                    {/* Flex container for top and bottom */}
                    <div className="flex flex-col items-center gap-3">

                        {/* Top: Form */}
                        <div className="flex flex-col gap-4 max-w-xs items-center">
                            <h3 className="text-2xl font-bold">Forgot your password?</h3>
                            <p className="text-center text-white/80 leading-relaxed">
                                Enter your email address and we'll send you 
                                a link to reset your password.
                            </p>

                            <input 
                                type="email"
                                className="
                                px-4 py-2 rounded-lg bg-white/10 border border-white/20
                                text-white placeholder-white/40 focus:outline-none focus:ring-2
                                focus:ring-purple-400 w-full
                                "
                                placeholder="📩 Enter your email"
                            />

                        </div>

                        {/* Bottom: Form */}
                        <button onClick={() => setShowModal(true)}
                            className="
                                w-full max-w-xs py-2 mt-2 
                                bg-purple-600 hover:bg-purple-700 transition 
                                text-white rounded-lg font-semibold

                        ">
                            Send Reset Link
                        </button>

                        {/* Back to Login or Register */}
                        <div className="flex flex-row gap-4 items-center text-sm text-white/70">

                            <div className="flex justify-start">

                                <Link 
                                    to={"/"}
                                    className="text-purple-300 hover:text-purple-400 transition 
                                        underline-offset-2 hover:underline "    
                                >
                                    ← Back to Login
                                </Link>
                            
                            </div>

                            <p className="text-white/40 px-2">——— or ———</p>
                            <Link 
                                to={"/signup"}
                                className="text-purple-300 hover:text-purple-400 transition 
                                    underline-offset-2 hover:underline"    
                            >
                                Register →
                            </Link>
                        </div>

                        <img 
                            src={ResetPassImage}
                            alt="resetPassImage"
                            className="
                                w-64 md:w-56 lg:w-80 h-auto object-cover
                                phone-landscape:w-42
                            "
                        />
                        
                    </div>
                </div>
            </div>

            <ResetModal 
                show={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
}