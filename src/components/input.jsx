
const Input = ({ placeholder , type="text", ...props }) => {
    return <input {...props} className="border-b border-b-[#7D8184] leading-[32px] focus:outline-none focus:border-b-black" placeholder={placeholder} type={type} />
}

export default Input
