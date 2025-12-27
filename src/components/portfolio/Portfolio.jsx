import React from "react";
import "./Portfolio.css";
import List from "./List";
import Items from "./Items";
import Modal from "../portfolio/details/Modal";
import { projects } from "../../Data";
import { useState } from "react";

const allNavList = ['all', ...new Set(projects.map((project) => project.category))];

const Portfolio = () => {

    const [portfolioItems, setMenuItem] = useState(projects);
    const [navList, setCategories] = useState(allNavList);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItem(projects);
            return;
        }
        const newProjectItems = projects.filter(item => item.category === category);
        setMenuItem(newProjectItems);
    }

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300); // Clear after animation
    };

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title text-cs">Portfolio</h2>
            <p className="section__subtitle">My<span>work</span></p>
            <List list={navList} filterItems={filterItems} />

            <div className="portfolio__container container grid">

                <Items projectItems={portfolioItems} onOpenModal={handleOpenModal} />

            </div>

            <Modal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    );
};

export default Portfolio;