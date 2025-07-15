import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa';

const LandingVTwo = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center relative w-full min-h-screen bg-[#FFFFFF] overflow-hidden px-4 md:px-16 py-10">

        {/* Responsive Image */}
        <div className="relative z-[20] mt-10 md:mt-0 flex justify-center md:justify-end flex-1 w-full">
          <Image
            src="/Imagecontainer.png"
            alt="Imagecontainer"
            width={500}
            height={500}
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto"
          />
        </div>



        {/* Text Content */}
        <div className="relative  text-black font-sans text-left mt-0 md:-mt-[240px] pt-[120px] md:pt-[200px] md:ml-[60px] flex-1 w-full max-w-2xl">
          <h1 className="relative z-[20] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight ">
            Customise it to<br /><span>you needs</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl">
            Customise the app with plugins, custom themes and multiple text editors (Rich
            text or Markdown).Or create your own scripts and plugins using the Extension API.

          </p>
          {/* Element Background */}
          <div className=' hidden md:block'>

            <div className="absolute top-77  left-0 w-full flex justify-start z-[10] pointer-events-none ">
              <Image
                src="/Element.png"
                alt="Element"
                width={400}
                height={800}
                className="max-w-full h-auto"
              />
            </div>
          </div>

          <button className="flex items-center bg-[#4F9CF9] text-white font-bold px-4 py-2 rounded-[10px] transition mt-[20px]">
            Let&apos;s Go <FaArrowRight className="ml-2" />
          </button>
        </div>

      </div>
    </main>
  )
}

export default LandingVTwo



