import React from 'react';
import Image from 'next/image';
import blockChainImage from '../../assets/img/frontphoto.png';

interface ProjectCardProps {
    key: number;
    imageUrl: string;
    title: string;
    description: string;
    readMoreUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ key, imageUrl, title, description, readMoreUrl }) => {
    const isImageLeft = key == 1;

    return (
        <div className={`flex ${isImageLeft ? 'flex-row' : 'flex-row-reverse'} w-4/5 mx-auto mt-10`}>
            <div className="flex rounded-lg overflow-hidden hover:shadow-lg mt-10">
                <div className="flex-none w-48 relative">
                    <Image
                        src={blockChainImage}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                        className={`rounded-${isImageLeft ? 'l' : 'r'}-lg`}
                    />
                </div>
                <div className="flex-1 p-4">
                    <h2 className="text-lg text-darkblue font-semibold">{title}</h2>
                    <p className="text-darkblue">{description}</p>
                    <a href={readMoreUrl} className="inline-block mt-4 px-1 py-1 border border-darkorange text-darkorange rounded hover:bg-darkorange hover:text-background transition-all">
                        more details
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
