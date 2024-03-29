import React from 'react';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <footer className="footer" id="footer">
                <div className="footer-container">
                    <div className="pt_60 xs_pt_60 sm_pt_60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div
                                        className="tf__footer_content fade_right"
                                        data-trigerid="footer"
                                        data-stagger=".25"
                                    >
                                        <div className="icon">
                                            <div className="icon-contianer">
                                                <img
                                                    src="assets/svg/map.svg"
                                                    alt="footer"
                                                    className="img-fluid svg"
                                                    width="100%" height="100%"
                                                    title="Address" loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Address</h3>
                                            <p>Malir, Karachi, Pakistan</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className="tf__footer_content fade_right"
                                        data-trigerid="footer"
                                        data-stagger=".25"
                                    >
                                        <div className="icon">
                                            <div className="icon-contianer">
                                                <img
                                                    src="assets/svg/phone.svg"
                                                    alt="footer"
                                                    className="img-fluid svg"
                                                    width="100%" height="100%"
                                                    title="Contact" loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Contact</h3>
                                            <a href='https://web.whatsapp.com/send?phone=+923012571742&text=' target='_blank' rel="noreferrer">+92 301 2571742</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className="tf__footer_content fade_right"
                                        data-trigerid="footer"
                                        data-stagger=".25"
                                    >
                                        <div className="icon">
                                            <div className="icon-contianer">
                                                <img
                                                    src="assets/svg/envelope.svg"
                                                    alt="footer"
                                                    className="img-fluid svg"
                                                    width="100%" height="100%"
                                                    title="Email" loading="lazy"
                                                />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h3>Send us email</h3>
                                            <a href="mailto:m.jahanzaiba.k@gmail.com">m.jahanzaiba.k@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="tf__footer_copyright">
                                        <p>Jahanzaib Ali - Portfolio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
