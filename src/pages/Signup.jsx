
import Input from '../components/input'
import Button from '../components/Button'
import { Link } from 'react-router'
import { useUser } from '../context/userContext'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify';


const Signup = () => {
    const { addUser } = useUser()
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    function handleUser(e) {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }
    function handleAddUser(e) {
        e.preventDefault();
        addUser()
    }


    return (
        <>
            <section className='mt-[60px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr_3fr] items-center justify-center'>
                    <div>
                        <img src="/Login_Image.jpg" alt="image" />
                    </div>
                    <div className='px-12 xl:px-[130px]'>
                        <form action="">
                            <h2 className='text-[36px] pb-[24px] font-medium text-black'>Create an account</h2>
                            <p className='text-[16px] leading-[24px] pb-[20px] lg:pb-[48px]'>Enter your details below</p>
                            <div className='flex flex-col gap-6 lg:gap-[40px]'>
                                <Input onChange={(e) => handleUser(e)} value={newUser.name} name="name" placeholder={"Name"} />
                                <Input onChange={(e) => handleUser(e)} value={newUser.email} name="email" type='email' placeholder={"Email or Phone Number"} />
                                <Input onChange={(e) => handleUser(e)} value={newUser.password} name="password" type='password' placeholder={"Password"} />
                            </div>
                            <div className='pt-[40px] flex flex-col gap-[16px]'>
                                <Button onClick={handleAddUser} TagName={"button"} type='submit'>Create Account</Button>
                                <button className='flex items-center justify-center gap-4 px-[86px] py-[16px] border border-black/40 rounded-[4px] whitespace-nowrap'>
                                    <div className='min-w-[30px]'>
                                        <img src="/google_icon.svg" alt="icons" />
                                    </div>
                                    Sign up with Google
                                </button>
                            </div>
                        </form>
                        <p className='text-[16px] leading-[24px] mt-[34px] text-center'>Already have account? <Link to="/Login" className='font-medium'>Log in</Link> </p>
                    </div>
                </div>
            </section>
             <ToastContainer />
        </>
    )
}

export default Signup
