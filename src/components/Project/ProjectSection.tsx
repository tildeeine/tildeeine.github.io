import React from "react";
import ProjectCard from "./ProjectCard";

import homepageImage from '../assets/img/frontphoto.png';

const projects = [
    { id: 1, title: "Secure Blockchain Implementation", description: "implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java", imageUrl: "/path/to/image1.png", readMoreUrl: "/project1", imageAlignment: "left" },
    { id: 2, title: "Ambient Home Security System", description: "implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java", imageUrl: "/path/to/image2.png", readMoreUrl: "/project2", imageAlignment: "right" },
    // Add more projects as needed
];

const ProjectSection: React.FC = () => {
    return (
        <section id='project'>
            <div className="flex flex-wrap justify-center mt-9">
                <div >
                    <button className="bg-background border border-darkorange hover:bg-darkorange hover:text-background text-darkorange font-bold py-2 px-4 rounded-l">
                        Tech Projects
                    </button>
                    <button className="bg-background border border-darkorange hover:bg-darkorange hover:text-background text-darkorange font-bold py-2 px-4 rounded-r">
                        Life Projects
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        readMoreUrl={project.readMoreUrl}
                        imageAlignment={project.imageAlignment}
                    />
                ))}
            </div>

        </section>
    );
}

export default ProjectSection;
