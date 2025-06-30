import { Link } from "react-router"
import monitor from "../assets/monitor.png"
import controlar from "../assets/controlar.png"
import Button from "../components/Button"

const BillingDetails = () => {
    return (
        <section className="pt-20">
            <div className="container">
                <div className="flex items-center gap-3 pb-20">
                    <span className="text-[14px] leading-[21px] text-black/50">Account</span>/
                    <span className="text-[14px] leading-[21px] text-black/50">My Account</span>/
                    <Link className="text-[14px] leading-[21px] text-black/50" to={"/productPage"}>Product</Link>/
                    <Link className="text-[14px] leading-[21px] text-black/50" to={"/cart"}>View Cart</Link>/
                    <span>CheckOut</span>
                </div>
                <h2 className="font-medium text-[36px] leading-[30px] pb-[48px]">Billing Details</h2>
                <div className="grid grid-cols-[470px_527px] items-start justify-between">
                    <div className="flex flex-col gap-8">
                        <InputField text={"First Name"} />
                        <InputField text={"Company Name"} />
                        <InputField text={"Street Address*"} />
                        <InputField text={"Apartment, floor, etc. (optional)"} />
                        <InputField text={"Town/City*"} />
                        <InputField text={"Phone Number*"} />
                        <InputField text={"Email Address*"} />
                        <div className="flex items-center gap-4 pt-[24px]">
                            <input className="accent-[#DB4444] size-[24px]" type="checkbox" />
                            <p className="text-[16px] leading-[24px]">Save this information for faster check-out next time</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-[32px]">
                            <Items image={monitor} title={"LCD Monitor"} price={"$650"} />
                            <Items image={controlar} title={"H1 Gamepad"} price={"$1100"} />
                        </div>
                        <div className="py-[32px]">
                            <span className="flex items-center gap-3 justify-between">
                                <p className="text-[16px] leading-[24px]">Subtotal:</p>
                                <p className="text-[16px] leading-[24px]">$1750</p>
                            </span>
                            <span className="flex items-center gap-3 justify-between py-4 my-4 border-y border-y-black/50">
                                <p className="text-[16px] leading-[24px]">Shipping:</p>
                                <p className="text-[16px] leading-[24px]">Free</p>
                            </span>
                            <span className="flex items-center gap-3 justify-between">
                                <p className="text-[16px] leading-[24px]">Total:</p>
                                <p className="text-[16px] leading-[24px]">$1750</p>
                            </span>
                        </div>
                        <div className="pt-[34px]">
                            <div className="flex items-center gap-2 justify-between">
                                <div className="flex items-center gap-2">
                                    <input className="size-[24px]" type="checkbox" id="payment" />
                                    <label className="text-[16px] leading-[24px]" htmlFor="payment">Bank</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <img src="/Bkash.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="/Visa.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="/Mastercard.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="/Nagad.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[32px] flex items-center gap-4">
                                <input className="size-[24px]" type="checkbox" id="cash" />
                                <label className="text-[16px] leading-[24px]" htmlFor="cash">Cash on delivery</label>
                            </div>
                            <div className="pt-[32px]">
                                <div className="flex items-center gap-4">
                                    <div className="w-[300px] border border-black rounded-[4px] py-4 px-[24px]">
                                        <input className="w-full outline-none placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-black/50" placeholder="Coupon Code" type="text" />
                                    </div>
                                    <Button TagName={"button"}>Apply Coupon</Button>
                                </div>
                                <div className="pt-[32px]">
                                    <Button TagName={"button"}>Place Order</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const InputField = ({ text }) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-[16px] leading-[24px] text-black/60">{text}</p>
            <input className="w-full h-[50px] bg-[#F5F5F5] rounded-[4px] px-[20px]" type="text" />
        </div>
    )
}
const Items = ({ image, title, price }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-[24px]">
                <div className="size-[54px]">
                    <img className="size-full" src={image} alt="image" />
                </div>
                <p className="text-[16px] leading-[24px]">{title}</p>
            </div>
            <p className="text-[16px] leading-[24px]">{price}</p>
        </div>
    )
}

export default BillingDetails
