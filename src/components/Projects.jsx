import React from 'react'
import Bms from '../assets/Bms.PNG'
import Crypto from '../assets/Crypto.PNG'

const Projects = () => {
    return (
        <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                    <p className='py-6'>// Check out some of my projects
                    </p>
                </div>
                {/* Container for projects */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{backgroundImage:`url(${Bms})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'> 
                            <span className='text-2xl font-bold text-white tracking-wider'>Full stack project</span>
                            <div className='pt-8 text-center'> 
                                <a href='https://bmsc.vercel.app/' target='_blank'>
                                    <button className='px-4 text-center rounded-lg py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/KEVINs121998/bmsfrontend" target='_blank'>
                                    <button className='px-4 text-center rounded-lg py-3 m-2 bg-white font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage:`url(${Crypto})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}

                        <div className='opacity-0 group-hover:opacity-100'> 
                            <span className='text-2xl font-bold text-white tracking-wider'> Frontend Project</span>
                            <div className='pt-8 text-center'> 
                                <a href='https://cryptoapp-taupe.vercel.app/' target='_blank'>
                                    <button className='px-4 text-center rounded-lg py-3 m-2 bg-white font-bold text-lg'>Demo</button>
                                </a>
                                <a href='https://github.com/KEVINs121998/cryptoapp' target='_blank'>
                                    <button className='px-4 text-center rounded-lg py-3 m-2 bg-white font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
