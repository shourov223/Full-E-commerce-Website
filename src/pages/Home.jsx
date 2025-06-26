import Arrival from "../components/Arrival"
import Banner from "../components/Banner"
import BestSelling from "../components/BestSelling"
import Category from "../components/Category"
import Explore from "../components/Explore"
import FlashSales from "../components/FlashSales"
import MusickEperience from "../components/MusickEperience"


const Home = () => {
    return (
        <>
            <Banner/>
            <FlashSales />
            <Category/>
            <BestSelling/>
            <MusickEperience/>
            <Explore/>
            <Arrival/>
        </>
    )
}

export default Home