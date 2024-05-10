// ProjectModal.tsx
import React from 'react';

interface ProjectModalProps {
    project: {
        title: string;
        description: string;
        languages: string[];
        task: string;
        solution: string;
        images: string[]; // Array of image URLs
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center " onClick={handleBackdropClick}>
            <div className="bg-background p-5 rounded-lg w-3/4 font-poppins" onClick={handleModalContentClick}>
                <div className="w-7/10 pr-40">
                    <h2 className="text-darkblue font-bold font-poppins text-xl">{project.title}</h2>
                    <div className=" text-darkorange mb-4">
                        <ul>{project.languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
                    </div>
                    <div className=" text-darkblue mb-4">
                        <p>{project.description}</p>
                    </div>
                    <div className="flex text-darkblue">
                        <h3>Task</h3>
                        <p>{project.task}</p>
                        <h3>Solution:</h3>
                        <p>{project.solution}</p>
                    </div>
                </div>
                <div className="w-3/10 flex justify-right">
                    {project.images.map((img, index) => (
                        <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="mb-2" />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default ProjectModal;
