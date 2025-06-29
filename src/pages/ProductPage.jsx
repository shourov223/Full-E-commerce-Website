import { useEffect, useState } from "react";
import ProductsItems from "../components/ProductsItems";
import { Link } from "react-router";

const ProductPage = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [showProduct, setShowProduct] = useState([]);
    const [number, setNumber] = useState(0);
    const [showCategories, setShowCategories] = useState(false);

    const categoryMenu = [...new Set(allProducts.map(cat => cat.category))];

    function filterData(p) {
        const categories = allProducts.filter((item) => {
            return item.category === p
        })

        setShowProduct(categories)
    }

    function showNumberOfProduct(event) {
        setNumber(event.target.value)

        setShowProduct(pre => pre.slice(0, Number(number)))
    }


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data.products)
                setShowProduct(data.products)
            });
    }, [])
    return (
        <section className="">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] gap-4 py-8 sm:py-12 lg:py-20">
                    {/* Filter Menu */}
                    <div className="order-2 lg:order-1">
                        <div className="flex flex-wrap gap-3 sm:gap-5 items-center mb-8 sm:mb-[50px]">
                            <Link to={"/"} className="text-gray-700 hover:text-blue-600 text-sm sm:text-base">Home</Link>
                            <Link to={"/product"} className="text-blue-700 hover:text-blue-600 text-sm sm:text-base">Product</Link>
                        </div>
                        <div>
                            <div className="flex items-center justify-between pb-3">
                                <h3 className="text-lg sm:text-[20px] font-bold">Shop by Category</h3>
                                <button
                                    onClick={() => setShowCategories(!showCategories)}
                                    className="md:hidden p-2 border border-gray-300 rounded hover:bg-gray-50"
                                >
                                    <svg
                                        className={`w-4 h-4 transform transition-transform ${showCategories ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <ul className={`grid gap-2 sm:gap-3 ${showCategories ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-1' : 'hidden lg:grid lg:grid-cols-1'}`}>
                                {categoryMenu?.map((menu, index) => {
                                    return <li className="capitalize cursor-pointer py-2 px-3 lg:py-0 lg:px-0 bg-gray-100 lg:bg-transparent rounded lg:rounded-none text-sm sm:text-base" key={index} onClick={() => filterData(menu)}>{menu}</li>
                                })}
                            </ul>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="order-1 lg:order-2">
                        <div className="flex flex-col sm:flex-row justify-between sm:justify-end items-start sm:items-center gap-3 pb-6 sm:pb-[30px]">
                            <p className="text-sm sm:text-[16px] leading-[24px]">Show : </p>
                            <input onChange={(e) => showNumberOfProduct(e)} className="border border-gray-600 p-2 w-full sm:w-auto" type="number" placeholder="0" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                            {showProduct?.map(({ id, thumbnail, title, price, oldPrice, discount, discountPercentage, rating }) => (
                                <ProductsItems
                                    key={id}
                                    image={thumbnail}
                                    text={title}
                                    price={price}
                                    oldPrice={oldPrice}
                                    discount={true}
                                    discountParcent={discountPercentage}
                                    reting={rating}
                                />
                            ))}
                        </div>
                        <div className="pt-8 sm:pt-12 flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-4">
                            <Link className="py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] bg-black text-white text-sm sm:text-base">1</Link>
                            <Link className="py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] bg-black text-white text-sm sm:text-base">2</Link>
                            <Link className="py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] bg-black text-white text-sm sm:text-base">3</Link>
                            <Link className="py-[8px] sm:py-[10px] px-[20px] sm:px-[25px] bg-black text-white text-sm sm:text-base">4</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPage