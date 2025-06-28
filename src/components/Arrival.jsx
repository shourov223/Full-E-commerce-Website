import SectionHeading from './SectionHeading'
import img_1 from "../assets/img_1.jpg"
import img_2 from "../assets/img_2.jpg"
import img_3 from "../assets/img_3.jpg"
import img_4 from "../assets/img_4.jpg"
import { Link } from 'react-router'
import delivery from "../assets/delivery.svg"
import support from "../assets/support.svg"

const Arrival = () => {
    return (
        <section className='pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-[168px]'>
            <div className="container">
                <div className='flex items-center justify-center pb-8 sm:pb-10 md:pb-12 lg:pb-[60px]'>
                    <SectionHeading subHeading={"Featured"} heading={"New Arrival"} />
                </div>
                <div>
                    <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[30px]'>
                        <div className="w-full lg:w-[570px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] relative">
                            <img className='w-full h-full object-cover rounded-lg' src={img_1} alt="" />
                            <div className='absolute left-4 sm:left-6 md:left-8 lg:left-[32px] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[32px]'>
                                <p className='text-white font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>PlayStation 5</p>
                                <p className='py-2 sm:py-3 md:py-4 text-white text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px] max-w-[200px] sm:max-w-[220px] md:max-w-[242px]'>Black and White version of the PS5 coming out on sale.</p>
                                <Link to={"/"} className='pt-2 sm:pt-3 md:pt-4 font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] underline text-white inline-block'>Shop Now</Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 sm:gap-8 w-full lg:w-auto'>
                            <div>
                                <div className="w-full lg:w-[570px] relative">
                                    <img className='w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover rounded-lg' src={img_2} alt="" />
                                    <div className='absolute left-4 sm:left-6 md:left-8 lg:left-[32px] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[32px]'>
                                        <p className='text-white font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>Women's Collections</p>
                                        <p className='py-2 sm:py-3 md:py-4 text-white text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px] max-w-[200px] sm:max-w-[220px] md:max-w-[242px]'>Featured woman collections that give you another vibe.</p>
                                        <Link to={"/"} className='pt-2 sm:pt-3 md:pt-4 font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] underline text-white inline-block'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-[30px]'>
                                <div className="w-full sm:w-[270px] relative">
                                    <img className='w-full h-[200px] sm:h-[250px] object-cover rounded-lg' src={img_3} alt="" />
                                    <div className='absolute left-4 sm:left-6 md:left-8 lg:left-[32px] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[32px]'>
                                        <p className='text-white font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>Speakers</p>
                                        <p className='pt-2 sm:pt-3 md:pt-4 text-white text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px] max-w-[200px] sm:max-w-[220px] md:max-w-[242px]'>Amazon wireless speakers</p>
                                        <Link to={"/"} className='pt-2 sm:pt-3 md:pt-4 font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] underline text-white inline-block'>Shop Now</Link>
                                    </div>
                                </div>
                                <div className="w-full sm:w-[270px] relative">
                                    <img className='w-full h-[200px] sm:h-[250px] object-cover rounded-lg' src={img_4} alt="" />
                                    <div className='absolute left-4 sm:left-6 md:left-8 lg:left-[32px] bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-[32px]'>
                                        <p className='text-white font-semibold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>Perfume</p>
                                        <p className='pt-2 sm:pt-3 md:pt-4 text-white text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px] max-w-[200px] sm:max-w-[220px] md:max-w-[242px]'>GUCCI INTENSE OUD EDP</p>
                                        <Link to={"/"} className='pt-2 sm:pt-3 md:pt-4 font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px] underline text-white inline-block'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-8 sm:gap-4 pt-16 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-[140px]'>
                    <Facility image={delivery} title={"FREE AND FAST DELIVERY"} text={"Free delivery for all orders over $140"}/>
                    <Facility image={support} title={"24/7 CUSTOMER SERVICE"} text={"Friendly 24/7 customer support"}/>
                    <Facility image={delivery} title={"MONEY BACK GUARANTEE"} text={"We reurn money within 30 days"}/>
                </div>
            </div>
        </section>
    )
}

const Facility = ({ image, title, text }) => {
    return (
        <div className='text-center max-w-[280px] sm:max-w-none'>
            <div className='w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] mx-auto'>
                <img src={image} alt="" className="w-full h-full object-contain" />
            </div>
            <h4 className='text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[22px] sm:leading-[26px] md:leading-[28px] pt-4 sm:pt-5 md:pt-6 pb-1 sm:pb-2'>{title}</h4>
            <p className='text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[21px]'>{text}</p>
        </div>
    )
}

export default Arrival