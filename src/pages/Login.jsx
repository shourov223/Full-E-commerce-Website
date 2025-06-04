
import Input from '../components/input'
import Button from '../components/Button'

const Signup = () => {
    return (
        <>
            <section className='mt-[60px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr_3fr] gap-[30px] items-center'>
                    <div className='max-h-[781px]'>
                        <img className='object-cover' src="/Login_Image.jpg" alt="image" />
                    </div>
                    <div className='px-12 xl:px-[130px]'>
                        <form action="">
                            <h2 className='text-[36px] pb-[24px] font-medium text-black'>Log in to Exclusive</h2>
                            <p className='text-[16px] leading-[24px] pb-[48px]'>Enter your details below</p>
                            <div className='flex flex-col gap-[40px]'>
                                <Input type='email' placeholder={"Email or Phone Number"} />
                                <Input type='password' placeholder={"Password"} />
                            </div>
                            <div className='pt-[40px] grid grid-cols-1 md:grid-cols-2 gap-3 items-center xl:gap-[87px]'>
                                <Button TagName={"button"} type='submit'>Log In</Button>
                                <button className='py-[16px] text-[#DB4444] whitespace-nowrap'>Forget Password?</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
