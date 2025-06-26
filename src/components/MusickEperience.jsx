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
        <section className="pt-[130px]">
            <div className="container">
                <div className="image_music w-full px-[56px]">
                    <div className="flex items-center gap-[53px]">
                        <div>
                            <p className="text-[#00FF66] text-[16px] leading-[20px] font-semibold pt-[69px] pb-[32px]">Categories</p>
                            <h2 className="text-white text-[48px] font-semibold leading-[60px] pb-[32px] max-w-[443px]">Enhance Your Music Experience</h2>
                            <div className="flex items-center gap-6 pb-10">
                                {
                                    Timer.map((item) => {
                                        return <Time key={item.id} number={item.number} text={item.text} />
                                    })
                                }
                            </div>
                            <button className="bg-[#00FF66] py-4 px-[48px] rounded-[4px] mb-[69px]">Buy Now!</button>
                        </div>
                        <div>
                            <img src={speaker} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Time = ({ number, text }) => {
    return (
        <div className="size-[62px] bg-white rounded-full grid place-items-center">
            <div>
                <p className="text-center text-[16px] font-semibold leading-[20px]">{number}</p>
                <p className="text-center text-[11px] leading-[18px]">{text}</p>
            </div>
        </div>
    )
}
export default MusickEperience
