import React from 'react';
import { Link } from 'react-router-dom';
import testimonials from '../Testimonials';

const TopTwoTestimonials = () => {
    return (
        <section className="tf__testimonial pt_40 xs_pt_40 mb_40 section" id="reviews">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 m-auto mb_30">
                        <div className="tf__section_heading">
                            <h5 className="has-animation">clients review</h5>
                            <h2 className="has-animation">My testimonial</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {testimonials.slice(0, 2).map((testimonial) => (
                        <div key={testimonial.id} className="col-xl-6">
                            <div className="tf__single_testimonial">
                                <div className="img">
                                    <img
                                        src={testimonial.imgSrc}
                                        alt="clients"
                                        className="img-fluid w-100"
                                    />
                                </div>
                                <p className="rating">
                                    {Array.from({ length: testimonial.rating }, (_, index) => (
                                        <i key={index} className="fa-solid fa-star-sharp"></i>
                                    ))}
                                </p>
                                <h3>{testimonial.name}</h3>
                                <h5>{testimonial.position}</h5>
                                <p className="description">{testimonial.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-4">
                    <div className="col text-center">
                        <Link to="reviews" className="common_btn">
                            See More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopTwoTestimonials;
