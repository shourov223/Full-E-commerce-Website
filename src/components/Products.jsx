import { FaStar } from "react-icons/fa6"
import controlar from '../assets/controlar.png'
import { CiHeart } from "react-icons/ci"
import { GoEye } from "react-icons/go"
import keyborad from '../assets/keyboard.png'
import monitor from '../assets/monitor.png'
import chair from '../assets/chair.png'


const Products = () => {
    return (
        <section className="pt-10">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                    <ProductsItems image={controlar} text={"HAVIT HV-G92 Gamepad"} price={"$120"} oldPrice={"$160"} reting={"(88)"} discount={true} discountPrice={"-40%"} />
                    <ProductsItems image={keyborad} text={"AK-900 Wired Keyboard"} price={"$960"} oldPrice={"$1160"} reting={"(75)"} discount={true} discountPrice={"-35%"} />
                    <ProductsItems image={monitor} text={"IPS LCD Gaming Monitor"} price={"$370"} oldPrice={"$400"} reting={"(99)"} discount={true} discountPrice={"-30%"} />
                    <ProductsItems image={chair} text={"S-Series Comfort Chair "} price={"$375"} oldPrice={"$400"} reting={"(99)"} discount={true} discountPrice={"-25%"} />
                </div>
            </div>
        </section>
    )
}

const ProductsItems = ({ image, text, price, oldPrice, reting, discountPrice, discount = false }) => {
    return (
        <div className="w-[270px] rounded-[4px] overflow-hidden">
            <div className="bg-[#F5F5F5] h-[250px] flex items-center justify-center relative group">
                {discount && <div className="bg-[#DB4444] px-3 py-1 text-center text-white rounded-[4px] absolute top-[12px] left-[12px]">{discountPrice}</div>}
                <button className="cursor-pointer size-[34px] rounded-full bg-white flex items-center justify-center absolute top-[12px] right-[12px]">
                    <CiHeart />
                </button>
                <div className="size-[34px] rounded-full bg-white flex items-center justify-center absolute top-[54px] right-[12px]">
                    <GoEye />
                </div>
                <img src={image} alt="image" />
                <button className="bg-black px-2 text-center absolute bottom-0 w-full h-[41px] hidden group-hover:block">
                    <p className="text-white">Add To Cart</p>
                </button>
            </div>
            <div>
                <p className="text-base font-medium leading-[24px] pt-4 pb-2">{text}</p>
                <div className="flex items-center gap-3">
                    <p className="text-[#DB4444] text-base font-medium leading-[24px]">{price}</p>
                    <del className="text-base font-medium leading-[24px]">{oldPrice}</del>
                </div>
                <div className="flex items-center gap-2">
                    <ul className="flex items-center">
                        <li><FaStar className="text-[#FFAD33]" /></li>
                        <li><FaStar className="text-[#FFAD33]" /></li>
                        <li><FaStar className="text-[#FFAD33]" /></li>
                        <li><FaStar className="text-[#FFAD33]" /></li>
                        <li><FaStar className="text-[#FFAD33]" /></li>
                    </ul>
                    <p className="text-[14px] font-semibold leading-[21px]">{reting}</p>
                </div>
            </div>
        </div>
    )
}

export { ProductsItems }
export default Products