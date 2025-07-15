import React from 'react'
import Image from 'next/image'
import { FiCheckCircle } from 'react-icons/fi';



const LandingVThree = () => {
        return (
                <main className='md:-mt-[200px]'>
                        <div className="flex justify-center items-center flex-col md:flex-row mt-0 relative  min-h-screen bg-[#FFFFFF] overflow-hidden  md:px-16 py-0">


                                {/* Text Content */}
                                <div className="relative   text-black font-sans text-center mt-0 md:-mt-[20px] pt-[20px] md:pt-[200px] md:ml-[60px] flex-1 w-full max-w-2xl">
                                        <h1 className="relative z-[20] text-xl sm:text-l md:text-5xl lg:text-5xl font-bold leading-snug sm:leading-tight ">
                                                Choose Your Plan
                                        </h1>
                                        <p className="mt-4 text-base sm:text-lg md:text-xl">
                                                Whether you want to get organized,keep your personal life on track, or boost workplace productivity, Evernote has the
                                                rigth plan for you

                                        </p>
                                        {/* Element Background */}
                                        <div className=' hidden md:block'>

                                                <div className="absolute top-55  left-75 w-full flex justify-start z-[10] pointer-events-none ">
                                                        <Image
                                                                src="/Element.png"
                                                                alt="Element"
                                                                width={400}
                                                                height={800}
                                                                className="max-w-full h-auto"
                                                        />
                                                </div>
                                        </div>


                                </div>

                        </div>

                        {/*Code all card */}
                        <div className="flex flex-col md:flex-row md:gap-x-2 items-start ">
                                {/* Card 1 */}
                                <div className="max-w-sm mx-auto mt-2 md:mt-0 p-6 bg-white rounded-2xl shadow-lg
                                 border border-yellow-300 hover:bg-[#043873] hover:text-white hover:scale-105 transform transition duration-300">
                                        <div>
                                                <h1 className="text-xl font-semibold  mb-2">Free</h1>
                                                <p className='hover:text-amber-300'>$0</p>
                                                <p >Capture ideas and find them quickly</p>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>Sync unlimited devices</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>10 GB monthly uploads</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>200 MB max. note size</p>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                        <FiCheckCircle className="mt-1 mr-[10px] text-2xl" />
                                                        <p>Customize Home dashboard and access extra widgets</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>Connect primary Google Calendar account</p>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                        <FiCheckCircle className="mr-[8px] text-2xl" />
                                                        <p>Add due dates, reminders, and notifications to your tasks</p>
                                                </div>
                                                <button className="flex items-center bg-[#4F9CF9] text-white font-bold px-4 py-2 rounded-[10px] transition mt-[20px]">
                                                        Get Started
                                                </button>
                                        </div>
                                </div>

                                {/* Card 2 */}
                                <div className="max-w-sm mx-auto mt-2 md:mt-0 p-6 bg-white rounded-2xl shadow-lg 
                                border border-yellow-300 hover:bg-[#043873] hover:text-white hover:scale-105 transform transition duration-300">
                                        <div>
                                                <h1 className="text-xl font-semibold  mb-2">Personal</h1>
                                                <p className='hover:text-amber-300'>$11.99</p>
                                                <p >Keep home and family on track</p>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>Sync unlimited devices</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>10 GB monthly uploads</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>200 MB max. note size</p>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                        <FiCheckCircle className="mt-1 mr-[10px] text-2xl" />
                                                        <p>Customize Home dashboard and access extra widgets</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>Connect primary Google Calendar account</p>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                        <FiCheckCircle className="mr-[8px] text-2xl" />
                                                        <p>Add due dates, reminders, and notifications to your tasks</p>
                                                </div>
                                                <button className="flex items-center bg-[#4F9CF9] text-white font-bold px-4 py-2 rounded-[10px] transition mt-[20px]">
                                                        Get Started
                                                </button>
                                        </div>
                                </div>

                                {/* Card 3 */}
                                <div className="max-w-sm mx-auto mt-2 md:mt-0 p-6 bg-white rounded-2xl shadow-lg border
                                 border-yellow-300 hover:bg-[#043873] hover:text-white hover:scale-105 transform transition duration-300">
                                        <div>
                                                <h1 className="text-xl font-semibold  mb-2">Organization</h1>
                                                <p className='hover:text-amber-300' >$49.99</p>
                                                <p >Capture ideas and find them quickly</p>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>Sync unlimited devices</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>10 GB monthly uploads</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>200 MB max. note size</p>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                        <FiCheckCircle className="mt-1 mr-[10px] text-2xl" />
                                                        <p>Customize Home dashboard and access extra widgets</p>
                                                </div>

                                                <div className="flex items-center">
                                                        <FiCheckCircle className="mr-[10px]" />
                                                        <p>Connect primary Google Calendar account</p>
                                                </div>

                                                <div className="flex items-start gap-2">
                                                        <FiCheckCircle className="mr-[8px] text-2xl" />
                                                        <p>Add due dates, reminders, and notifications to your tasks</p>
                                                </div>
                                                <button className="flex items-center bg-[#4F9CF9] text-white font-bold px-4 py-2 rounded-[10px] transition mt-[20px]">
                                                        Get Started
                                                </button>
                                        </div>
                                </div>
                        </div>
                </main>
        )
}

export default LandingVThree
