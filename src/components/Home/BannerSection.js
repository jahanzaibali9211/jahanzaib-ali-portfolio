import React, { useState, useEffect, useMemo } from 'react';

function BannerSection() {
    const words = useMemo(() => ['Web Developer', 'Software Engineer', 'Problem Solver'], []);

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const updateVisibleIndex = () => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % words.length);
        };

        const headlineElement = document.querySelector('.cd-headline');

        const handleTransitionEnd = () => {
            updateVisibleIndex();
        };

        headlineElement.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            headlineElement.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [visibleIndex, words]);

    return (
        <section
            className="tf__banner banner"
            style={{
                background: 'url(assets/images/bg/banner.jpg)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="container">
                <div className="tf__banner_text text-center">
                    <h1>
                        Hello, I'm Jahanzaib<br />
                        <span className="cd-headline clip">
                            <span className="cd-words-wrapper">
                                {words.map((word, index) => (
                                    <b
                                        key={index}
                                        className={index === visibleIndex ? 'is-visible' : 'is-hidden'}
                                    >
                                        {word}
                                    </b>
                                ))}
                            </span>
                        </span>
                    </h1>
                    <p>
                        I'm a passionate and results-driven Web Developer, constantly striving to enhance my skills and deliver high-quality solutions. I enjoy crafting innovative and user-friendly web experiences.
                    </p>
                    <ul className="justify-content-center">
                        <li>
                            <a className="common_btn1 has-animation" href="https://web.whatsapp.com/send?phone=+923012571742&text=" target='_blank' rel="noreferrer">
                                <i className="fa-solid fa-phone"></i>
                                Get in Touch
                            </a>
                            <a className="common_btn has-animation" href="/assets/resume/Jahanzaib's_Resume.pdf" download>
                                Download CV <i className="fa-solid fa-arrow-down-to-line"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default BannerSection;
