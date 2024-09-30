'use client'
import React, { useState } from "react";

const ContactSection: React.FC = () => {
    // State to manage the display of the "Copied to clipboard" message
    const [copied, setCopied] = useState(false);

    // Function to copy email to clipboard
    const copyEmailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText('tildeeine@proton.me');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Message disappears after 2 seconds
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <section id="contact" className="w-full mt-30">
            <div className="mx-auto">
                <div className="mt-40 justify-center items-center">
                    <p className="text-2xl md:text-4xl font-poppins text-primary txt-center">
                        Have an opportunity, some feedback, or want to know more?
                    </p>
                    <p className="text-2xl md:text-4xl mt-2 font-poppins text-primary text-center">
                        Get in touch!
                    </p>
                </div>
                <div className="flex flex-wrap items-start justify-center font-poppins mt-5">

                    <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-background py-2 px-4 border border-primary hover:border-transparent rounded mt-3 mr-4 text-left">
                        <a href="https://www.linkedin.com/in/tildeeine/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </button>
                    <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-background py-2 px-4 border border-primary hover:border-transparent rounded mr-4 mt-3 text-left">
                        <a href="https://github.com/tildeeine" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </button>
                    <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-background py-2 px-4 border border-primary hover:border-transparent rounded mr-4 mt-3 text-left" onClick={copyEmailToClipboard}>
                        {copied ? <span>Copied to clipboard!</span> : "Email"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
