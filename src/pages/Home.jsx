import Banner from "../components/Banner"
import BestSelling from "../components/BestSelling"
import Category from "../components/Category"
import FlashSales from "../components/FlashSales"
import SectionHeading from "../components/SectionHeading"


const Home = () => {
    return (
        <>
            <Banner/>
            <FlashSales />
            <Category/>
            <BestSelling/>
        </>
    )
}

export default Home