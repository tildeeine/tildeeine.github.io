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
                    text="I am currently in my fifth and final year of a master's degree in cybersecurity and data communications at NTNU, with a specialzation in information security. I spent a year on exchange at Instituto Superior Tecnico in Lisbon, Portugal, and am currently writing a master's thesis in the field of malware analysis, developing visualizations to assist in analysis."
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
