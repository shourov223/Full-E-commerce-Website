
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <main>
            <TopBar />
            <Navbar />
            <Outlet />
        </main>
    )
}

export default MainLayout
