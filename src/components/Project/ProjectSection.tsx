'use client';
import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ToggleButtons from "../ToggleButtons";
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
    link: string;
    image_description: string[];
}

const ProjectSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("technical"); // Technical is default
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    let isImageLeft = true;

    const filteredProjects = projectsData.filter(project => project.type === selectedCategory);

    const isLargeScreenQuery = useMediaQuery({ query: '(min-width: 1024px)' });

    useEffect(() => {
        setIsLargeScreen(isLargeScreenQuery);
    }, [isLargeScreenQuery]);

    const openModal = (project: Project) => {
        setCurrentProject(project);
        setModalOpen(true);
    };

    const handleCategoryChange = (category: string) => {
        if (category !== selectedCategory) {
            setIsTransitioning(true);
            setTimeout(() => {
                setSelectedCategory(category);
                setIsTransitioning(false);
            }, 300); // Adjust the timeout duration to match the animation duration
        }
    };


    return (
        <section id='projects'>
            <div className="mt-20 py-10 w-4/5 mx-auto">
                <h1 className="text-4xl font-poppins text-primary text-left">
                    Projects
                </h1>
            </div>
            <div className="w-4/5 mx-auto">
                <ToggleButtons
                    selectedCategory={selectedCategory}
                    setSelectedCategory={handleCategoryChange}
                />
            </div>
            <div className={`flex flex-wrap justify-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                {filteredProjects.map((project: Project, index: number) => {
                    const card = (
                        <ProjectCard
                            key={index}
                            image={require(`../../assets/img/${project.coverImage}`).default}
                            title={project.title}
                            description={project.description}
                            onReadMore={() => openModal(project)}
                            isImageLeft={isImageLeft}
                            isLargeScreen={isLargeScreen}
                        />
                    );
                    isImageLeft = !isImageLeft;
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
