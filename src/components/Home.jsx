import React from 'react'

const Home = () => {
    return (
      <div name='home' className='w-full h-screen bg-[#0a192f] flex flex-row'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-4xl font-bold text-[#ccd6f6]'>
            KEVIN SHAH
          </h1>
          <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer. Currently, I’m focused on
            building responsive full-stack web applications.
          </p>
        </div>
    </div>
  )
}

export default Home