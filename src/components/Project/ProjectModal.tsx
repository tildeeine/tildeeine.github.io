import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

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
        image_description: string[];
    };
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && !isImageModalOpen) {
                onClose();
            }
        };

        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) && !isImageModalOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscapeKey);
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose, isImageModalOpen]);

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        setIsImageModalOpen(true);
    };

    const handleImageModalClose = () => {
        setIsImageModalOpen(false);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30 ${isOpen ? 'block' : 'hidden'}`}>
                <div
                    ref={modalRef}
                    className={`modal-container bg-background p-5 rounded-lg w-11/12 md:w-3/4  xl:w-1/2 h-5/6 max-h-screen overflow-y-auto font-poppins flex flex-col md:flex-row transform transition-all duration-500 ${isOpen ? 'animate-slide-up' : 'animate-slide-down'}`}
                >
                    <div className="p-4 space-y-4 w-full md:w-2/3">
                        <div className="flex justify-between items-start">
                            <h2 className="text-3xl font-bold text-secondary flex-grow">{project.title}</h2>
                            <div className="text-secondary rounded-full text-md ml-4 flex-shrink-0 mt-1">
                                <p>{project.time}</p>
                            </div>
                        </div>
                        <div className="text-primary mb-4 flex items-center text-center text-sm">
                            <ul className="flex flex-wrap w-3/4 pointer-events-none">
                                {project.languages.map(lang => (
                                    <li key={lang} className="bg-selected rounded-full px-3 py-1 mr-2 mb-2">
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                            <div className="ml-auto text-background bg-primary hover:bg-primary-dark rounded-full px-3 py-1 mb-2 w-1/4">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">See project</a>
                            </div>
                        </div>
                        <div className="text-secondary text-sm mb-4">
                            <h3 className="text-md font-semibold">Task</h3>
                            <p className="whitespace-pre-line">{project.task}</p>
                        </div>
                        <div className="text-secondary text-sm mb-4">
                            <h3 className="text-md font-semibold">Solution</h3>
                            <p className="whitespace-pre-line pb-4">{project.solution}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center lg:items-center w-full md:w-1/3 mt-4">
                        {project.images.map((image, index) => (
                            <div key={index} className="p-1 flex flex-wrap justify-center md:justify-end lg:justify-center w-full cursor-pointer" onClick={() => handleImageClick(index)}>
                                <Image
                                    src={require(`../../assets/img/${image}`).default}
                                    alt={project.title}
                                    className="object-cover h-32 lg:h-40 xl:h-48 rounded-lg"
                                    loading="eager"
                                />
                                <p className="text-xs text-left text-secondary mb-2 mt-1">
                                    {project.image_description[index]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isImageModalOpen && (
                <ImageModal
                    images={project.images}
                    descriptions={project.image_description}
                    currentIndex={currentImageIndex}
                    onClose={handleImageModalClose}
                    onNext={handleNextImage}
                    onPrev={handlePrevImage}
                />
            )}
        </>
    );
};

export default ProjectModal;
