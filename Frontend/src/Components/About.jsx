import React from 'react'

function About() {
    return (
        <div>
            <div className='maxwidth-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col justify-center md:flex-row'>
                <div className="w-[600px] pt-10">
                    <div className=' space-y-12  px-3 py-12 h-[600px]'>
                        <h1 className='text-4xl font-bold '>Want to Know about us ? <span className='text-pink-500 '>Here you GO</span></h1>
                        <p className='text-xl'>Welcome to Book Haven, your cozy retreat for all things literary! Nestled in the heart of downtown, we are a community-centered bookstore dedicated to fostering a love for reading and learning. At Book Haven, you’ll discover a carefully curated selection of books across genres, from timeless classics to contemporary bestsellers, ensuring something for every reader. Our knowledgeable and passionate staff are always ready to offer personalized recommendations, helping you find the perfect book. Beyond just a bookstore, we host a variety of events, including author signings, book clubs, and children’s story hours, creating a vibrant space for book lovers of all ages. Come in, explore, and let your next adventure begin at Book Haven, where every book tells a story.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 order 1 md:order-2'>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-book-cartoon-illustration_52683-130773.jpg" alt="" className=' px-20 py-20 w-75' />
                </div>
            </div>
        </div>
    )
}

export default About