import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/whoami.webp';

const AboutSection: React.FC = () => {
    return (
        <section id='about-me'>
            <div className="flex justify-center mt-40 mb-4 text-5xl font-poppins font-semibold text-primary">
                <h2>Who am I?</h2>
            </div>
            <div className="flex justify-center">
                <Image src={profileImage} alt="Tilde Eriksen Eine" className="mt-3 w-4/5 rounded-3xl" />
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="w-4/5 text-center text-lg font-poppins text-secondary">
                    <div className="mb-6">
                        <p>Hi there! I&apos;m a master&apos;s student at NTNU Trondheim, graduating in <b>June 2025</b> with a degree in <b>Cybersecurity and Data Communications</b>, specializing in Information Security. I&apos;ve had an interest in technology since secondary school and enjoy learning new technologies and testing my problem-solving skills.</p>
                    </div>
                    <div className="mb-6">
                        <p>Outside my studies, I work as a <b>student teaching assistant</b> in several courses, with the longest being <b>Security and Robustness in ICT Systems</b>. I&apos;ve been in this role for two years and am starting my third this fall. I also enjoy being active in student organizations. As part of the company committee of my student union, <b>Abakus</b>, I spent two years organizing <b>BedEx</b>, our big annual trip to visit companies in Oslo. During my third year of studies, I handled the travel planning for our class excursion to Germany and Thailand.</p>
                    </div>
                    <div className="mb-6">
                        <p>Outside of NTNU, I have an interest in the outdoors and martial arts, and I especially love going for weekend hikes. I also enjoy tinkering with different tech projects for fun and learning new skills, which this site is an example of. I enjoy planning and organizing, and I&apos;m the planner of my friend group for any activities.</p>
                    </div>
                    <div>
                        <p>I&apos;m also into cybersecurity competitions and occasionally play <b>CTFs</b> with NTNU&apos;s team, Itemize. Last summer, I had a great internship at <b>Visma</b>, where I worked on a team project developing a documentation page using Docusaurus. This summer, I&apos;m super excited to take on a more cybersecurity-focused role during my internship at <b>Mnemonic</b>.</p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default AboutSection;
