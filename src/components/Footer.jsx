import { Link } from "react-router"
import Input from "./input"
import ListHeading from "./ListHeading"
import ListItems from "./ListItems"
import { RiFacebookLine } from "react-icons/ri"
import { TbBrandTwitter } from "react-icons/tb"
import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <footer className="pt-[80px] bg-black mt-[140px]">
                <div className="container">
                    <div className="grid grid-cols-5 gap-[87px] pb-[60px]">
                        <div>
                            <p className="text-white text-[24px] leading-[24px] font-bold pb-[24px]">Exclusive</p>
                            <p className="text-white pb-[24px] text-[20px] leading-[28px] font-medium">Subscribe</p>
                            <p className="text-white text-[16px] leading-[24px] pb-4">Get 10% off your first order</p>
                            <div className="flex items-center gap-[32px] px-4 py-3 border border-white rounded-[4px] w-[217px]">
                                <input type="email" placeholder="Enter your email" className="text-white w-full placeholder:text-[#FAFAFA] leading-[24px] focus:outline-none" />
                                <div className="min-w-[24px]">
                                    <img src="arrow.svg" alt="icons" />
                                </div>
                            </div>
                        </div>
                        <ul>
                            <ListHeading text={"Support"} />
                            <ListItems TagName={"li"} text={"111 Bijoy sarani, Dhaka,"} />
                            <ListItems TagName={"li"} text={"DH 1515, Bangladesh."} />
                            <ListItems TagName={"li"} text={"exclusive@gmail.com"} />
                            <ListItems TagName={"li"} text={"+88015-88888-9999"} />
                        </ul>
                        <ul className="flex flex-col">
                            <ListHeading text={"Account"} />
                            <ListItems TagName={Link} to="#" text={"My Account"} />
                            <ListItems TagName={Link} to="/signup" text={"Login / Register"} />
                            <ListItems TagName={Link} to="/signup" text={"Cart"} />
                            <ListItems TagName={Link} to="/signup" text={"Wishlist"} />
                            <ListItems TagName={Link} to="/signup" text={"Shop"} />
                        </ul>
                        <ul className="flex flex-col">
                            <ListHeading text={"Quick Link"} />
                            <ListItems TagName={Link} to="#" text={"Privacy Policy"} />
                            <ListItems TagName={Link} to="/signup" text={"Terms Of Use"} />
                            <ListItems TagName={Link} to="/signup" text={"FAQ"} />
                            <ListItems TagName={Link} to="/signup" text={"Contact"} />
                        </ul>
                        <div>
                            <ListHeading text={"Download App"} />
                            <p>Save $3 with App New User Only</p>
                            <div className="grid grid-cols-2 gap-2 items-center">
                                <div>
                                    <img src="/QR_code.jpg" alt="QR-code" className="w-24 h-auto" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <img src="/play_store.svg" alt="Google Play" className="w-32 h-auto" />
                                    <img src="/app_store.svg" alt="App Store" className="w-32 h-auto" />
                                </div>
                            </div>
                            <div className="pt-[24px] flex gap-[24px] items-center">
                                <RiFacebookLine className="text-white size-[24px]" />
                                <TbBrandTwitter className="text-white size-[24px]" />
                                <FaInstagram className="text-white size-[24px]" />
                                <FaLinkedinIn className="text-white size-[24px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-4 flex items-center gap-1 justify-center border-t border-t-[#FFFFFF]">
                    <FaRegCopyright className="text-white"/>
                    <p className="text-white">Copyright Rimel 2022. All right reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
