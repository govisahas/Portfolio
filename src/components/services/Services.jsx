import React from "react";
import "./Services.css";
import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">What I do</h2>
            <p className="section__subtitle">
                My <span>Works</span>
            </p>

            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="services__container container swiper">
                {services.map(({ name, title, description }, index) => {
                    return (
                        <SwiperSlide className="services__item card card-one" key={index}>
                            <span className="services__subtitle text-cs">{name}</span>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                            {/* <a href="" className="link">More Details
                                <FaArrowRight className="link__icon"></FaArrowRight>
                            </a> */}
                            <img src={shapeTwo} alt="" className="shape c__shape" />
                        </SwiperSlide>
                    )

                })}
            </Swiper>
        </section>
    );
};

export default Services;