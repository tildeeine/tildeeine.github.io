'use client';
import React from "react";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../../assets/projects/projects.json";



const ProjectSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const openModal = (project: React.SetStateAction<null>) => {
        setCurrentProject(project);
        setModalOpen(true);
    };

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
                        Technical
                    </button>
                    <button className="bg-background border border-darkorange hover:bg-darkorange hover:text-background text-darkorange font-bold py-2 px-4 rounded-r-lg">
                        Personal
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        id={project.id}
                        image={require(`../../assets/img/${project.image}`).default}
                        title={project.title}
                        description={project.description}
                        onReadMore={() => openModal(project)}
                    />
                ))}
                {currentProject && (
                    <ProjectModal
                        project={currentProject}
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                    />
                )}
            </div>

        </section>
    );
}

export default ProjectSection;
