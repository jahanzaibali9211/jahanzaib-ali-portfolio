import React from 'react';

const PortfolioSection = () => {
    const handleItemClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <section className="tf__portfolio mt_40 xs_mt_40 section" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-9 mb_20">
                        <div className="tf__section_heading">
                            <h5 className="has-animation">My Recent Portfolio</h5>
                            <h2 className="has-animation">
                                Elevate your brand to new <br />
                                heights with my portfolio expertise
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {/* Project 1 */}
                    <div className="col-xl-8 col-md-6">
                        <div
                            className="tf__portfolio_item play_btn"
                            onClick={() => handleItemClick('https://proudwritings.com/')}
                            data-cursor="See <br> Project"
                        >
                            <img
                                src="assets/images/portfolio/proudwriting.png"
                                alt="Project 1"
                                className="img-fluid"
                                width="100%" height="100%"
                                title="ProUDWritings - Project" loading="lazy"
                            />

                            <div className="text">
                                <h4>ProUDWritings - Academic Assistance</h4>
                                <p>Built using ReactJS, the website leverages props to dynamically fetch and display blog data. The implementation of React Router DOM ensures smooth navigation.</p>
                            </div>

                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="tf__portfolio_item play_btn"
                            onClick={() => handleItemClick('https://dezignmart.co.uk/')}
                            data-cursor="See <br> Project"
                        >
                            <img
                                src="assets/images/portfolio/dezignmart.png"
                                alt="Project 2"
                                className="img-fluid"
                                width="100%" height="100%"
                                title="Dezignmart - Project" loading="lazy"
                            />
                            <div className="text">
                                <h4>Dezignmart - Crafting Digital Experiences</h4>
                                <p>Using HTML, CSS, JS, Bootstrap, PHP, I developed Dezignmart for unique web and creative solutions.</p>
                            </div>

                        </div>
                    </div>
                    {/* Project 3 */}
                    {/* <div className="col-xl-12 col-md-6">
                        <div
                            className="tf__portfolio_item play_btn"
                            data-cursor="See <br> Project"
                            onClick={() => handleItemClick('https://proukwritings.co.uk/')}
                        >
                            <img
                                src="assets/images/portfolio/prouk.webp"
                                alt="Project 3"
                                className="img-fluid"
                                width="100%" height="100%"
                                title="ProUKWritings - Project" loading="lazy"
                            />
                            <div className="text">
                                <h4>ProUKWritings - Educational Help Website</h4>
                                <p>Developed and customized a WordPress-based educational assistance website. Integrated Stripe payment method and implemented custom CSS and JavaScript coding to meet user requirements.</p>
                            </div>

                        </div>
                    </div> */}
                    {/* Project 4 */}
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="tf__portfolio_item play_btn"
                            data-cursor="See <br> Project"
                            onClick={() => handleItemClick('https://onlineexampros.com/')}
                        >
                            <img
                                src="assets/images/portfolio/onlineexam.png"
                                alt="Project 4"
                                className="img-fluid"
                                width="100%" height="100%"
                                title="OnlineExamPros - Project" loading="lazy"
                            />
                            <div className="text">
                                <h4>OnlineExamPros - Academic Help Website</h4>
                                <p>Developed WordPress websites using themes, templates, and plugins. Implemented custom CSS and JavaScript coding to address specific organizational needs</p>
                            </div>
                        </div>
                    </div>
                    {/* Project 5 */}
                    <div className="col-xl-8 col-md-6">
                        <div
                            className="tf__portfolio_item play_btn"
                            onClick={() => handleItemClick('https://ecomwizards.co/')}
                            data-cursor="See <br> Project"
                        >
                            <img
                                src="assets/images/portfolio/ecom1.png"
                                alt="Project 5"
                                className="img-fluid"
                                width="100%" height="100%"
                                title="Ecomwizards - Project" loading="lazy"
                            />
                            <div className="text">
                                <h4>Ecomwizards - Elevating Digital Presence</h4>
                                <p>Transformed Ecomwizards into a dynamic WordPress site, seamlessly integrating features like Calendly for enhanced user engagement.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
