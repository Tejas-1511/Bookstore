import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'

function Allbooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getBook()
  }, []);
 
  const filterData = book.filter((data) => data.category === 'Paid');
  return (
    <div className='min-h-screen'>
      <div className='maxwidth-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='p-28 item-center text-center justify-center'>
          <h1 className='text-2xl font-bold md:text-3xl'>We're Delighted to <span className='text-pink-500'>have you :)</span></h1>
          <p className='mt-10'>Here are range of good quality books of various genres available at a very affordable prices</p>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Allbooks