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
                <div className='grid grid-cols-4 gap-[30px] pt-[60px]'>
                    {products?.map((items, i) => {
                        return <ProductsItems image={items.thumbnail} text={items.title} discountParcent={items.discountPercentage} discount={true} reting={items.rating} price={items.price} key={items.id}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default BestSelling
