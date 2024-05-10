import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
    id: number; // Use id instead of key
    image: StaticImageData;
    title: string;
    description: string;
    onReadMore: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, image, title, description, onReadMore }) => {
    const isImageLeft = id % 2 !== 0; // Image on left for odd ids

    return (
        <div className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-4/5 mx-auto mt-10`}>
            <div className="flex rounded-lg overflow-hidden hover:shadow-lg mt-10">
                {isImageLeft && (
                    <div className="flex-none w-48 relative">
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
                    <h2 className="text-lg text-darkblue font-semibold">{title}</h2>
                    <p className="text-darkblue">{description}</p>
                    <button onClick={onReadMore} className="inline-block mt-4 px-1 py-1 border border-darkorange text-darkorange rounded hover:bg-darkorange hover:text-background transition-all">
                        more details
                    </button>
                </div>
                {!isImageLeft && (
                    <div className="flex-none w-48 relative">
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
