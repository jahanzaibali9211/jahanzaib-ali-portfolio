import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Sideform = () => {
    const form = useRef();
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isThankYouVisible, setIsThankYouVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g7rqzpn', 'template_4fwq6xp', form.current, {
                publicKey: 'YWqp5A9-9wkksvSvD',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsFormVisible(false);
                    setIsThankYouVisible(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        e.target.reset();
    };
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight">
            <div className="offcanvas-header">
                <Link className="offcanvas-logo" to="/">
                    <h2>JAHANZAIB</h2>
                </Link>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    <i className="fa-regular fa-xmark"></i>
                </button>
            </div>
            <div className="offcanvas-body">
                <div className="tf__design_form offcanvas_form">
                    <div className="offcanvas-content-box">
                        <h3 className="offcanvas_title">About us</h3>
                        <p>
                            I'm a passionate and results-driven Web Developer, constantly striving to enhance my skills and deliver high-quality solutions. I enjoy crafting innovative and user-friendly web experiences.
                        </p>
                    </div>
                    {isFormVisible && (
                        <div className="offcanvas_contact_form">
                            <h4 className="offcanvas_title">Get In Touch</h4>
                            <form ref={form} onSubmit={sendEmail}>
                                <input className="" type="text" name="user_name" placeholder="Your Name" />
                                <input className="" type="email" name="user_email" placeholder="Your Email" />
                                <textarea className="" rows="4" name="message" placeholder="Your Message"></textarea>
                                <button type="submit" className="common_btn">Submit Now</button>
                            </form>
                        </div>
                    )}
                    {isThankYouVisible && (
                        <div className="tf__design_form">
                            <h2>Thank You!</h2>
                            <p>Your message has been sent successfully.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sideform;
