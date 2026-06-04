import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
           <div className="footer__container container grid">
                        <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/govindani-sahasrika" className="footer__social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/govisahas" className="footer__social-link">
                            <FaGithub />
                        </a>

                    </div>
                     <p className="footer__copyright text-cs"> &copy; 2026 Sahasrika. All rights reserved.</p>
                    
           </div>
        </footer>
    );
};

export default Footer;