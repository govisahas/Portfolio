import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Items = ({ projectItems, onOpenModal }) => {
    return (
        <>
            <AnimatePresence>
                {projectItems.map((projectItem) => {
                    const { id, img, category, title, description } = projectItem;
                    return (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio__items card card-two"
                            key={id}
                        >
                            <div className="portfolio__img-wrapper">
                                <img src={img} alt="" className="portfolio__img" />
                            </div>
                            <span className="portfolio__category text-cs">{category}</span>
                            <h3 className="portfolio__title">{title}</h3>
                            <p className="portfolio__description">{description}</p>
                            <button
                                onClick={() => onOpenModal(projectItem)}
                                className="link"
                            >
                                See Details
                                <FaArrowRight className="link__icon"></FaArrowRight>
                            </button>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </>
    )
}

export default Items;


