
import Input from '../components/input'
import Button from '../components/Button'
import { Link } from 'react-router'

const Signup = () => {
    return (
        <>
            <section className='mt-[60px]'>
                <div className='grid grid-cols-[4fr_3fr] items-center justify-center'>
                    <div>
                        <img src="/Login_Image.jpg" alt="image" />
                    </div>
                    <div className='px-[130px]'>
                        <form action="">
                            <h2 className='text-[36px] leading-[4%] pb-[24px] font-medium text-black'>Log in to Exclusive</h2>
                            <p className='text-[16px] leading-[24px] pb-[48px]'>Enter your details below</p>
                            <div className='flex flex-col gap-[40px]'>
                                <Input type='email' placeholder={"Email or Phone Number"} />
                                <Input type='password' placeholder={"Password"} />
                            </div>
                            <div className='pt-[40px] grid grid-cols-2 gap-[87px]'>
                                <Button TagName={"button"} type='submit'>Log In</Button>
                                <button className='px-[86px] py-[16px] text-[#DB4444] whitespace-nowrap'>Forget Password?</button>
                            </div>
                        </form>
                        <p className='text-[16px] leading-[24px] mt-[34px] text-center'>Already have account? <Link to="/Login" className='font-medium'>Log in</Link> </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
