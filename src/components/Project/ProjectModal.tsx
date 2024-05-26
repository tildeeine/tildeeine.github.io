// ProjectModal.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import profileImage from '../../assets/img/frontphoto.png';

interface ProjectModalProps {
    project: {
        title: string;
        description: string;
        languages: string[];
        task: string;
        solution: string;
        images: StaticImageData[]; // Array of image URLs
        time: string;
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
            <div className="bg-background p-5 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-5/6 max-h-screen font-poppins flex flex-col md:flex-row overflow-hidden" onClick={handleModalContentClick}>
                <div className="p-4 space-y-4 w-full md:w-2/3">
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
                </div>

                {/* Project images */}
                <div className="flex flex-col w-full md:w-1/3 items-center justify-between">
                    {project.images.map((image, index) => (
                        <div key={index} className="p-1 flex justify-center w-full h-1/3">
                            <Image src={require(`../../assets/img/${image}`).default} alt={project.title} className="object-cover w-48 h-32 rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </div>


    );
};

export default ProjectModal;

// {project.images.map((img, index) => (
//     <div key={index} className="relative w-full mb-4" > {/* Set height to control image size */}
//         <Image
//             src={img}
//             alt={`Screenshot ${index + 1}`}
//             layout="fill"
//             objectFit="cover" // Ensure the image covers the area without distortion
//             className="rounded-lg"
//         />
//     </div>
// ))}