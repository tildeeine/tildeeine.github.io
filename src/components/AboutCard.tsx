import React from 'react';
import Image, { StaticImageData } from 'next/image';


interface AboutCardProps {
    title: string;
    text: string;
    image: StaticImageData;
    reverse?: boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, text, image, reverse = false }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center justify-between my-8 bg-background p-6 rounded-lg font-poppins ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-3/5 md:pr-6">
                <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
                <p className="text-lg text-secondary leading-relaxed">{text}</p>
            </div>
            <div className="flex justify-start w-full md:w-1/3 mt-6 md:mt-0">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default AboutCard;
