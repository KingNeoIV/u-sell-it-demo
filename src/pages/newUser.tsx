import Background from '../assets/BackgroundImage.png'
import LOGO from '../assets/LOGO.png';
import { Link } from 'react-router-dom'

export default function NewUser() {
    return (
        <div className="
            relative min-h-screen overflow-hidden 
            bg-no-repeat bg-cover bg-center bg-fixed 
            bg-slate-900 flex items-center justify-center
            phone-landscape:min-h-[430px]"
            style={{ backgroundImage: `url(${Background })`}}
        >

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/40'></div>

            {/* Column container */}
            <div className='relative z-10 flex-col items-center px-4 py-10'>

                {/* Registration Card */}
                <div className='
                    relative z-10 bg-white/10 backdrop-blur-xl 
                    p-8 sm:p-10 md:p-12 lg:p-20 
                    rounded-3xl shadow-xl text-white 
                    border border-white/20 
                    phone-landscape:p-6
                '>

                    {/* Flex container for left + right */}
                    <div className='
                        flex flex-col md:flex-row items-center 
                        gap-10 phone-lanscape:flex-row md:items-start
                        phone-landscape:gap-4 phone-landscape:flex-row
                    '>

                            {/* Left: logo + mission */}
                            <div className='
                                flex flex-col items-center
                                text-center gap-4 
                                md:items-center md:text-center
                                phone-landscape:items-center
                                phone-landscape:text-center
                            '>
                                
                                <img
                                    src={LOGO}
                                    alt='Logo'
                                    className='
                                        w-60 sm:w-40 md:w-56 lg:w-72 h-auto 
                                        md:pt-20
                                        object-contain lg:pt-20
                                        phone-landscape:w-60
                                        phone-landscape:pt-20
                                    ' 
                                />

                                <p className='text-white/80 max-w-sm leading-relaxed'>
                                    Create your u-sell-it account and open your 
                                    personal storefront. A fast, secure signup 
                                    gets you selling in minutes.
                                </p>

                            </div>

                            {/* Right: Registration Form */}
                            <div className='
                                flex flex-col gap-5 w-full
                            '>

                                {/* User Name */}
                                <div className='flex flex-col gap-5'>

                                    <div className='flex flex-col gap-1'>
                                        <label className='text-lg text-white/80'>First Name:</label>
                                        <input 
                                            type='name'
                                            placeholder='First Name'
                                            className='
                                                w-full px-4 py-2 rounded-lg bg-white/10 border 
                                                border-white/20 text-white 
                                                placeholder-white/40 focus:outline-none focus:ring-2 
                                                focus:ring-purple-400
                                            '
                                        />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label className='text-lg text-white/80'>Last Name:</label>
                                        <input 
                                            type='name'
                                            placeholder='Last Name'
                                            className='
                                                w-full px-4 py-2 rounded-lg bg-white/10 border 
                                                border-white/20 text-white 
                                                placeholder-white/40 focus:outline-none focus:ring-2 
                                                focus:ring-purple-400
                                            '
                                        />
                                    </div>

                                </div>

                                {/* Email */}
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg text-white/80'>Email:</label>
                                    <input 
                                        type='email'
                                        placeholder='your@email.com'
                                        className='
                                            w-full px-4 py-2 rounded-lg bg-white/10 border
                                            border-white/20 text-white
                                            placeholder-white/40 focus:outline-none focus:ring-2
                                            focus:ring-purple-400
                                        '
                                    />
                                </div>

                                {/* Password */}
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg text-white/80'>Password:</label>
                                    <input 
                                        type='password'
                                        placeholder='********'
                                        className='
                                            w-full px-4 py-2 rounded-lg bg-white/10 border
                                            border-white/20 text-white
                                            placeholder-white/40 focus:outline-none focus:ring-2
                                            focus:ring-purple-400
                                        '
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className='flex flex-col gap-1'>
                                    <label className='text-lg text-white/80'>Confirm Password:</label>
                                    <input 
                                        type='confirm password'
                                        placeholder='********'
                                        className='
                                            w-full px-4 py-2 rounded-lg bg-white/10 border
                                            border-white/20 text-white
                                            placeholder-white/40 focus:outline-none focus:ring-2
                                            focus:ring-purple-400
                                        '
                                    />
                                </div>

                            </div>

                        {/* End of Flex Container for left + right */}
                    </div>

                    {/* Registration Button + Login */}
                    <div className='
                        flex flex-col items-center gap-4 mt-6
                        phone-landscape:flex-row 
                        phone-landscape:items-center
                        phone-landscape:justify-between
                        phone-landscape:gap-10
                        md:flex-row md:justify-between 
                        md:items-center
                    '>
                        {/* Login Text */}
                        <p className='
                            text-center text-white/80 
                            lg:whitespace-nowrap md:whitespace-nowrap
                            phone-landscape:text-left
                            phone-landscape:whitespace-nowrap
                        '>
                            Already have an account?
                            <Link 
                                to="/"
                                className='ml-2 text-lg text-purple-300 hover:text-purple-400 underline'
                            >
                                Login
                            </Link>
                        </p>

                        {/* Register Button Wrapper */}
                        <div className='
                            w-full flex justify-center
                            phone-landscape:justify-center
                            md:justify-end
                        '>
                        
                            <button className='
                                w-full py-3 bg-purple-800 hover:bg-purple-600
                                text-white font-bold rounded-lg transition 
                                duration-300 md:px-10 md:py-3
                                phone-landscape:w-full
                                phone-landscape:px-8
                                phone-landscape:py-2
                            '>
                                Register
                            </button>

                        </div>

                        {/* End of Registration Button + Login */}
                    </div>

                    {/* End of Register Card */}
                </div>

                {/* End of Column Container */}
            </div>

            {/* End of Main Container */}
        </div>
    );
}