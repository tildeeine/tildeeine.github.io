import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/whoami.webp';
import AboutCard from "./AboutCard";

const AboutSection: React.FC = () => {
    return (
        <section className="w-full md:w-4/5 mx-auto" id='about-me'>
            <div className="flex justify-left mt-40 mb-4 text-4xl font-poppins text-primary">
                <h2>About Me</h2>
            </div>
            <div className="bg-background min-h-screen p-8">
                <AboutCard
                    title="Who am I?"
                    text="I'm a 24 year old cybersecurity student from Lommedalen, currently studying at NTNU in Trondheim. "
                    imageUrl=""
                />
                <AboutCard
                    title="Education"
                    text="I am currently in my fourth year of a five year master's degree in cybersecurity at NTNU, with a specialzation of information security, and have taken courses in cybersecurity, networks, and software development. From 2023 to 2024 I was on exchange at Instituto Superior Tecnico in Lisbon, Portugal. Right now I am working on my master's thesis in the field of cyber threat intelligence and analysis."
                    imageUrl=""
                    reverse
                />
                <AboutCard
                    title="Work Experience"
                    text="Last summer I worked as a summer intern at Mnemonic. Here I conducted penetration tests on two different web applications, and got a practical approach to cybersecurity in applications. The summer before I had an internship at Visma, where I worked as a software developer, and learned a lot about working in a team and developing software in a professional environment with github and agile methodologies.
                    Througout my studies I have also held a part-time job as a student assistant at NTNU, where I have helped students with their assignments in the courses I have taken. These courses include object oriented programming, security and robustness in ICT systems, digital economics, and experts in teamwork."
                    imageUrl=""
                />
                <AboutCard
                    title="Volunteer Experience"
                    text="I've worked on various projects in network security, software development, and threat analysis..."
                    imageUrl=""
                    reverse
                />
                <AboutCard
                    title="Interests"
                    text="I've worked on various projects in network security, software development, and threat analysis..."
                    imageUrl=""
                />
            </div>

        </section >
    );
}

export default AboutSection;
