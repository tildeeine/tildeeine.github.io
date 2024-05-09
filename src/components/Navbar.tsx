import React from "react";

const Navbar: React.FC = () => {
    return (
        <nav className="p-8 fixed top-0 w-4/5 md:text-lg font-poppins text-darkblue ">
            <div className="container mx-auto inline-block pb-4 items-center">
                <h1 className="text-primary text-darkorange">Tilde Eriksen Eine</h1>
                <ul className="flex justify-end">
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
