import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="p-8 fixed top-0 max-w-screen-xl md:text-lg z-50 font-Lora text-green">
            <div className="container mx-auto inline-block pb-4">
                <ul className="flex justify-between">
                    {['Home', 'Projects', 'About me', 'Experience', 'Background', 'Contact'].map((item) => (
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
