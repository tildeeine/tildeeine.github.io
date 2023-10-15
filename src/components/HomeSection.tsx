import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/coffeprofile.jpg';

const HomeSection: React.FC = () => {
    return (
        <div>
            <div className="flex items-start justify-between p-8 max-w-screen-xl mx-auto border-t border-lightorange">
                <div className="flex-1">
                    <div className="flex-1">
                        <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-darkorange border-b border-lightorange">Tilde Eriksen Eine, <br /> Software and Development</h1>
                        <p className="text-sm md:text-base mb-8 text-green font-Lora" style={{ maxHeight: "YOUR_IMAGE_HEIGHT" }}>
                            Hi, I’m Tilde! I'm currently in my fourth year at NTNU, doing a master's degree in Communication Technology and Digital Security.I like to do a bit of both development and cybersecurity, and am looking to go into a career in cybersecurity.
                        </p>
                    </div>
                </div>
                <Image src={profileImage} alt="Tilde Eriksen Eine" className="w-1/4 object-cover" />
            </div>
            <div className="flex items-start p-8 max-w-screen-xl mx-auto text-lightorange">
                <h2 className="text-xl font-semibold mb-4">Languages and Tools</h2>
                <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'git'].map((language) => (
                        <button key={language} className="text-sm py-1 px-3 mx-2 border border-lightorange rounded hover:bg-lightorange hover:text-background">
                            {language}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default HomeSection;