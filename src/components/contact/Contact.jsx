import React from "react";
import './Contact.css';
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaLinkedinIn } from 'react-icons/fa'
import axios from "axios";



const Contact = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        axios.post("https://api.sheetbest.com/sheets/34b50e54-213b-4840-8cf7-d88ef13b7a65", form).then((response) => {
            setForm({
                name: '',
                email: '',
                subject: '',
                message: '',
            })


            console.log("success")
        }).catch((error) => {
            console.log(error);

        });
    }
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contact</h2>
            <p className="section__subtitle">Let's<span>Get in touch</span></p>
            <div className="contact__container container grid">
                <div className="contact_content">

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">govindani2000@gmail.com</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaPhone />
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+94 716694654</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaLinkedinIn />
                        </span>
                        <h3 className="contact__card-title">Linkedin</h3>
                        <p className="contact__card-data">govindani2000@gmail.com</p>
                    </div>

                </div>

                <form action="" className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Full Name</label>
                            <input type="text"
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                className="contact__form-input" required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">Your Email</label>
                            <input type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="contact__form-input" required />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">Your Subject</label>
                        <input type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="contact__form-input" required />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">Your Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            className="contact__form-input" required></textarea>
                    </div>

                    <div className="contact__submit">
                        <button type="submit"

                            className="btn text-cs">Send Message</button>
                    </div>

                </form>

            </div>

        </section>
    )
}


export default Contact;