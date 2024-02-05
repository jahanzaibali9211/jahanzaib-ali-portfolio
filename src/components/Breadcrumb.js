import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ content, pageTitle }) => {
  return (
    <section className="tf__breadcrumb banner" style={{ background: 'url(assets/images/bg/breadcrumb.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__breadcrum_text">
              <h1>{pageTitle}</h1>
              <ul className="page-breadcrumb">
                {content.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                      <Link to={item.link} className="text_hover_animaiton">
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
