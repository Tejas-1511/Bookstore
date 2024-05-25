import React from 'react'
import book3 from '../../public/book3.png'

function Banner() {
    return (
        <>
            <div className='maxwidth-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 '>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Welcome To the Place for Learning something <span className='text-pink-500 '>New Everyday !!!</span></h1>
                        <p className='text-xl'>Reading books enhances knowledge, stimulates imagination, reduces stress, improves vocabulary, and strengthens cognitive abilities, providing a valuable escape and enriching overall well-being.</p>
                        <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow " placeholder="Please Enter your Email to Login"/>
                    </label>
                    </div>
                    <button className="btn btn-secondary mt-6 px-5">Secondary</button>
                </div>
                <div className='w-full md:w-1/2 order 1 md:order-2'>
                 <img src={book3} alt=""  className=' px-20 py-20 w-75'/>    
                </div>
            </div>
        </>
        /*line 7,8- 1/2 means 50%
        line 8 order tells you the order of the visuals*/
    )
}

export default Banner