import React, { useState, useEffect } from "react";

interface NavbarProps {
    isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-20 bg-background transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-between items-center py-4 text-lg">
                <p className="text-primary hover:underline text-darkorange" onClick={scrollToTop}>
                    Tilde Eriksen Eine
                </p>

                <ul className="flex text-darkblue">
                    {['Projects', 'About me', 'Contact'].map((item) => (
                        <li key={item} className="mr-6">
                            <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-primary hover:underline">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
