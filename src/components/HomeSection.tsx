import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/frontphoto.png';

const HomeSection: React.FC = () => {
    return (
        <section id="home" className="font-poppins mt-5 p-8 mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between w-4/5 mx-auto">
                <div className="flex-1 lg:w-2/3 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-7xl mt-8 mb-4 text-darkorange">Hello, I&apos;m Tilde! </h1>
                    <p className="text-sm lg:text-base mb-8 text-darkblue">
                        I&apos;m a <b>cybersecurity</b> student interested in <b>pentesting</b> and <b>software development</b>, currently in my fifth and last year of a M.Sc in Cybersecurity and Data Communication at NTNU.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start">
                        <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4 mt-3">
                            <a href="https://github.com/tildeeine" target="_blank">GitHub</a>
                        </button>
                        <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4 mt-3">
                            <a href="https://github.com/tildeeine" target="_blank">Resume</a>
                        </button>
                        <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mt-3">
                            <a href="https://www.linkedin.com/in/tildeeine/" target="_blank">LinkedIn</a>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end mt-8 lg:mt-0 lg:w-1/3">
                    <Image src={profileImage} alt="Tilde Eriksen Eine" className="w-3/4 lg:w-full rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
