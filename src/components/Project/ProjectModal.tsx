// ProjectModal.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectModalProps {
    project: {
        title: string;
        description: string;
        languages: string[];
        task: string;
        solution: string;
        images: StaticImageData[]; // Array of image URLs
    };
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    // Function to handle click on the backdrop
    const handleBackdropClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation(); // Stop click event from propagating to child elements
        onClose();
    };

    // Function to prevent click inside the modal content from closing it
    const handleModalContentClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleBackdropClick}>
            <div className="bg-background p-5 rounded-lg w-3/4 font-poppins flex" onClick={handleModalContentClick}>
                <div className="w-7/10 p-4 space-y-4">
                    <h2 className="text-3xl font-bold text-darkblue">{project.title}</h2>
                    <div className="text-darkorange mb-4">
                        <ul className="flex flex-wrap">
                            {project.languages.map(lang => <li key={lang} className="bg-mediumbeige rounded-full px-3 py-1 text-sm mr-2">{lang}</li>)}
                        </ul>
                    </div>
                    <p className="text-darkblue">{project.description}</p>
                    <div className="text-darkblue">
                        <h3 className="text-lg font-semibold">Task</h3>
                        <p>{project.task}</p>
                    </div>
                    <div className="text-darkblue">
                        <h3 className="text-lg font-semibold">Solution</h3>
                        <p>{project.solution}</p>
                    </div>
                </div>
                <div className="w-3/10 flex flex-col items-end pr-5">
                    {project.images.map((img, index) => (
                        <div key={index} className="relative w-full mb-4" > {/* Set height to control image size */}
                            <Image
                                src={img}
                                alt={`Screenshot ${index + 1}`}
                                layout="fill"
                                objectFit="cover" // Ensure the image covers the area without distortion
                                className="rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
