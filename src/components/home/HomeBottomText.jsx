import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 text-white'>

      <p className='absolute lg:text-sm text-[12px] lg:w-80 w-70 right-0 lg:bottom-40 bottom-35 font-[font1] p-2 lg:leading-relaxed leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>

      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-4 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to={'/projects'}>Projects</Link>
      </div>
      
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-25 flex items-center px-4 lg:px-10 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to={'/agency'}>Agency</Link>
      </div>
    </div>
  )
}

export default HomeBottomText