'use client'
import React, { useState } from "react";

interface SkillCategoryProps {
    title: string;
    skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
    return (
        <div className="w-full md:w-1/3">
            <div className="flex flex-col items-center my-8">
                <h2 className="text-xl md:text-2xl font-poppins text-secondary mb-4">{title}</h2>
                <ul className="flex flex-wrap justify-center text-center">
                    {skills.map((skill, index) => (
                        <li
                            key={index}
                            className="bg-primary text-background text-sm md:text-lg font-poppins px-4 py-2 m-2 rounded-full shadow-md cursor-default"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default SkillCategory;
