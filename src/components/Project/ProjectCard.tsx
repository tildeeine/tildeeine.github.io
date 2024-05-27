import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    onReadMore: () => void;
    isImageLeft: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, onReadMore, isImageLeft }) => {
    return (
        <div className={`flex flex-col md:flex-row ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} w-full md:w-4/5 mx-auto mt-10`} onClick={onReadMore}>
            <div className="flex flex-col md:flex-row rounded-lg overflow-hidden w-full">
                {isImageLeft && (
                    <div className="flex-none w-full md:w-48 h-48 relative">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className={'rounded-l-lg'}
                        />
                    </div>
                )}
                <div className="flex-1 p-4">
                    <h2 className="text-lg md:text-xl text-darkblue font-semibold">{title}</h2>
                    <p className="text-darkblue">{description}</p>
                    <button onClick={onReadMore} className="inline-block mt-4 px-3 py-2 border border-darkorange text-darkorange rounded hover:bg-darkorange hover:text-background transition-all">
                        More details
                    </button>
                </div>
                {!isImageLeft && (
                    <div className="flex-none w-full md:w-48 h-48 relative">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className={'rounded-r-lg'}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
