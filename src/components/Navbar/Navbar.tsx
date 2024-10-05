import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isNavbarClick, setIsNavbarClick] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                if (isNavbarClick) {
                    setIsNavbarVisible(true);
                    setTimeout(() => {
                        setIsNavbarClick(false);
                    }, 700); // Adjust the delay as needed
                    return;
                }
                setIsNavbarVisible(false);
            } else {
                // Scrolling up
                setIsNavbarVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isNavbarClick]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setIsNavbarClick(true);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
            setIsNavbarClick(true);
        }
        setIsMobileMenuOpen(false);
    };

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-20 bg-background transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-auto flex justify-between items-center sm:text-sm md:text-xl py-4 px-2 md:px-8 w-full"> {/* Added px-8 for horizontal padding */}
                <p className="text-primary hover:underline ml-2 mr-4" onClick={scrollToTop}>
                    Tilde Eriksen Eine
                </p>
                {/* Hamburger Icon for Mobile */}
                <div className="sm:hidden">
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <FaTimes className="text-primary text-2xl" /> // Close icon
                        ) : (
                            <FaBars className="text-primary text-2xl" /> // Hamburger icon
                        )}
                    </button>
                </div>

                {/* Full Menu for larger screens */}
                <ul className="hidden sm:flex text-secondary">
                    {['Skills', 'Experience', 'Projects', 'About me', 'Contact'].map((item) => (
                        <li key={item} className="mr-6">
                            <a
                                className="text-primary hover:underline"
                                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <ul
                        className={`flex flex-col items-center absolute top-14 left-0 right-0 bg-background shadow-lg py-4 sm:hidden z-10  ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            }`}
                    >
                        {['Skills', 'Experience', 'Projects', 'About me', 'Contact'].map((item) => (
                            <li key={item} className="py-2">
                                <a
                                    className="text-primary hover:underline"
                                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}


            </div>
        </nav>
    );

};

export default Navbar;
