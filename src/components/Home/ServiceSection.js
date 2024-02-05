import React from 'react';

const ServiceSection = () => {
  return (
    <section className="tf__service pt_40 xs_pt_40 section" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 m-auto">
            <div className="tf__section_heading mb_40">
              <h5 className="has-animation">My Services</h5>
              <h2 className="has-animation">
                Crafting stories through <br />
                design and innovation
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="tf__single_service fade_left" data-triggerid="service">
              <span>
                <img
                  src="assets/svg/web-development.svg"
                  alt="Web Development"
                  className="svg"
                  width="100%" height="100%"
                  title="Web Development Service" loading="lazy"
                />
              </span>
              <h3>Web Development</h3>
              <p>
                Expert in developing custom websites and WordPress solutions. Crafting personalized web experiences with a blend of platform capabilities and unique coding skills.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tf__single_service fade_left" data-triggerid="service">
              <span>
                <img
                  src="assets/svg/seo.svg"
                  alt="SEO"
                  className="svg"
                  width="100%" height="100%"
                  title="SEO Service" loading="lazy"
                />
              </span>
              <h3>SEO</h3>
              <p>
                Proficient in basic SEO techniques, including sitemap creation, keyword, and description optimization. Experienced in managing Google Search Console.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="tf__single_service fade_left" data-triggerid="service">
              <span>
                <img
                  src="assets/svg/web-hosting.svg"
                  alt="Hosting Management"
                  className="svg"
                  width="100%" height="100%"
                  title="Hosting Management Service" loading="lazy"
                />
              </span>
              <h3>Hosting Management</h3>
              <p>
                Skilled in managing hosting platforms, including purchasing domains, handling website hosting, and uploading themes. Proficient in SSL implementation for secure websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
