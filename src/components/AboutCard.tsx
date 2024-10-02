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
        <div className={`flex flex-col md:flex-row items-center justify-between my-8 bg-background p-6 rounded-lg font-poppins ${reverse ? 'md:flex-row-reverse' : ''} max-w-screen-xl mx-auto`}>

            {/* Text Container */}
            <div className="md:w-3/5 md:pr-6 w-full">
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">{title}</h2>
                <p className="text-base md:text-lg text-secondary leading-relaxed min-h-[150px]">{text}</p>
            </div>

            {/* Image Container */}
            <div className="w-full md:w-1/3 flex justify-center mt-6 md:mt-0">
                <Image
                    src={image}
                    alt={title}
                    className="object-cover rounded-lg"
                    width={400} // Fixed size for consistency
                    height={300} // Fixed size for consistency
                />
            </div>
        </div>
    );
};

export default AboutCard;
