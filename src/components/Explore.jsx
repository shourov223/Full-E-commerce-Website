import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'
import Slider from 'react-slick'
import React, { useEffect, useState } from 'react'
import ProductsItems from './ProductsItems'
import Button from './Button'
import { Link } from 'react-router'

const Explore = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])

    const sliderRef = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
            <div className="container">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <SectionHeading heading={"Explore Our Products"} subHeading={"Our Products"} />
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                            className='w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200 flex items-center justify-center'
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <FaArrowLeft className="text-sm sm:text-base" />
                        </button>
                        <button
                            className='w-[40px] h-[40px] sm:w-[46px] sm:h-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200 flex items-center justify-center'
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <FaArrowRight className="text-sm sm:text-base" />
                        </button>
                    </div>
                </div>
                <div className='pt-4 sm:pt-6 md:pt-8 lg:pt-10' id='category-slider'>
                    <Slider {...settings} ref={sliderRef}>
                        {products.map((items) => (
                            <ProductsItems image={items.thumbnail} text={items.title} discountParcent={items.discountPercentage} discount={true} reting={items.rating} price={items.price} key={items.id} />
                        ))}
                    </Slider>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-12 lg:pt-[60px]'>
                    {products.slice(0, 4).map((items) => (
                        <ProductsItems image={items.thumbnail} text={items.title} discountParcent={items.discountPercentage} discount={true} reting={items.rating} price={items.price} key={items.id} />
                    ))}
                </div>
                <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-[76px] text-center'>
                    <Button TagName={Link} to="/productpage">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Explore