import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
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
    <section className="tf__design mt_40 xs_mt_40 mb_40 xs_mb_40" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tf__design_text">
              <h2 className="has-animation">Contact <span>Me</span></h2>
              <p className="fade_left">
                If you're looking to get in touch, feel free to drop me a message. Whether it's for a potential project, collaboration, or just a friendly chat, I'm always open to connecting with like-minded individuals.
              </p>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div
                  className="tf__design_counter fade_left"
                  data-triggerid="contact"
                >
                  <span className="icon">
                    <img
                      src="assets/svg/complete-project.svg"
                      alt="Projects Completed"
                      className="img-fluid svg"
                      width="100%" height="100%"
                      title="Projects Completed"
                      loading="lazy"
                    />
                  </span>
                  <h3><span className="counter">50</span>+</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div
                  className="tf__design_counter fade_left"
                  data-triggerid="contact"
                >
                  <span className="icon">
                    <img
                      src="assets/svg/client-review.svg"
                      alt="Client Reviews"
                      className="img-fluid svg"
                      width="100%" height="100%"
                      title="Client Reviews"
                      loading="lazy"
                    />
                  </span>
                  <h3><span className="counter">20</span>+</h3>
                  <p>Client Reviews</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            {isFormVisible && (
              <div className="tf__design_form">
                <h2 className="has-animation">Get In Touch</h2>
                <p className="fade_bottom">
                  For inquiries, collaboration opportunities, or any other information, feel free to reach out. I'm excited to hear from you!
                </p>
                <form className="fade_bottom" ref={form} onSubmit={sendEmail}>
                  <input className="" type="text" name="user_name" placeholder="Your Name" />
                  <input className="" type="email" name="user_email" placeholder="Your Email" />
                  <input className="" type="text" placeholder="Phone Number" />
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
    </section>
  );
};

export default ContactSection;
