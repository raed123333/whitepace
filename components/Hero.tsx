import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
        return (
                <main>
                        <div className="flex flex-col md:flex-row items-center relative w-full min-h-screen bg-[#043873] overflow-hidden px-4 md:px-16 py-10">

                                {/* Vector Background */}
                                <div className="absolute top-40 left-0 w-full flex justify-center z-[10] pointer-events-none">
                                        <Image
                                                src="/Vector.png"
                                                alt="vector"
                                                width={2000}
                                                height={1000}
                                                className="max-w-full h-auto"
                                        />
                                </div>

                                {/* Text Content */}
                                <div className="relative z-[20] text-white font-sans text-left mt-0 md:-mt-[240px] pt-[120px] md:pt-[200px] md:ml-[60px] flex-1 w-full max-w-2xl">
                                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight">
                                                Get More Done with <br /> <span>Whitepace</span>
                                        </h1>
                                        <p className="mt-4 text-base sm:text-lg md:text-xl">
                                                Project management software that enables your teams to collaborate, plan,
                                                analyze and manage everyday tasks.
                                        </p>
                                        <button className="flex items-center bg-[#4F9CF9] text-white font-bold px-4 py-2 rounded-[10px] transition mt-[20px]">
                                                Try Whitepace free <FaArrowRight className="ml-2" />
                                        </button>
                                </div>

                                {/* Responsive Image */}
                                <div className="relative z-[20] mt-10 md:mt-0 flex justify-center md:justify-end flex-1 w-full">
                                        <Image
                                                src="/Imagecontainer.png"
                                                alt="image"
                                                width={600}
                                                height={600}
                                                className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
                                        />
                                </div>
                        </div>
                </main>
        );
};

export default Hero;
