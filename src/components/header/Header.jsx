import React from 'react';
import './header.css';
import { links } from '../../Data';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

const getStorageTheme = () => {
    let theme = "light-theme";
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme');
    }
    return theme;
}

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme());

    const scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    const changeNavbar = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    const toggleTheme = () => {
       if(theme === 'light-theme'){
        setTheme('dark-theme');
       }else{
        setTheme('light-theme');
       }
       
    };

    

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        }
    }, [])

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);

    }, [showMenu])

    useEffect(() => {
        document.documentElement.className=theme;
        localStorage.setItem('theme', theme);
    }, [theme])


    return (
        <header className={scrollNav ? "header scroll-nav" : "header"}>
            <nav className="nav">
                <Link to="home" onClick={scrollToTop} className="nav__logo text-cs">Sahasrika</Link>
                <div className={showMenu ? "nav__menu active" : "nav__menu"}>
                    <div className="nav__data">
                        <ul className="nav__list">
                            {links.map(({ name, path }, index) => {
                                return (
                                    <li className="nav__item" key={index}>
                                        <Link
                                            activeClass="active-link"
                                            to={path}
                                            spy={true}
                                            hashSpy={true}
                                            smooth={true}
                                            offset={-80}
                                            duration={500}
                                            className="nav__link text-cs"
                                            onClick={() => setShowMenu(false)}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className="header__socials">
                            <a href="https://www.linkedin.com/in/govindani-sahasrika" className="header__social-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/govisahas" className="header__social-link">
                                <FaGithub />
                            </a>

                        </div>

                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggler" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>

                    <div className={showMenu ? "nav__toggle animate-toggle" : "nav__toggle"} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
