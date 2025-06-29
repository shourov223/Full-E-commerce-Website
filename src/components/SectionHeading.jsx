import CountdownTimer from "./CountDownTimer.jsx"

const SectionHeading = ({ subHeading, heading, counter = false }) => {
    return (
        <div>
            <div className="mb-4 sm:mb-6">
                <h3 className="text-sm sm:text-base leading-[18px] sm:leading-[20px] 
                                 font-semibold sm:pl-[36px] pt-2 sm:pt-[10px] 
                                 text-[#DB4444] relative 
                                 after:content-[''] after:absolute 
                                 after:w-4 after:h-8 sm:after:w-[20px] sm:after:h-[40px] 
                                 after:bg-[#DB4444] after:top-0 after:left-0 
                                 after:rounded-[4px]">
                    {subHeading}
                </h3>
            </div>

            {/* Mobile Layout */}
            <div className="block lg:hidden">
                <div className="space-y-4 sm:flex items-center justify-between">
                    <h2 className="text-xl sm:text-2xl md:text-3xl 
                                     font-semibold leading-tight">
                        {heading}
                    </h2>

                    {counter && (
                        <div className="flex justify-center sm:justify-start">
                            <CountdownTimer />
                        </div>
                    )}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-[87px]">
                    <h2 className="text-[36px] font-semibold leading-[48px]">
                        {heading}
                    </h2>
                    {counter && <CountdownTimer />}
                </div>
            </div>
        </div>
    )
}

export default SectionHeading