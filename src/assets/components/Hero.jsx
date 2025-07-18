import React from 'react'
import MainHeading from './heading/MainHeading'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 text-center border-b border-gray-200" id='hero'>
  <div>
    <h1 className='text-[80px] text-black font-semibold'>
        Frontend Developer <br /><span className='text-[#1d6aff]'>React</span> Specialist
    </h1>
  </div>

  <div className="max-w-2xl">
    <p className="text-center font-[Outfit] mt-11 leading-[1.4] text-[19px] text-gray-500 text-lg">
      I'm a passionate Frontend developer and have crafted 20+ websites
      with modern UI & UX. I blend creativity with code to build seamless
      digital experiences.
    </p>
  </div>

  <div className="mt-6 flex gap-4">
    <button
      type="button"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
    >
      View Projects
    </button>
    <button
      type="button"
      className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
    >
      Contact Me
    </button>
  </div>
</div>
  )
}

export default Hero