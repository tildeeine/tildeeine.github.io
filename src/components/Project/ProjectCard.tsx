import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    onReadMore: () => void;
    isImageLeft: boolean;
    isLargeScreen: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, onReadMore, isImageLeft, isLargeScreen }) => {
    return (
        <div className={`flex flex-col ${isLargeScreen ? (isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse') : 'flex-col'} mx-auto mt-10 w-full max-w-[350px] md:max-w-[700px] xl:max-w-[900px] justify-center hover:bg-selected rounded-md`} onClick={onReadMore}>
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full max-w-[350px] md:max-w-[700px] xl:max-w-[900px]">
                {/* Left or Top Image Section */}
                {(isImageLeft || !isLargeScreen) && (
                    <div className="flex-none w-full md:w-1/3 h-48 relative">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-l-lg"
                            loading="eager"
                        />
                    </div>
                )}
                {/* Text Section */}
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                    <h2 className="text-lg md:text-xl text-secondary font-semibold">{title}</h2>
                    <p className="text-secondary lg:text-lg mt-2">{description}</p>
                    <button onClick={onReadMore} className="inline-block mt-4 px-3 py-2 xl:w-1/2 border border-primary text-primary rounded hover:bg-primary hover:text-background transition-all">
                        More details
                    </button>
                </div>
                {/* Reversed Image Section */}
                {(!isImageLeft && isLargeScreen) && (
                    <div className="flex-none w-full md:w-1/3 h-48 relative">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-r-lg"
                            loading="eager"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
