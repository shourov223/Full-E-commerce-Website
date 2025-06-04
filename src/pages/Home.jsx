import Banner from "../components/Banner"
import Products from "../components/Products"
import SectionHeading from "../components/SectionHeading"


const Home = () => {
    return (
        <>
            <Banner/>
            <SectionHeading subHeading={"Today’s"} heading={"Flash Sales"} counter={true} buttons={true}/>
            <Products />
        </>
    )
}

export default Home