import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/frontphoto.webp';

const HomeSection: React.FC = () => {
    return (
        <section id="home" className="font-poppins mt-5 md:p-8 mx-auto w-full sm:w-auto">

            <div className="flex flex-col lg:flex-row items-center justify-between w-full md:w-4/5 mx-auto">
                <div className="flex lg:hidden justify-center lg:justify-end mt-8 lg:mt-0 lg:w-1/3">
                    <Image src={profileImage} alt="Tilde Eriksen Eine" className="w-3/4 lg:w-full rounded-full" />
                </div>
                <div className="flex-1 lg:w-2/3 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-6xl mt-8 mb-4 text-primary">Tilde Eriksen Eine </h1>
                    <ul className="text-sm lg:text-base mb-8 ml-6 text-secondary list-disc">
                        <li>
                            5th year student, <b>M.Sc. Cybersecurity and Data Communications</b> @ NTNU Trondheim.
                        </li>
                        <li>
                            Internships at <b>Mnemonic</b> and <b>Visma</b>.
                        </li>
                        <li>
                            Working on drone communication system for <b>Ascend NTNU</b>.
                        </li>
                        <li>
                            Student teaching assistant.
                        </li>

                    </ul>
                    <div className="flex flex-wrap justify-center">
                        <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-background py-2 px-4 border border-primary hover:border-transparent rounded mt-2 mx-2">
                            <a href="https://github.com/tildeeine" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </button>
                        <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-background py-2 px-4 border border-primary hover:border-transparent rounded mt-2 mx-2">
                            <a href="/cv/CV_Tilde_Eriksen_Eine_eng.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                        </button>
                        <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-background py-2 px-4 border border-primary hover:border-transparent rounded mt-2 mx-2 lg:mr-10">
                            <a href="https://www.linkedin.com/in/tildeeine/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center lg:justify-end mt-8 lg:mt-0 m-4 lg:w-1/3">
                    <Image src={profileImage} alt="Tilde Eriksen Eine" className="w-3/4 lg:w-full rounded-full" />
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
