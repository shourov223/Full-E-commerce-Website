
const Button = ({children , type='button' , TagName , ...props}) => {
  return <TagName {...props} type={type} className='bg-[#DB4444] text-white py-[16px] px-[48px] rounded-[4px]'>
    {children}
  </TagName>
}

export default Button
