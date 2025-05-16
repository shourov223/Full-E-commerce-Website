
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <main>
            <TopBar />
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout
