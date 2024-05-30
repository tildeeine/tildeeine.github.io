import React from "react";
import Image from "next/image";

interface ProjectModalProps {
    project: {
        title: string;
        description: string;
        languages: string[];
        task: string;
        solution: string;
        images: string[];
        time: string;
        link: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    // Function to handle click on the backdrop
    const handleBackdropClick = () => {
        onClose();
    };

    // Function to prevent click inside the modal content from closing it
    const handleModalContentClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30" onClick={handleBackdropClick}>
            <div className="modal-container bg-background p-5 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-5/6 max-h-screen overflow-y-auto font-poppins flex flex-col md:flex-row" onClick={handleModalContentClick}>
                <div className="p-4 space-y-4 w-full md:w-2/3">
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold text-secondary flex-grow">{project.title}</h2>
                        <div className="text-secondary rounded-full text-md ml-4 flex-shrink-0 mt-1">
                            <p>{project.time}</p>
                        </div>
                    </div>
                    <div className="text-primary mb-4 flex items-center text-center text-sm">
                        <ul className="flex flex-wrap w-3/4">
                            {project.languages.map(lang => (
                                <li key={lang} className="bg-highlighted rounded-full px-3 py-1 mr-2 mb-2">
                                    {lang}
                                </li>
                            ))}
                        </ul>
                        <div className="ml-auto text-background bg-primary hover:scale-105 rounded-full px-3 py-1 mb-2 w-1/4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">See project</a>
                        </div>
                    </div>
                    <div className="text-secondary text-sm">
                        <h3 className="text-md font-semibold">Task</h3>
                        <p>{project.task}</p>
                    </div>
                    <div className="text-secondary text-sm">
                        <h3 className="text-md font-semibold">Solution</h3>
                        <p>{project.solution}</p>
                    </div>
                </div>
                {/* Project images */}
                <div className="flex flex-col justify-between md:justify-start lg:justify-between lg:items-end w-full md:w-1/3">
                    {project.images.map((image, index) => (
                        <div key={index} className="p-1 flex justify-center md:justify-end lg:justify-center md:mt-4 w-full">
                            <Image src={require(`../../assets/img/${image}`).default} alt={project.title} className="object-cover mt-2 mb-2 h-32 lg:h-36 xl:h-48 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
