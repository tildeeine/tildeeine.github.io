'use client'
import React from "react";

interface ExperienceItemProps {
    title: string;
    timePeriod: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, timePeriod }) => {
    return (
        <div className="mb-4">
            <h3 className="text-md md:text-lg font-semibold text-secondary">{title}</h3>
            <p className="text-md md:text-lg text-secondary-light">{timePeriod}</p>
        </div>
    );
};

export default ExperienceItem;
