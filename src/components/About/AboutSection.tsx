import React from "react";
import Image from 'next/image';
import AboutCard from "./AboutCard";

const AboutSection: React.FC = () => {
    return (
        <section className="w-full mx-auto mt-20" id='about-me'>
            <div className="flex justify-center text-center text-3xl mb-4 md:mb-0 md:text-4xl font-poppins text-primary">
                <h2>About Me</h2>
            </div>
            <div className="bg-background min-h-screen md:p-8">
                <AboutCard
                    title="Who am I?"
                    text="I'm a 24 year old cybersecurity student from Lommedalen, currently studying at NTNU in Trondheim. "
                    image={require(`../../assets/img/frontphoto.webp`).default}
                />
                <AboutCard
                    title="Education"
                    text="I am currently in my fourth year of a five year master's degree in cybersecurity at NTNU, with a specialzation of information security, and have taken courses in cybersecurity, networks, and software development. From 2023 to 2024 I was on exchange at Instituto Superior Tecnico in Lisbon, Portugal. Right now I am working on my master's thesis in the field of cyber threat intelligence and analysis."
                    image={require(`../../assets/img/krets.jpg`).default}
                    reverse
                />
                <AboutCard
                    title="Interests"
                    text="Outside of my studies I enjoy hiking, marital arts, running, and reading. I also participate in CTFs from time to time, and tinker with some personal projects like this website."
                    image={require(`../../assets/img/canyoning.jpg`).default}
                />
            </div>

        </section >
    );
}

export default AboutSection;
