import { SlArrowRight } from 'react-icons/sl'
import Slider from "react-slick";
import imgaeOne from "../assets/image-one.jpg"
import { Link } from 'react-router';
import { FaArrowRightLong } from 'react-icons/fa6';
import brandLogo from '../assets/apple.svg'

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    };
    
    return (
        <>
            <section>
                <div className="container">
                    <div className='lg:grid lg:grid-cols-[233px_1fr] pt-6 lg:pt-10 gap-4'>
                        {/* Categories Menu - Hidden on mobile, shown on desktop */}
                        <div className='hidden lg:block pr-4 border-r'>
                            <ul className='flex flex-col gap-4'>
                                <ListItem text={"Woman's Fashion"} icon={true} />
                                <ListItem text={"Men's Fashion"} icon={true} />
                                <ListItem text={"Electronics"} />
                                <ListItem text={"Home & Lifestyle"} />
                                <ListItem text={"Medicine"} />
                                <ListItem text={"Sports & Outdoor"} />
                                <ListItem text={"Baby's & Toys"} />
                                <ListItem text={"Groceries & Pets"} />
                                <ListItem text={"Health & Beauty"} />
                            </ul>
                        </div>
                        
                        {/* Slider Section */}
                        <div className='w-full lg:max-w-[892px] lg:ml-auto lg:pl-[45px]'>
                            <Slider {...settings}>
                                <div className='px-2 sm:px-5'>
                                    <SliderItem 
                                        image={imgaeOne} 
                                        brandLogo={brandLogo} 
                                        brandTitle={"iPhone 14 Series"} 
                                        sliderText={"Up to 10% off Voucher"} 
                                        btnText={"Shop Now"}
                                    />
                                </div>
                                <div className='px-2 sm:px-5'>
                                    <SliderItem 
                                        image={imgaeOne} 
                                        brandLogo={brandLogo} 
                                        brandTitle={"iPhone 14 Series"} 
                                        sliderText={"Up to 20% off Voucher"} 
                                        btnText={"Shop Now"}
                                    />
                                </div>
                                <div className='px-2 sm:px-5'>
                                    <SliderItem 
                                        image={imgaeOne} 
                                        brandLogo={brandLogo} 
                                        brandTitle={"iPhone 14 Series"} 
                                        sliderText={"Up to 30% off Voucher"} 
                                        btnText={"Shop Now"}
                                    />
                                </div>
                                <div className='px-2 sm:px-5'>
                                    <SliderItem 
                                        image={imgaeOne} 
                                        brandLogo={brandLogo} 
                                        brandTitle={"iPhone 14 Series"} 
                                        sliderText={"Up to 40% off Voucher"} 
                                        btnText={"Shop Now"}
                                    />
                                </div>
                                <div className='px-2 sm:px-5'>
                                    <SliderItem 
                                        image={imgaeOne} 
                                        brandLogo={brandLogo} 
                                        brandTitle={"iPhone 14 Series"} 
                                        sliderText={"Up to 50% off Voucher"} 
                                        btnText={"Shop Now"}
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

const ListItem = ({ text, icon = false }) => {
    return (
        <li className='text-sm lg:text-base text-black grid grid-cols-[1fr_24px] items-center hover:text-red-500 transition-colors'>
            <a href="#" className="truncate">{text}</a>
            {icon && <SlArrowRight className="ml-auto" />}
        </li>
    )
}

const SliderItem = ({ image, brandLogo, brandTitle, sliderText, btnText }) => {
    return (
        <>
            <div 
                style={{ background: `url(${image})` }} 
                className='bg-cover bg-no-repeat bg-center text-white 
                          pt-8 pb-6 px-4 
                          sm:pt-12 sm:pb-8 sm:px-8 
                          lg:pt-[58px] lg:pb-[47px] lg:px-[64px] 
                          ml-auto rounded-lg lg:rounded-none
                          min-h-[250px] sm:min-h-[300px] lg:min-h-auto
                          flex flex-col justify-center'
            >
                <div className='flex items-center gap-3 sm:gap-6 pb-4 lg:pb-[20px]'>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 lg:w-auto lg:h-auto'>
                        <img src={brandLogo} alt="Brand Logo" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg font-medium">{brandTitle}</p>
                </div>
                
                <p className='text-xl sm:text-2xl lg:text-[48px] 
                            font-semibold leading-tight lg:leading-[60px] 
                            max-w-full lg:max-w-[294px] 
                            pb-4 sm:pb-6 lg:pb-[22px]'>
                    {sliderText}
                </p>
                
                <Link 
                    to={'/shop'} 
                    className='inline-flex items-center gap-2 text-white font-medium 
                              text-sm sm:text-base leading-[24px] py-1 
                              btn_after hover:underline transition-all
                              w-fit'
                >
                    {btnText}
                    <FaArrowRightLong className="text-sm sm:text-base" />
                </Link>
            </div>
        </>
    )
}

export default Banner