import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/frontphoto.png';

const HomeSection: React.FC = () => {
    return (
        <section id="home">
            <div className="flex items-start font-poppins justify-between mt-5 p-8 w-4/5 mx-auto">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-7xl mt-8 mb-4 text-darkorange">Hello, I&apos;m Tilde! </h1>
                    <p className="text-sm md:text-base mb-8 text-darkblue">
                        I&apos;m a <b>cybersecurity</b> student interested in <b>pentesting</b> and <b>software development</b>, currently in my fifth and last year of a M.Sc in Cybersecurity and Data Communication at NTNU.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4">
                            <a href="https://github.com/tildeeine" target="_blank">GitHub</a>
                        </button>
                        <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4">
                            <a href="https://github.com/tildeeine" target="_blank">Resume</a>
                        </button>
                        <button className="bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded">
                            <a href="https://www.linkedin.com/in/tildeeine/" target="_blank">LinkedIn</a>
                        </button>
                    </div>

                </div>

                <Image src={profileImage} alt="Tilde Eriksen Eine" className="w-1/4 rounded-full" />
            </div>
        </section>
    );
}


export default HomeSection;