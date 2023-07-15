import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto flex px-8 flex-col justify-center h-full'>
                <p className='text-[#7B8D01]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>Farhad</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I am a Full Stack Developer</h2>
                <p className='text-gray-400 py-4 max-w-[700px] hover:text-[#7B8D01]'>I am a Full Stack Developer with 1 years of experience. I have a passion for web development and love to create web applications.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7B8D01] hover:border-[#7B8D01]">
                        View Projects
                        <span className='hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Home