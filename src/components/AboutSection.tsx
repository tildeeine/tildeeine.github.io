import React from "react";
import Image from 'next/image';
import profileImage from '../assets/img/whoami.jpg';

const AboutSection: React.FC = () => {
    return (
        <section id='about-me'>
            <div className="flex justify-center mt-20 text-4xl font-poppins font-semibold text-darkorange">
                <h2>Who am I?</h2>
            </div>
            <div className="flex justify-center">
                <Image src={profileImage} alt="Tilde Eriksen Eine" className="mt-3 w-4/5 rounded-3xl" />
            </div>
            <div className="flex justify-center items-center mt-10">
                <div className="w-4/5 text-center text-lg font-poppins text-darkblue">
                    <div className="mb-6">
                        <p>Hey there! I'm currently wrapping up my fifth and final year in Cybersecurity and Data Communications at NTNU. I'm all about diving deep into software development and cybersecurity, with a real knack for tackling problems from all angles. I've already spent some time at Visma developing software, and I'm lined up for a cool pentesting gig at Mnemonic this summer.</p>
                    </div>
                    <div className="mb-6">
                        <p>I'm 23 and originally hail from Norway, but I've also spent a year studying in Lisbon, Portugal at IST, which was an awesome twist in my usual routine. Besides hitting the books and coding, I teach a couple of courses at NTNU, helping other students get the hang of security and digital economics.</p>
                    </div>
                    <div className="mb-6">
                        <p>When I'm not geeking out over cybersecurity challenges or helping students out, you can find me out hiking or maybe even at a martial arts class. I love staying active and keeping my brain and body sharp. Also, I'm pretty keen on joining CTF competitions now and then—it's a fun way to test my skills in a team setting.</p>
                    </div>
                    <div>
                        <p>I'm looking forward to landing somewhere I can throw in my lot with a team that's as down-to-earth as they are dedicated. Let's make something great together!</p>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default AboutSection;
