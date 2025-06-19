import ProductsItems from './ProductsItems'
import SectionHeading from './SectionHeading'
import controlar from '../assets/controlar.png'
import keyborad from '../assets/keyboard.png'
import monitor from '../assets/monitor.png'
import chair from '../assets/chair.png'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Button from './Button'
import { Link } from 'react-router'

const FlashSales = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <Next_btn />,
        prevArrow: <Prev_btn />,
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
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false, // Hide arrows on mobile
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, // Hide arrows on mobile
                }
            }
        ]
    };
    
    return (
        <section className='pt-[70px] md:pt-[100px] lg:pt-[140px]'>
            <div className="container px-4 md:px-6 lg:px-8">
                <SectionHeading heading={"Flash Sales"} subHeading={"Categories"} counter={true} />
                <div className='grid grid-cols-1 items-center gap-[15px] md:gap-[20px] lg:gap-[30px] pt-6 md:pt-8 lg:pt-10' id='flash-sales'>
                    <Slider {...settings}>
                        <div className='px-2'>
                            <ProductsItems 
                                image={controlar} 
                                text={"HAVIT HV-G92 Gamepad"} 
                                price={"$120"} 
                                oldPrice={"$160"} 
                                discountParcent={"-40%"} 
                                discount={true} 
                                reting={"(88)"} 
                            />
                        </div>
                        <div className='px-2'>
                            <ProductsItems 
                                image={keyborad} 
                                text={"AK-900 Wired Keyboard"} 
                                price={"$960"} 
                                oldPrice={"$1160"} 
                                discountParcent={"-35%"} 
                                discount={true} 
                                reting={"(75)"} 
                            />
                        </div>
                        <div className='px-2'>
                            <ProductsItems 
                                image={monitor} 
                                text={"IPS LCD Gaming Monitor"} 
                                price={"$370"} 
                                oldPrice={"$400"} 
                                discountParcent={"-30%"} 
                                discount={true} 
                                reting={"(99)"} 
                            />
                        </div>
                        <div className='px-2'>
                            <ProductsItems 
                                image={chair} 
                                text={"S-Series Comfort Chair"} 
                                price={"$375"} 
                                oldPrice={"$400"} 
                                discountParcent={"-25%"} 
                                discount={true} 
                                reting={"(99)"} 
                            />
                        </div>
                    </Slider>
                </div>
                <div className='text-center pt-[35px] md:pt-[45px] lg:pt-[55px]'>
                    <Button TagName={Link} to='/products'>View All Products</Button>
                </div>
                <div className='w-full bg-black h-[1px] mt-[50px] md:mt-[65px] lg:mt-[80px]'></div>
            </div>
        </section>
    )
}

export const Next_btn = (props) => {
    const { onClick } = props;
    return (
        <button 
            className='arrow next-arrow size-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200 flex items-center justify-center' 
            onClick={onClick}
        >
            <FaArrowRight />
        </button>
    );
}

export const Prev_btn = (props) => {
    const { onClick } = props;
    return (
        <button 
            className='arrow prev-arrow size-[46px] rounded-full bg-[#F5F5F5] hover:bg-[#E5E5E5] transition-colors duration-200 flex items-center justify-center' 
            onClick={onClick}
        >
            <FaArrowLeft />
        </button>
    );
}

export default FlashSales