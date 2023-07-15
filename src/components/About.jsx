import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-400'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className="text-4xl font-bold inline border-b-4 border-[#7B8D01]">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p className='text-white'>Hi. I'm Farhad, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='hover:text-[#7B8D01]'>I am an amazing web developer with a passion for creating exceptional online experiences. With a keen eye for detail and a deep understanding of the latest web technologies, I bring a unique blend of creativity and technical expertise to every project. My commitment to delivering high-quality websites is unwavering, and I take great pride in crafting pixel-perfect designs that not only captivate users but also provide seamless functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;