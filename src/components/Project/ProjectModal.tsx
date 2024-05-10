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

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg w-3/4">
                <button onClick={onClose}>Close</button>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="flex">
                    <div className="w-7/10">
                        <h3>Languages Used:</h3>
                        <ul>{project.languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
                        <h3>Task:</h3>
                        <p>{project.task}</p>
                        <h3>Solution:</h3>
                        <p>{project.solution}</p>
                    </div>
                    <div className="w-3/10">
                        {project.images.map((img, index) => (
                            <img key={index} src={img} alt={`Screenshot ${index + 1}`} className="mb-2" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
