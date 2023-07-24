import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import Work from './Work'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#000000]'>

            {/* container */}
            <div className='max-w-[1000px] mx-auto flex px-8 flex-col justify-center h-full'>
                <p className='text-pink-500'>Hi, my name is</p>

                {/* name */}
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>
                    <TypeAnimation
                        sequence={[
                            'Farhad.',
                            1000,
                            '',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-400'>I am a Full Stack Developer</h2>
                <p className='text-gray-400 py-4 max-w-[700px] hover:text-pink-500'>I am a Full Stack Developer with 1 years of experience. I have a passion for web development and love to create web applications.</p>
                <div>

                    {/* view project button */}
                    <div>
                        {/* Your other content */}
                        <Link
                            activeClass="active"
                            to="work"  // Use the ID of the section you want to scroll to
                            spy={true}
                            smooth={true}
                            offset={-70} // You can adjust this value to offset the scroll position
                            duration={500} // Scroll duration in milliseconds
                        >
                            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500">
                                View Projects
                                <span className='hover:rotate-90 duration-300'>
                                    <HiArrowNarrowRight className='ml-3' />
                                </span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home