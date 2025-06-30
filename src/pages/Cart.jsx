import { Link } from "react-router"
import monitor from "../assets/monitor.png"
import controlar from "../assets/controlar.png"
import { useUser } from "../context/userContext"
import Button from "../components/Button"

const Cart = () => {
    const { value } = useUser()
    return (
        <section className="pt-20">
            <div className="container">
                <div className="flex items-center gap-3 pb-20">
                    <Link className="text-[14px] leading-[21px]" to={"/"}>Home</Link> /
                    <Link className="font-medium text-[14px] leading-[21px]" to={"/Cart"}>Cart</Link>
                </div>
                <div className="flex items-center gap-3 justify-between rounded-[4px] py-[24px] px-10 shadow mb-10">
                    <p className="text-[16px] leading-[24px]">Product</p>
                    <p className="text-[16px] leading-[24px]">Price</p>
                    <p className="text-[16px] leading-[24px]">Quantity</p>
                    <p className="text-[16px] leading-[24px]">Subtotal</p>
                </div>
                <div className="flex flex-col items-center gap-10 w-full">
                    <CartItems image={monitor} price={"$650"} totalPrice={value * 650} title={"LCD Monitor"} />
                    <CartItems image={controlar} price={"$550"} totalPrice={value * 550} title={"H1 Gamepad"} />
                </div>
                <div className="pt-[24px] flex items-center gap-3 justify-between pb-20">
                    <Link to={"/"} className="py-4 px-[48px] rounded-[4px] border border-black/50 text-[16px] leading-[24px] font-medium">Return To Shop</Link>
                    <button className="py-4 px-[48px] rounded-[4px] border border-black/50 text-[16px] leading-[24px] font-medium">Update Cart</button>
                </div>
                <div className="grid grid-cols-[527px_470px] justify-between items-start">
                    <div className="flex items-center gap-4">
                        <div className="w-[300px] border border-black rounded-[4px] py-4 px-[24px]">
                            <input className="w-full outline-none placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-black/50" placeholder="Coupon Code" type="text" />
                        </div>
                        <Button TagName={"button"}>Apply Coupon</Button>
                    </div>
                    <div className="py-8 px-[24px] border border-black rounded-[4px]">
                        <p className="font-medium text-[20px] leading-[28px] pb-[24px]">Cart Total</p>
                        <p className="flex items-center justify-between gap-2">
                            <span>Subtotal:</span>
                            <span>$1750</span>
                        </p>
                        <p className="py-4 border-y border-b-black/50 my-4 flex items-center justify-between gap-2">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </p>
                        <p className="pb-4 flex items-center justify-between gap-2">
                            <span>Total:</span>
                            <span>$1750</span>
                        </p>
                        <Button TagName={"button"}>Procees to checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CartItems = ({ image, price, totalPrice, title }) => {
    const { handleChange } = useUser()
    return <div className="py-[24px] px-10 shadow flex items-center justify-between w-full">
        <div className="flex items-center gap-[20px]">
            <div className="size-[54px]">
                <img className="w-full h-full" src={image} alt="image" />
            </div>
            <p className="text-[16px] leading-[24px]">{title}</p>
        </div>
        <p className="text-[16px] leading-[24px]">{price}</p>
        <input onChange={handleChange} className="w-[72px] h-[44px] py-[10px] px-3 rounded-[4px] outline-black/40 border border-black/40" type="number" />
        <p className="text-[16px] leading-[24px]">${totalPrice}</p>
    </div>
}

export default Cart
