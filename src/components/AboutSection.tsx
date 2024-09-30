import React from "react";
import Image from 'next/image';
import AboutCard from "./AboutCard";

const AboutSection: React.FC = () => {
    return (
        <section className="w-full mx-auto" id='about-me'>
            <div className="flex justify-center mt-40 mb-4 text-4xl font-poppins text-primary">
                <h2>About Me</h2>
            </div>
            <div className="bg-background min-h-screen p-8">
                <AboutCard
                    title="Who am I?"
                    text="I'm a 24 year old cybersecurity student from Lommedalen, currently studying at NTNU in Trondheim. "
                    image={require(`../assets/img/iac_webpage.webp`).default}
                />
                <AboutCard
                    title="Education"
                    text="I am currently in my fourth year of a five year master's degree in cybersecurity at NTNU, with a specialzation of information security, and have taken courses in cybersecurity, networks, and software development. From 2023 to 2024 I was on exchange at Instituto Superior Tecnico in Lisbon, Portugal. Right now I am working on my master's thesis in the field of cyber threat intelligence and analysis."
                    image={require(`../assets/img/iac_webpage.webp`).default}
                    reverse
                />
                <AboutCard
                    title="Work Experience"
                    text="I have had internships at Mnemonic and Visma, and I have worked as a student teaching assistant for three years. Through these experiences I have learned a lot about cybersecurity, penetration test, development, teamwork, and conveying technical information. I am currently a member of Ascend NTNU, where I am working on a drone control system in a cross-disciplinary team."
                    image={require(`../assets/img/visma-group.jpg`).default}
                />
                <AboutCard
                    title="Volunteer Experience"
                    text="I have been a volunteer at the student organization Abakus at NTNU, where I have been a part of the company committee and organized company-related events for students. The biggest event I have been a part of is BedEx, our yearly trip to Oslo with 90 students visiting 9 companies in 3 days. I have also been a part of the organization of my class' third-year excursion, where I was responsible for booking transport and hotels for 50 students."
                    image={require(`../assets/img/iac_webpage.webp`).default}
                    reverse
                />
                <AboutCard
                    title="Interests"
                    text="Outside of my studies I enjoy hiking, marital arts, running, and reading. I also participate in CTFs from time to time, and tinker with some personal projects like this website."
                    image={require(`../assets/img/iac_webpage.webp`).default}
                />
            </div>

        </section >
    );
}

export default AboutSection;
