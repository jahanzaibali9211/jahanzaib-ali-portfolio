import React from 'react';

const AboutSection = () => {
  return (
    <section className="tf__about pt_80 pb_40 xs_pt_40 section" id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-7 col-lg-6 col-xl-6">
            <div className="tf__section_heading pb_50 xs_pb_20">
              <h5 className="has-animation">About Me</h5>
              <h2 className="has-animation">
                Crafting digital excellence with passion and precision
              </h2>
            </div>
            <div className="tf__about_text">
              <p className='has-animation'>
                I am Jahanzaib Ali Khan, a dedicated Software Engineer with a knack for developing WordPress websites and crafting custom-coded solutions. My expertise lies in creating personalized web experiences that seamlessly blend platform capabilities with unique coding skills, resulting in impactful and user-friendly outcomes.
              </p>
              <a className="common_btn has-animation" href="/assets/resume/Jahanzaib's_Resume.pdf" download>
                Download CV <i className="fa-solid fa-arrow-down-to-line"></i>
              </a>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-6 col-xl-6">
            <div className="tf__about_img" data-triggerid="about">
              <img
                src="assets/images/me.jpeg"
                alt="Jahanzaib Ali Khan"
                className="img-fluid"
                width="100%" height="100%"
                title="Jahanzaib Ali" loading="lazy"
              />
              <div className="tf__about_img_text">
                <i className="fas fa-chart-pie-alt"></i>
                <div className="tf__about_content">
                  <h4 className='has-animation'>Daily Activity</h4>
                  <p className='has-animation'>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
