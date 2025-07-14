"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
                <nav className='text-[#FFFFFF] px-4 md:px-16 lg:px-24 fixed top-0 w-full z-50 bg-[#043873] shadow'>
                        <div className="flex items-center justify-between py-4">
                                {/* Logo + Name */}
                                <div className="flex items-center gap-3">
                                        <Image src="/logoIcon.png"
                                                alt='logo'
                                                width={40}
                                                height={40} />

                                        <h1 className="text-xl font-bold">Whitepace</h1>
                                </div>


                                {/* Mobile Hamburger */}
                                <div className="lg:hidden">
                                        <button onClick={() => setIsOpen(!isOpen)}>
                                                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                                        </button>
                                </div>


                                {/* Desktop Menu */}
                                <div className="hidden lg:flex items-center space-x-6 font-semibold ml-10">
                                        <select className="border-none outline-none bg-transparent">
                                                <option>Products</option>
                                        </select>
                                        <select className="border-none outline-none bg-transparent">
                                                <option>Solutions</option>
                                        </select>
                                        <select className="border-none outline-none bg-transparent">
                                                <option>Resources</option>
                                        </select>
                                        <select className="border-none outline-none bg-transparent">
                                                <option>Pricing</option>
                                        </select>

                                </div>

                                {/* Buttons */}
                                <div className="hidden show-at-1152 ml-6 gap-4">
                                        <button className="flex items-center bg-[#FFE492] hover:bg-blue-700 text-[#043873] font-bold px-4 py-2 rounded-[10px] transition">
                                                Login
                                        </button>
                                        <button className="flex items-center bg-[#4F9CF9] text-[#FFFFFF] font-bold px-4 py-2 rounded-[10px] transition border border-black">
                                                Try Whitepace free <FaArrowRight className="ml-2" />
                                        </button>
                                </div>
                        </div>


                        {/* Mobile Menu */}
                        {isOpen && (
                                <div className="lg:hidden flex flex-col gap-4 pb-4 px-4">
                                        <select className="border border-gray-300 rounded px-2 py-1">
                                                <option>Products</option>
                                        </select>
                                        <select className="border border-gray-300 rounded px-2 py-1">
                                                <option>Solutions</option>
                                        </select>
                                        <select className="border border-gray-300 rounded px-2 py-1">
                                                <option>Resources</option>
                                        </select>
                                        <select className="border border-gray-300 rounded px-2 py-1">
                                                <option>Pricing</option>
                                        </select>


                                        <div className="flex flex-col gap-3 mt-4">
                                                <button className="bg-[#FFE492] text-[#FFFFFF] font-bold px-4 py-2 rounded-[10px] transition ">
                                                        Login
                                                </button>
                                                <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-full transition">
                                                        Try whitepace free <FaArrowRight className="ml-2" />
                                                </button>
                                        </div>
                                </div>
                        )}
                </nav>
        );
};

export default NavBar