import React from 'react';

const SubscribeComponent = () => {
    return (
        <div className="tf__subscribe" style={{ background: 'url(assets/images/bg/subscribe.jpg)' }}>
            <div className="tf__subscribe_overlay pt_115 xs_pt_75 pb_120 xs_pb_80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-10 m-auto">
                            <div className="tf__subscribe_text">
                                <h3 className="has-animation">SUBSCRIBE MY NEWSLETTER</h3>
                                <form action="#" className="fade_bottom">
                                    <input type="text" placeholder="Enter Your Email" />
                                    <button type="submit" className="common_btn">Notify Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeComponent;
