import { useState } from "react"
import { Link } from "react-router"
import { useUser } from "../context/userContext";

// Custom Menu Icon Component
const MenuIcon = ({ className, isOpen }) => (
  <div className={`${className} cursor-pointer`}>
    <div className="flex flex-col justify-center items-center w-6 h-6 space-y-1">
      <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
        isOpen ? 'rotate-45 translate-y-1.5' : ''
      }`}></span>
      <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : 'opacity-100'
      }`}></span>
      <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
        isOpen ? '-rotate-45 -translate-y-1.5' : ''
      }`}></span>
    </div>
  </div>
);

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showMobileSearch, setShowMobileSearch] = useState(false)
    
    const handleClick = () => {
        setShowMenu(!showMenu)
    }
    
    const handleMobileSearch = () => {
        setShowMobileSearch(!showMobileSearch)
    }
    
    const closeMenu = () => {
        setShowMenu(false)
    }
    
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Contact", path: "#" },
        { name: "About", path: "#" },
        { name: "Sign Up", path: "/SignUp" }
    ]
    const {handleColor} = useUser()

    return (
        <>
            <nav className="py-4 border-b bg-white sticky top-0 z-50 shadow-sm">
                <div className="container">
                    <div className="flex justify-between items-center gap-4 lg:gap-[30px]">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src="/Logo.svg" alt="logo" className="h-8 w-auto" />
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="items-center gap-8 xl:gap-[48px] hidden lg:flex">
                            {navItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <Link 
                                        className="text-[16px] leading-[24px] text-nowrap hover:text-blue-600 transition-colors duration-200 relative"
                                        to={item.path}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Search & Icons */}
                        <div className="items-center gap-4 xl:gap-[24px] hidden lg:flex">
                            <div className="flex items-center px-[20px] py-[10px] bg-[#F5F5F5] rounded-[4px] hover:bg-gray-200 transition-colors duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50">
                                <input 
                                    type="search" 
                                    placeholder="What are you looking for?" 
                                    className="placeholder:text-[12px] focus:outline-none bg-transparent w-full min-w-[200px]" 
                                />
                                <div className="ml-2 flex-shrink-0">
                                    <img src="/search_btn.svg" alt="search" className="cursor-pointer hover:opacity-70 transition-opacity" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 xl:gap-4">
                                <div className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <img src="/Wishlist.svg" alt="wishlist" className="w-5 h-5" />
                                </div>
                                <div className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <img src="/cart.svg" alt="cart" className="w-5 h-5" />
                                </div>
                                <div className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <img src="/user.svg" alt="user" className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu Controls */}
                        <div className="flex items-center gap-3 lg:hidden">
                            {/* Mobile Search Toggle */}
                            <button 
                                onClick={handleMobileSearch}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <img src="/search_btn.svg" alt="search" className="w-5 h-5" />
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button 
                                onClick={handleClick}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <MenuIcon className="text-gray-700" isOpen={showMenu} />
                            </button>
                        </div>
                        {/* <button onClick={handleColor} className="bg-red-400 py-[10px] px-[30px] rounded-2xl cursor-pointer text-white">ThemeChange</button> */}
                    </div>

                    {/* Mobile Search Bar */}
                    <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        showMobileSearch ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="flex items-center px-[20px] py-[10px] bg-[#F5F5F5] rounded-[4px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50">
                            <input 
                                type="search" 
                                placeholder="What are you looking for?" 
                                className="placeholder:text-[12px] focus:outline-none bg-transparent w-full" 
                            />
                            <div className="ml-2">
                                <img src="/search_btn.svg" alt="search" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-black transition-opacity duration-300 lg:hidden z-40 ${
                    showMenu ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeMenu}
                ></div>

                {/* Mobile Menu */}
                <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 transform transition-transform duration-300 ease-in-out ${
                    showMenu ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="p-6">
                        {/* Mobile Menu Header */}
                        <div className="flex justify-between items-center mb-8">
                            <img src="/Logo.svg" alt="logo" className="h-8 w-auto" />
                            <button 
                                onClick={closeMenu}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                            >
                                <MenuIcon className="text-gray-700" isOpen={true} />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <ul className="space-y-4 mb-8">
                            {navItems.map((item, index) => (
                                <li key={index} className={`transform transition-all duration-300 delay-${index * 100}`}>
                                    <Link 
                                        className="block text-[16px] leading-[24px] py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                        to={item.path}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Icons */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between px-4 py-3 bg-[#F5F5F5] rounded-lg">
                                <input 
                                    type="search" 
                                    placeholder="What are you looking for?" 
                                    className="placeholder:text-[12px] focus:outline-none bg-transparent flex-1" 
                                />
                                <img src="/search_btn.svg" alt="search" className="ml-2" />
                            </div>
                            
                            <div className="flex justify-center gap-6 pt-4">
                                <div className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <img src="/Wishlist.svg" alt="wishlist" className="w-6 h-6" />
                                </div>
                                <div className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <img src="/cart.svg" alt="cart" className="w-6 h-6" />
                                </div>
                                <div className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200 cursor-pointer">
                                    <img src="/user.svg" alt="user" className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar