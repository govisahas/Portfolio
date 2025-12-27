import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import './Modal.css';

const Modal = ({ project, isOpen, onClose }) => {
  
    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
          
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    const {
        img,
        title,
        category,
        fullDescription,
        description,
        technologies,
        githubLink,
        figmaLink,
        additionalImages
    } = project;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                   
                    <motion.div
                        className="modal__backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                  
                    <motion.div
                        className="modal__wrapper"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <div className="modal__content">
                           
                            <button
                                className="modal__close"
                                onClick={onClose}
                                aria-label="Close modal"
                            >
                                <FaTimes />
                            </button>

                         
                            <div className="modal__image-wrapper">
                                <img src={img} alt={title} className="modal__image" />
                            </div>

                         
                            <div className="modal__info">
                                <span className="modal__category text-cs">{category}</span>
                                <h2 className="modal__title text-cs">{title}</h2>

                                <div className="modal__description">
                                    <p>{fullDescription || description}</p>
                                </div>

                        
                                {technologies && technologies.length > 0 && (
                                    <div className="modal__technologies">
                                        <h3 className="modal__subtitle">Technologies Used</h3>
                                        <div className="modal__tech-list">
                                            {technologies.map((tech, index) => (
                                                <span key={index} className="modal__tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                              
                                {(githubLink || figmaLink) && (
                                    <div className="modal__links">
                                        {githubLink && (
                                            <a
                                                href={githubLink}
                                                className="modal__link modal__link--github"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub />
                                                <span>View on GitHub</span>
                                                <FaExternalLinkAlt className="modal__link-icon" />
                                            </a>
                                        )}
                                        {figmaLink && (
                                            <a
                                                href={figmaLink}
                                                className="modal__link modal__link--figma"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <SiFigma />
                                                <span>View on Figma</span>
                                                <FaExternalLinkAlt className="modal__link-icon" />
                                            </a>
                                        )}
                                    </div>
                                )}

                             
                                {additionalImages && additionalImages.length > 0 && (
                                    <div className="modal__gallery">
                                        <h3 className="modal__subtitle">More Images</h3>
                                        <div className="modal__gallery-grid">
                                            {additionalImages.map((image, index) => (
                                                <img
                                                    key={index}
                                                    src={image}
                                                    alt={`${title} ${index + 1}`}
                                                    className="modal__gallery-image"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Modal;
