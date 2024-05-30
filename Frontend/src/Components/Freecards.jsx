import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios'

function Freecards() {
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
    const filterData = book.filter((data) => data.category === 'Free'); //3 = means check data type as well as data
    var settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024, //breakpoint tells the settings if device screen size is 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className='maxwidth-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='text-2xl font-bold py-2'>Free Books</h1>
                    <p className=''>Here are the range of free books available. Click <a href="/allbooks"><u className='text-blue-500'>here</u></a> to check out other books</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {/* <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                        <div>
                            <h3>7</h3>
                        </div>
                        <div>
                            <h3>8</h3>
                        </div> */}
                        {filterData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freecards