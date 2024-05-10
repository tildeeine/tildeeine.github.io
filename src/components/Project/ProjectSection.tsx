import React from "react";
import ProjectCard from "./ProjectCard";
import blockChainImage from '../../assets/img/block.jpg';
import ambintImage from '../../assets/img/ambient.jpg';
import homeImage from '../../assets/img/home.jpg';

const projects = [
    { id: 1, title: "Secure Blockchain Implementation", description: "implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java", image: blockChainImage, readMoreUrl: "/project1", imageAlignment: 'left' },
    { id: 2, title: "Ambient Home Security System", description: "implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java", image: ambintImage, readMoreUrl: "/project2", imageAlignment: 'right' },
    { id: 3, title: "Homepage", description: "implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java", image: homeImage, readMoreUrl: "/project2", imageAlignment: 'left' },
];

const ProjectSection: React.FC = () => {
    return (
        <section id='projects'>
            <div className="mt-20 py-10 w-4/5 mx-auto">
                <h1 className="text-4xl font-poppins text-darkorange text-left">
                    Projects
                </h1>
            </div>
            <div className="flex flex-wrap justify-right w-4/5 mx-auto">
                <div >
                    <button className="bg-background border border-darkorange hover:bg-darkorange hover:text-background text-darkorange font-bold py-2 px-4 rounded-l-lg">
                        Tech Projects
                    </button>
                    <button className="bg-background border border-darkorange hover:bg-darkorange hover:text-background text-darkorange font-bold py-2 px-4 rounded-r-lg">
                        Life Projects
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        readMoreUrl={project.readMoreUrl}
                    />
                ))}
            </div>

        </section>
    );
}

export default ProjectSection;
