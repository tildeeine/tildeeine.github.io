'use client'
import React, { useState } from "react";
import SkillCategory from "./SkillCategory";

const SkillsSection: React.FC = () => {

    const devSkills = ["Python", "Java", "C++", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS"];
    const securitySkills = ["BurpSuite", "Wireshark", "Kali Linux"];
    const otherSkills = ["Git", "GitHub", "jUnit", "flask", "Vagrant"];


    return (
        <section id="skills" className="w-full mt-30">
            <div className="mx-auto md:w-4/5 ">
                <div className="mt-40 justify-center items-center">
                    <h1 className="text-4xl font-poppins text-primary text-center">
                        Skills
                    </h1>
                    <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start">
                        <SkillCategory title="Security" skills={securitySkills} />
                        <SkillCategory title="Dev" skills={devSkills} />
                        <SkillCategory title="Other" skills={otherSkills} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
