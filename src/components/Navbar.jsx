import { Link } from "react-router"


const Navbar = () => {
    return (
        <>
            <nav className="pt-[38px] pb-[16px] border-b">
                <div className="container">
                    <div className="flex justify-between items-center gap-[30px]">
                        <div>
                            <img src="/Logo.svg" alt="logo" />
                        </div>
                        <ul className="flex items-center gap-[48px]">
                            <li><Link className="text-[16px] leading-[24px]" to="/">Home</Link></li>
                            <li><Link className="text-[16px] leading-[24px]" to="#">Contact</Link></li>
                            <li><Link className="text-[16px] leading-[24px]" to="#">About</Link></li>
                            <li><Link className="text-[16px] leading-[24px]" to="/SignUp">Sign Up</Link></li>
                        </ul>
                        <div className="flex items-center gap-[24px]">
                            <div className="flex items-center px-[20px] py-[10px] bg-[#F5F5F5] rounded-[4px]">
                                <input type="search" placeholder="What are you looking for?" className="placeholder:text-[12px] focus:outline-none" />
                                <div>
                                    <img src="/search_btn.svg" alt="icons" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <div>
                                    <img src="/Wishlist.svg" alt="icons" />
                                </div>
                                <div>
                                    <img src="/cart.svg" alt="icons" />
                                </div>
                                <div>
                                    <img src="/user.svg" alt="icons" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
