'use client';
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import projectsData from "../../assets/projects/projects.json";

interface Project {
    title: string;
    type: string;
    description: string;
    coverImage: string;
    languages: string[];
    task: string;
    solution: string;
    time: string;
    images: string[];
}

const ProjectSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("technical"); // Technical is default
    let isImageLeft = true;

    const filteredProjects = projectsData.filter(project => project.type === selectedCategory);

    const openModal = (project: Project) => {
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
                <div>
                    <button
                        onClick={() => setSelectedCategory("technical")}
                        className={`border border-darkorange font-bold py-2 px-4 rounded-l-lg ${selectedCategory === "technical" ? "bg-darkorange text-background" : "bg-background text-darkorange hover:bg-darkorange hover:text-background"}`}
                    >
                        Technical
                    </button>
                    <button
                        onClick={() => setSelectedCategory("personal")}
                        className={`border border-darkorange font-bold py-2 px-4 rounded-r-lg ${selectedCategory === "personal" ? "bg-darkorange text-background" : "bg-background text-darkorange hover:bg-darkorange hover:text-background"}`}
                    >
                        Personal
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {filteredProjects.map((project: Project) => {
                    const card = (
                        <ProjectCard
                            image={require(`../../assets/img/${project.coverImage}`).default}
                            title={project.title}
                            description={project.description}
                            onReadMore={() => openModal(project)}
                            isImageLeft={isImageLeft}
                        />
                    );
                    isImageLeft = !isImageLeft; // Toggle the image position for the next card
                    return card;
                })}
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
