import { useEffect, useState } from "react";

interface ResetModalProps {
    show: boolean;
    onClose: () => void;
}

export default function ResetModal({ show, onClose }: ResetModalProps) {
    const [email, setEmail] = useState("");
    const [countdown, setCountdown] = useState(45);

    // Countdown timer
    useEffect(() => {
        if (!show) return;

        setCountdown(45); // reset timer each time modal opens

        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    // onClose();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [show]);

    if (!show) return null;

    return (
        <div className="
            fixed inset-0 z-50 flex items-center justify-center
        ">
            {/* Dark overlay */}
            <div className="
                absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Column container */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Modal Card */}
                <div className="
                    relative z-10 bg-white/10 backdrop-blur-xl p-8
                    sm:p-12 md:p-16 lg:p-20 rounded-3xl shadow-xl text-white
                    border border-white/20 phone-landscape:p-6    
                ">
                    {/* Flex container for top (left) and bottom (right) */}
                    <div className="
                        flex flex-col md:flex-row lg:flex-col items-center gap-3    
                        phone-landscape:flex-row phone-landscape:gap-4    
                    ">

                        {/* Top (left) */}
                        <div className="flex flex-col gap-4 md:max-w-xs lg:max-w-xs items-center">

                            <h3 className="text-2xl font-bold">This is a simulation</h3>

                            <p className="text-center text-white/80">
                                If this were a live system, a reset link or verification code 
                                would be sent to the phone number on file. We will simulate
                                a password reset using the Platzi Fake Store API.
                            </p>
                        </div>

                        {/* Bottom (right) */}
                        <div className="flex flex-col gap-4">

                            <p className="text-center phone-landscape:text-left text-lg text-white/80 mb-6 leading-relaxed font-bold">
                                Enter your new password to continue.
                            </p>

                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your password"
                                className="
                                    w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20
                                    text-white placeholder-white/40 focus:outline-none focus:ring-2
                                    focus:ring-purple-400 mb-4
                                "
                            />

                            {/* Countdown */}
                            <div className="flex flex-row items-center justify-center phone-landscape:justify-start gap-4 pb-3">
                                <p className="text-white/80">Time remaining:</p>
                                <p className="text-purple-300">{countdown}s</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        {/* Buttons */}
                        <div className="flex flex-row gap-3">
                            <button
                                onClick={onClose}
                                className="
                                    w-full py-2 bg-purple-600 hover:bg-purple-700
                                    rounded-lg font-semibold transition
                                "
                            >
                                Back
                            </button>
                            
                            <button className="
                                    w-full py-2 bg-purple-600 hover:bg-purple-700
                                    rounded-lg font-semibold transition
                                "
                            >
                                Enter
                            </button>                    
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
}