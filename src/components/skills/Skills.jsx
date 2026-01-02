import React from "react";
import './Skills.css'
import { skills, additionalSkills } from "../../Data";


const Skills = () => {
    return (
        <section className='skills section' id='skills'>
            <h2 className="section__title text-cs">Professional Skills</h2>
            <p className="section__subtitle">My <span>Talents</span></p>
            <div className="skills__container container grid">
                {skills.map(({ name, percentage, description }, index) => {
                    return (
                        <div className="skills__item" key={index}>
                            <div className="skills_titles">
                                <h3 className="skills__name">{name}</h3>

                            </div>
                            <p className="skills__description">{description}</p>
                            <div className="skills__bar">
                                <div className="skills__bar_line">
                                    <span className="skills__percentage" style={{ width: `${percentage}%` }}>
                                        <span></span>

                                    </span>
                                </div>
                                <span className="skills__number">{percentage}<span>%</span></span>
                            </div>
                        </div>
                    )
                })
                }
            </div>


            <div className="skills__techstack container grid">
                <div className="skills__item" style={{ gridColumn: '1 / -1' }}>
                    <p className="section__subtitle" >Tech <span>Stack</span></p>

                    <div className="skills__marquee">
                        <div className="skills__marquee-content">
                            {additionalSkills.map((skill) => (
                                <div className="skills__marquee-item" key={skill.id}>
                                    <span className="skills__icon">{skill.icon}</span>
                                    <span className="skills__tech-name">{skill.name}</span>
                                </div>
                            ))}
                            
                            {additionalSkills.map((skill) => (
                                <div className="skills__marquee-item" key={`dup-${skill.id}`}>
                                    <span className="skills__icon">{skill.icon}</span>
                                    <span className="skills__tech-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Skills;