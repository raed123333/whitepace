import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const LandingVFour = () => {
        return (
                <main>
                        <div className="relative w-full min-h-screen bg-[#043873] overflow-hidden px-4 md:px-16 py-10 flex items-center justify-center">

                                {/* BACKGROUND Background */}
                                <div className="absolute top-40 left-0 w-full flex justify-start z-[10] pointer-events-none">
                                        <Image
                                                src="/BACKGROUND.png"
                                                alt="BACKGROUND"
                                                width={500}
                                                height={1000}
                                                className="max-w-full h-auto"
                                        />
                                </div>

                                {/* Text Content */}
                                <div className="relative z-20 text-white font-sans text-center w-full max-w-2xl px-4">

                                        <h1 className=" relative z-[20] text-xl sm:text-4xl md:text-3xl lg:text-[40px] font-bold leading-snug sm:leading-tight">
                                                Your work, everywhere you are
                                        </h1>

                                        <p className="mt-4 text-base sm:text-lg md:text-xl">
                                                Access your notes from your computer, phone or tablet by synchronishing with various services,
                                                including whitepace, Dropbox and OneDrive. The app is available on Windows,mocOs,Linux,Android and ios. A terminal
                                                app is also available!
                                        </p>

                                        {/* Element Background (Optional Visuals) */}
                                        <div className="hidden md:block">
                                                <div className="absolute top-9 left-120 w-full flex justify-start z-[10] pointer-events-none">
                                                        <Image
                                                                src="/Element@2x.png"
                                                                alt="Element"
                                                                width={200}
                                                                height={500}
                                                                className="max-w-full h-auto"
                                                        />
                                                </div>
                                        </div>

                                        <button className="flex items-center justify-center bg-[#4F9CF9] text-white font-bold px-4 py-2 rounded-[10px] transition mt-6 mx-auto">
                                                Try Taskey <FaArrowRight className="ml-2" />
                                        </button>

                                </div>
                        </div>
                </main>
        )
}

export default LandingVFour
