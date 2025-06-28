import speaker from "../assets/speaker.png"

const MusickEperience = () => {
    const Timer = [{
        id: 1,
        number: '23',
        text: "Hours"
    },
    {
        id: 2,
        number: '05',
        text: "Days"
    },
    {
        id: 3,
        number: '59',
        text: "Minutes"
    },
    {
        id: 4,
        number: '35',
        text: "Seconds"
    }]
    return (
        <section className="pt-[80px] md:pt-[100px] lg:pt-[130px]">
            <div className="container">
                <div className="image_music w-full px-4 sm:px-6 md:px-8 lg:px-[56px]">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[53px]">
                        <div className="w-full lg:w-auto text-center lg:text-left">
                            <p className="text-[#00FF66] text-[14px] md:text-[16px] leading-[20px] font-semibold pt-[40px] md:pt-[69px] pb-[24px] md:pb-[32px]">Categories</p>
                            <h2 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-[40px] md:leading-[50px] lg:leading-[60px] pb-[24px] md:pb-[32px] max-w-[443px] mx-auto lg:mx-0">Enhance Your Music Experience</h2>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 pb-8 md:pb-10">
                                {
                                    Timer.map((item) => {
                                        return <Time key={item.id} number={item.number} text={item.text} />
                                    })
                                }
                            </div>
                            <button className="bg-[#00FF66] py-3 md:py-4 px-8 md:px-[48px] rounded-[4px] mb-[40px] md:mb-[69px] text-white">Buy Now!</button>
                        </div>
                        <div className="w-full lg:w-auto flex justify-center">
                            <img src={speaker} alt="image" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Time = ({ number, text }) => {
    return (
        <div className="w-[56px] h-[56px] md:w-[62px] md:h-[62px] bg-white rounded-full grid place-items-center">
            <div>
                <p className="text-center text-[14px] md:text-[16px] font-semibold leading-[18px] md:leading-[20px]">{number}</p>
                <p className="text-center text-[10px] md:text-[11px] leading-[16px] md:leading-[18px]">{text}</p>
            </div>
        </div>
    )
}
export default MusickEperience