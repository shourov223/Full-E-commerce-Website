
const Button = ({children , type='button' , TagName , ...props}) => {
  return <TagName {...props} type={type} className='whitespace-nowrap bg-[#DB4444] text-white py-[16px] px-[48px] rounded-[4px] cursor-pointer'>
    {children}
  </TagName>
}

export default Button
