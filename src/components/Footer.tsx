import NeoIVTech from '../assets/NeoIVLogoTech.png';
import Logo from '../assets/LOGO.png';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white border-t border-white/10 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
    
                {/* Left: u-sell-it */}
                <div className='
                    flex flex-col gap-4
                    items-center text-center
                    phone-landscape:gap-2
                    phone-landscape:items-center
                    phone-landscape:text-center
                '>

                    <div className='
                        flex items-center gap-4
                        phone-landscape:flex-col
                        phone-landscape:gap-1
                    '>

                        <img 
                            src={Logo} 
                            alt="u-sell-it Logo" 
                            className="
                                h-24 w-auto drop-shadow-lg 
                                phone-landscape:h-24 lg:h-28
                            " 
                        />

                        <h3 className='text-xl font-semibold tracking-wide phone-landscape:text-ls'>
                            u-sell-it (demo)
                        </h3>

                    </div>

                    {/* Description */}
                    <p className='
                        text-white/70 leading-relaxed text-sm max-w-sm
                        phone-landscape:max-w-xs
                        phone-landscape:text-center    
                    '>
                        A modern marketplace application built with Reach and Tailwind,
                        soon expanding into a full drop-shipping service platform.      
                    </p>

                </div>

                {/* Center Row Contact / Developer Info */}
                <div className='
                    flex flex-col gap-3 text-sm text-white/80
                    items-center text-center
                    phone-landscape:items-center
                    phone-landscape:text-center
                    phone-landscape:gap-2    
                '>

                    <h3 className='text-lg font-semibold text-white tracking-wide mb-1 phone-landscape:text-base'>
                        Developer Info
                    </h3>

                    <div className='flex flex-col gap-1 phone-landscape:gap-0'>
                        <span className='font-medium text-white'>Designer:</span>
                        <span>Michael Rios</span>
                    </div>

                    <div className='flex flex-col gap-1 phone-landscape:gap-0'>
                        <span className='font-medium text-white'>GitHub:</span>
                        <a
                            href='https://github.com/KingNeoIV'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-purple-300 hover:text-purple-400 underline'
                        >
                            KingNeoIV
                        </a>
                    </div>

                    <div className='flex flex-col gap-1 phone-landscape:gap-0'>
                        <span className='font-medium text-white'>Call:</span>
                        <span>1 (361)-363-6781</span>
                    </div>

                </div>

                {/* Right: NeoIV Tech Solutions */}
                <div className='
                    flex flex-col gap-4
                    items-center text-center
                    phone-landscape:gap-2
                    phone-landscape:items-center
                    phone-landscape:text-center
                '>

                    <div className='
                        flex flex-col gap-2
                        phone-landscape:gap-1
                        phone-landscape:items-center
                        phone-landscape:text-center
                    '>

                        <a
                            href='https://michaelrios.dev'
                            target='_blank'
                            rel='noopener referrer'    
                        >
                            <img 
                                src={NeoIVTech} 
                                alt="NeoIVTech Logo" 
                                className="
                                    h-20 w-auto drop-shadow-lg
                                    phone-landscape:h-14
                                    md:h-16
                                " 
                            />
                        </a>

                        <h3 className='
                            text-2xl font-semibold tracking-wide
                            phone-landscape:text-lg
                        '>
                            NeoIV Tech Solutions
                        </h3>

                    </div>

                    <p className='
                        text-white/70 leading-relaxed text-sm max-w-md
                        phone-landscape:max-w-xs
                        phone-landscape:text-center
                    '>
                        Designed and developed by Michael Rios, NeoIV Tech Solutions.
                        Visit my personal website at michaelrios.dev to explore more
                        projects, services and custom software solutions.
                    </p>

                </div>

            </div>

            <div className='mt-12 text-center text-white/40 text-s tracking-wider'>
                © {new Date().getFullYear()} u-sell-it & NeoIV Tech Solutions - All Rights Reserved.
            </div>
        </footer>
    )
}