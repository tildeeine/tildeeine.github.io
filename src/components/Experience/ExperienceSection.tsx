// ExperienceSection.tsx
'use client';
import React from "react";
import ExperienceItem from "./ExperienceItem";

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="w-full">
            <div className="mx-auto md:w-4/5 mt-40">
                <h1 className="text-3xl md:text-4xl font-poppins text-primary text-center">
                    Experience
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-poppins text-primary mb-8">Work Experience</h2>
                        <ExperienceItem title="Mnemonic - Security Consultant Intern" timePeriod="June 2024 - August 2024" />
                        <ExperienceItem title="Visma Software - Software Development Intern" timePeriod="Jun 2023 - Aug 2023" />
                        <ExperienceItem title="NTNU - TA in Security and Robustness in ICT Systems" timePeriod="Aug 2022 - Present" />
                        <ExperienceItem title="NTNU - TA in Experts in Teamwork" timePeriod="Aug 2022 - Jun 2023" />
                        <ExperienceItem title="NTNU - TA in Object-Oriented Programming" timePeriod="Jan 2022 - Jun 2022" />

                        <ExperienceItem title="Royal Norwegian Airforce - Pilot Trainee" timePeriod="Jun 2019 - Jul 2020" />
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-poppins text-primary mb-8">Education</h2>
                        <ExperienceItem title="M.Sc. Cybersecurity and Data Communication at NTNU Trondheim" timePeriod="Aug 2020 - Jun 2025" />
                        <ExperienceItem title="Exchange year at IST in Lisbon, Portugal" timePeriod="Aug 2023 - Jun 2024" />

                        <h2 className="text-2xl md:text-3xl font-poppins text-primary mt-12 mb-8">Volunteer Experience</h2>
                        <ExperienceItem title="Ascend NTNU - Control Engineer" timePeriod="Sep 2024 - Present" />
                        <ExperienceItem title="Excursion Committee - Travel Organizer" timePeriod="Apr 2022 - May 2023" />
                        <ExperienceItem title="Company Committee - BedEx Organizer" timePeriod="Aug 2020 - Sep 2022" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
