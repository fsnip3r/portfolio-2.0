import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/880664d6-a2a5-4581-af7f-53cc9db025d9" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#7B8D01] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4 hover:text-[#7B8D01]'>Submit the form below for any enquiries</p>
                </div>
                <input className='bg-[#ccd6f6] p-2 rounded' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] rounded' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 rounded' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#7B8D01] hover:border-[#7B8D01] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact