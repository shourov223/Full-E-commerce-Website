import { FaStar } from "react-icons/fa6"
import { CiHeart } from "react-icons/ci"
import { GoEye } from "react-icons/go"


const ProductsItems = ({ image, text, price, oldPrice, reting, discountParcent, discount = false }) => {
    return (
        <div className="w-[270px] rounded-[4px] overflow-hidden">
            <div className="bg-[#F5F5F5] h-[250px] flex items-center justify-center relative group">
                {discount && <div className="bg-[#DB4444] px-3 py-1 text-center text-white rounded-[4px] absolute top-[12px] left-[12px]">{discountParcent}%</div>}
                <button className="cursor-pointer size-[34px] rounded-full bg-white flex items-center justify-center absolute top-[12px] right-[12px]">
                    <CiHeart />
                </button>
                <div className="size-[34px] rounded-full bg-white flex items-center justify-center absolute top-[54px] right-[12px]">
                    <GoEye />
                </div>
                <img src={image} alt="image" />
                <button className="bg-black px-2 text-center absolute bottom-0 w-full h-[41px] transition-colors duration-300 cursor-pointer invisible group-hover:visible ">
                    <p className="text-white">Add To Cart</p>
                </button>
            </div>
            <div>
                <p className="text-base font-medium leading-[24px] pt-4 pb-2">{text}</p>
                <div className="flex items-center gap-3">
                    <p className="text-[#DB4444] text-base font-medium leading-[24px]">${price}</p>
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

export default ProductsItems