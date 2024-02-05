import React from 'react';
import { NavLink } from 'react-router-dom';
import Sideform from './Sideform';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg main_menu">
                <div className="container main_menu_bg">
                    <NavLink className="navbar-brand logo-container" to="/">
                        <img src="assets/images/logo.png" alt="JAHANZAIB" className="img-fluid" width="100%" height="100%" title="Portfolio LOGO" />
                        <h2>JAHANZAIB</h2>
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-sharp fa-regular fa-bars bar_icon"></i>
                        <i className="fa-regular fa-xmark close_icon"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text_hover_animaiton"
                                    to="/"
                                    activeclassname="active"
                                    exact="true"  // Provide a string value, not a boolean
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text_hover_animaiton"
                                    to="/reviews"
                                    activeclassname="active"
                                >
                                    Reviews
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link text_hover_animaiton"
                                    to="/contact-us"
                                    activeclassname="active"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <span
                            className="toggle_icon c-pointer"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <i className="fa-sharp fa-sharp fa-regular fa-bars bar_icon-staggered"></i>
                        </span>
                    </div>
                </div>
            </nav>
            <Sideform />
        </>
    );
};

export default Navbar;
