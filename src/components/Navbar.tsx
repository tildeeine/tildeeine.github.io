import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="top-0 w-4/5 md:text-lg font-poppins text-darkblue fixed mx-auto bg-background">
            <div className="container mx-auto flex justify-between items-center py-4">
                <h1 className="text-primary text-darkorange">Tilde Eriksen Eine</h1>
                <ul className="flex">
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
