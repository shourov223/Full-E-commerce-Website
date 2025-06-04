import { useState } from 'react'
import { Link } from 'react-router'

// Custom Chevron Down Icon
const ChevronDownIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// Custom Close Icon
const CloseIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TopBar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [selectedLanguage, setSelectedLanguage] = useState('English')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleClose = () => {
        setIsVisible(false)
    }

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language)
        setIsDropdownOpen(false)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    if (!isVisible) return null

    return (
        <div className='bg-black py-3 lg:py-[15px] relative'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2'>
                    {/* Promotional Text */}
                    <div className='flex-1 text-center sm:text-left order-2 sm:order-1'>
                        <p className='text-white text-xs sm:text-sm lg:text-base leading-tight'>
                            <span className='hidden sm:inline'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                            <span className='sm:hidden'>Summer Sale - OFF 50%!</span>
                            {' '}
                            <Link 
                                className='font-bold underline hover:text-yellow-300 transition-colors duration-200 ml-1' 
                                to="/Error"
                            >
                                ShopNow
                            </Link>
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center gap-3 sm:gap-4 order-1 sm:order-2'>
                        {/* Language Selector */}
                        <div className='relative'>
                            <button
                                onClick={toggleDropdown}
                                className='flex items-center gap-1 text-white text-sm hover:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50 rounded px-2 py-1'
                            >
                                <span className='hidden sm:inline'>{selectedLanguage}</span>
                                <span className='sm:hidden'>{selectedLanguage.slice(0, 2)}</span>
                                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Custom Dropdown */}
                            <div className={`absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border overflow-hidden transition-all duration-200 z-50 ${
                                isDropdownOpen 
                                    ? 'opacity-100 transform scale-100 pointer-events-auto' 
                                    : 'opacity-0 transform scale-95 pointer-events-none'
                            }`}>
                                <div className='py-1 min-w-[100px]'>
                                    {['English', 'Bangla'].map((language) => (
                                        <button
                                            key={language}
                                            onClick={() => handleLanguageSelect(language)}
                                            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150 ${
                                                selectedLanguage === language ? 'bg-gray-50 font-medium' : 'text-gray-700'
                                            }`}
                                        >
                                            {language}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className='text-white hover:text-red-300 transition-colors duration-200 p-1 hover:bg-white hover:bg-opacity-10 rounded-full'
                            aria-label="Close banner"
                        >
                            <CloseIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Backdrop for dropdown (mobile) */}
            {isDropdownOpen && (
                <div 
                    className="fixed inset-0 z-40 sm:hidden" 
                    onClick={() => setIsDropdownOpen(false)}
                ></div>
            )}
        </div>
    )
}

export default TopBar