import { Link } from 'react-router'

const TopBar = () => {
    return (
        <div className='bg-black py-[15px]'>
            <div className='container'>
                <div className='flex justify-end'>
                    <p className='text-white mr-[380px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link className='font-bold' to="/Error">ShopNow</Link></p>
                    <select className='text-white'>
                        <option className='text-black' value="English">English</option>
                        <option className='text-black' value="Bangla">Bangla</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TopBar
