import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [isNavbarClick, setIsNavbarClick] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-20 bg-background transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-between items-center py-4 text-lg">
                <p className="text-primary hover:underline text-darkorange ml-2" onClick={scrollToTop}>
                    Tilde Eriksen Eine
                </p>
                <ul className="flex text-darkblue">
                    {['Projects', 'About me', 'Contact'].map((item) => (
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
            </div>
        </nav>
    );
};

export default Navbar;
