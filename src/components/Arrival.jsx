
import SectionHeading from './SectionHeading'
import img_1 from "../assets/img_1.jpg"
import img_2 from "../assets/img_2.jpg"
import img_3 from "../assets/img_3.jpg"
import img_4 from "../assets/img_4.jpg"
import { Link } from 'react-router'
import delivery from "../assets/delivery.svg"
import support from "../assets/support.svg"
import muney_back from "../assets/muney_back.svg"

const Arrival = () => {
    return (
        <section className='pt-[168px]'>
            <div className="container">
                <div className='flex items-center justify-center pb-[60px]'>
                    <SectionHeading subHeading={"Featured"} heading={"New Arrival"} />
                </div>
                <div>
                    <div className='flex gap-[30px]'>
                        <div className="w-[570px] h-[600px] relative">
                            <img className='w-full h-full' src={img_1} alt="" />
                            <div className='absolute left-[32px] bottom-[32px]'>
                                <p className='text-white font-semibold text-[24px] leading-[24px]'>PlayStation 5</p>
                                <p className='py-4 text-white text-[14px] leading-[21px] max-w-[242px]'>Black and White version of the PS5 coming out on sale.</p>
                                <Link to={"/"} className='pt-4 font-medium text-[16px] leading-[24px] underline text-white'>Shop Now</Link>
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div>
                                <div className="w-[570px] relative">
                                    <img className='w-full' src={img_2} alt="" />
                                    <div className='absolute left-[32px] bottom-[32px]'>
                                        <p className='text-white font-semibold text-[24px] leading-[24px]'>Women’s Collections</p>
                                        <p className='py-4 text-white text-[14px] leading-[21px] max-w-[242px]'>Featured woman collections that give you another vibe.</p>
                                        <Link to={"/"} className='pt-4 font-medium text-[16px] leading-[24px] underline text-white'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-[30px]'>
                                <div className="w-[270px] relative">
                                    <img className='w-full' src={img_3} alt="" />
                                    <div className='absolute left-[32px] bottom-[32px]'>
                                        <p className='text-white font-semibold text-[24px] leading-[24px]'>Speakers</p>
                                        <p className='pt-4 text-white text-[14px] leading-[21px] max-w-[242px]'>Amazon wireless speakers</p>
                                        <Link to={"/"} className='pt-4 font-medium text-[16px] leading-[24px] underline text-white'>Shop Now</Link>
                                    </div>
                                </div>
                                <div className="w-[270px] relative">
                                    <img className='w-full' src={img_4} alt="" />
                                    <div className='absolute left-[32px] bottom-[32px]'>
                                        <p className='text-white font-semibold text-[24px] leading-[24px]'>Perfume</p>
                                        <p className='pt-4 text-white text-[14px] leading-[21px] max-w-[242px]'>GUCCI INTENSE OUD EDP</p>
                                        <Link to={"/"} className='pt-4 font-medium text-[16px] leading-[24px] underline text-white'>Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between pt-[140px]'>
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
        <div className='text-center'>
            <div className='size-[80px] mx-auto'>
                <img src={image} alt="" />
            </div>
            <h4 className='text-[20px] font-semibold leading-[28px] pt-6 pb-2'>{title}</h4>
            <p className='text -[14px] leading-[21px]'>{text}</p>
        </div>
    )
}

export default Arrival
