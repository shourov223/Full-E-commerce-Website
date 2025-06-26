
import TopBar from '../components/TopBar'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useContext, useState } from 'react'
import { useUser } from '../context/userContext'
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
