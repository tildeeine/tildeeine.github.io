import React from 'react';
import Image from 'next/image';

interface ProjectModalProps {
    project: {
        title: string;
        description: string;
        languages: string[];
        task: string;
        solution: string;
        images: string[];
        time: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const handleBackdropClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onClose();
    };

    const handleModalContentClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30" onClick={handleBackdropClick}>
            <div
                className="modal-container bg-background p-5 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-5/6 max-h-screen font-poppins flex flex-col overflow-y-auto"
                onClick={handleModalContentClick}
            >
                <div className="p-4 space-y-4 w-full">
                    <div className="flex justify-between items-start">
                        <h2 className="text-3xl font-bold text-darkblue flex-grow">{project.title}</h2>
                        <div className="text-darkblue rounded-full text-md ml-4 flex-shrink-0 mt-1">
                            <p>{project.time}</p>
                        </div>
                    </div>
                    <div className="text-darkorange mb-4 flex items-center">
                        <ul className="flex flex-wrap">
                            {project.languages.map(lang => (
                                <li key={lang} className="bg-mediumbeige rounded-full px-3 py-1 text-sm mr-2 mb-2">
                                    {lang}
                                </li>
                            ))}
                        </ul>
                        <div className="ml-auto text-background bg-darkorange rounded-full text-sm px-3 py-1">
                            <a href="https://github.com/users/tildeeine/projects/1/views/5?pane=issue&itemId=62438984">GitHub</a>
                        </div>
                    </div>
                    <p className="text-darkblue">{project.description}</p>
                    <hr className="my-4 border-darkblue" />
                    <div className="text-darkblue">
                        <h3 className="text-lg font-semibold">Task</h3>
                        <p>{project.task}</p>
                    </div>
                    <div className="text-darkblue">
                        <h3 className="text-lg font-semibold">Solution</h3>
                        <p>{project.solution}</p>
                    </div>
                    {/* Project images */}
                    <div className="flex flex-wrap mt-4">
                        {project.images.map((image, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1">
                                <Image
                                    src={require(`../../assets/img/${image}`).default}
                                    alt={project.title}
                                    className="object-cover w-full h-32 sm:h-48 rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
