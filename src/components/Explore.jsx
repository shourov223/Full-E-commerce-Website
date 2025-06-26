
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
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
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
        <section className="pt-12 md:pt-16 lg:pt-20">
            <div className="container">
                <div className="flex items-center justify-between">
                    <SectionHeading heading={"Browse By Category"} subHeading={"Categories"} />
                    <div className="flex items-center gap-2">
                        <button
                            className='size-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200 flex items-center justify-center'
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            className='size-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200 flex items-center justify-center'
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <div className='pt-6 md:pt-8 lg:pt-10' id='category-slider'>
                    <Slider {...settings} ref={sliderRef}>
                        {products.map((items) => (
                            <ProductsItems image={items.thumbnail} text={items.title} discountParcent={items.discountPercentage} discount={true} reting={items.rating} price={items.price} key={items.id} />
                        ))}
                    </Slider>
                </div>
                <div className='grid grid-cols-4 pt-[60px]'>
                    {products.slice(0, 4).map((items) => (
                        <ProductsItems image={items.thumbnail} text={items.title} discountParcent={items.discountPercentage} discount={true} reting={items.rating} price={items.price} key={items.id} />
                    ))}
                </div>
                <div className='mt-[76px] text-center'>
                    <Button TagName={Link} to="/productpage">
                        View All Products
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Explore
