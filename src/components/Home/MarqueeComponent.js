import React from 'react';

const MarqueeComponent  = () => {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React js',
        'PHP',
        'Bootstrap',
        'Responsive Design',
        'Git',
        'Web Development',
    ];

    return (
        <div className="tf__brand mt_40 xs_mt_40">
            <div className="row">
                <div className="col-12">
                    <div className="marquee_animi">
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>* {skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarqueeComponent ;
