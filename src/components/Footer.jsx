import { Link } from "react-router";
import ListHeading from "./ListHeading";
import ListItems from "./ListItems";
import { RiFacebookLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { FaInstagram, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { ProductsItems } from "./Products";

const Footer = () => {
    return (
        <footer className="pt-16 bg-black mt-28">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-[87px] pb-12">
                    <div>
                        <p className="text-white text-xl md:text-2xl font-bold pb-4">Exclusive</p>
                        <p className="text-white pb-3 text-lg font-medium">Subscribe</p>
                        <p className="text-white text-base pb-4">Get 10% off your first order</p>
                        <div className="flex items-center gap-3 px-4 py-2 border border-white rounded w-full sm:w-[217px]">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-white w-full placeholder:text-[#FAFAFA] leading-6 bg-transparent focus:outline-none text-sm"
                            />
                            <div className="min-w-[24px]">
                                <img src="arrow.svg" alt="arrow icon" />
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
                        <p className="text-white text-sm pb-3">Save $3 with App New User Only</p>
                        <div className="grid grid-cols-2 gap-2 items-center">
                            <div>
                                <img src="/QR_code.jpg" alt="QR-code" className="w-20 md:w-24 h-auto" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <img src="/play_store.svg" alt="Google Play" className="w-28 h-auto" />
                                <img src="/app_store.svg" alt="App Store" className="w-28 h-auto" />
                            </div>
                        </div>
                        <div className="pt-6 flex gap-4 items-center">
                            <RiFacebookLine className="text-white size-6" />
                            <TbBrandTwitter className="text-white size-6" />
                            <FaInstagram className="text-white size-6" />
                            <FaLinkedinIn className="text-white size-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 flex flex-col sm:flex-row items-center gap-2 justify-center border-t border-white">
                <FaRegCopyright className="text-white" />
                <p className="text-white text-sm">Copyright Rimel 2022. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
