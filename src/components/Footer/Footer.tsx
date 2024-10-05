import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="w-full  mx-auto mt-20 text-right text-sm">
            <p className="text-secondary font-poppins">
                Created with Next.js and tailwindcss.
            </p>
            <p className="text-secondary font-poppins">
                © 2024 Tilde Eriksen Eine. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;