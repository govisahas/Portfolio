import React from "react";
import "./Experiences.css";
import { experiences } from "../../Data";


const Experiences = () => {
    return (
        <section className="experiences section" id="experiences">
            <h2 className="section__title">My Experiences</h2>
            <p className="section__subtitle">
                My <span>Experiences</span>
            </p>



            <div className="experiences__container container">
                {experiences.map(({ title, company,description,date }, index) => {
                    return (
                        <div className="experiences__item card card-one" key={index}>
                            <h3 className="experiences__title">
                                {title} <span className="experiences__company">- {company}</span>
                            </h3>
                            <span className="experiences__date">{date}</span>
                            <ul className="experiences__description">
                                {description.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>


                        </div>
                    )


                })}
            </div>

        </section>
    );
};

export default Experiences;