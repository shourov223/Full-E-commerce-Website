import React, { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import ProductsItems from './ProductsItems'

const BestSelling = () => {
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [])
    return (
        <section className='pt-20'>
            <div className="container">
                <SectionHeading heading={"Best Selling Products"} subHeading={"This Month"} />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-[30px] pt-[60px]'>
                    {products?.slice(0,4).map((items) => {
                        return <ProductsItems image={items.thumbnail} text={items.title} discountParcent={items.discountPercentage} discount={true} reting={items.rating} price={items.price} key={items.id}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default BestSelling