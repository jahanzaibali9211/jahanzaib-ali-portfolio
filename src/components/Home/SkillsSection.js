import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsSection = () => {
    // Set up an array of skills with their corresponding percentages
    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 90 },
        { name: 'Bootstrap', percentage: 90 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'PHP(Core)', percentage: 90 },
        { name: 'MySQL', percentage: 90 },
        { name: 'React JS', percentage: 70 },
        { name: 'MongoDB', percentage: 55 },
    ];

    return (
        <section className="tf__skills pt_40 xs_pt_40 pb_20 xs_pb_20 section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-8 m-auto">
                        <div className="tf__section_heading mb_40">
                            <h5 className="has-animation">EDUCATION & SKILL</h5>
                            <h2 className="has-animation">
                                Showcase of Achievements <br />
                                and Professional Skills
                            </h2>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div 
                            className="tf__single_skills fade_bottom"
                            data-triggerid="skills"
                            data-stagger=".13"
                        >
                            <span>09/2020 - Present</span>
                            <h3>BE-Software Engineering</h3>
                            <p>
                                Pursuing a Bachelor's degree in Software Engineering at PAF-Karachi Institute of Economics and Technology, with a focus on gaining in-depth knowledge of software development and engineering principles. Actively engaged in coursework covering a wide range of subjects, including web development, programming languages, and software design.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="tf__single_skills fade_bottom"
                            data-triggerid="skills"
                            data-stagger=".25"
                        >
                            <span>03/2023 - Present</span>
                            <h3>Web Developer</h3>
                            <p>
                                Worked at Zeetach as a Web Developer, collaborating with cross-functional teams to architect, develop, and maintain visually appealing and high-performance WordPress websites. Proficient in custom coding for website development, WordPress customization, and hosting management. Utilized technologies such as HTML, CSS, Bootstrap, React JS, PHP, and MySQL to create tailored and efficient web solutions.
                            </p>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="tf__single_skills fade_bottom"
                            data-triggerid="skills"
                            data-stagger=".25"
                        >
                            <span>08/2018 - 07/2020</span>
                            <h3>Intermediate Education</h3>
                            <p>
                                Completed my 2nd year of Intermediate Education at DJ Sindh Government Science College. During this period, I gained a solid foundation in science and mathematics, setting the stage for my academic journey and future endeavors.
                            </p>
                        </div>
                    </div>


                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="tf__single_skills fade_bottom"
                            data-triggerid="skills"
                            data-stagger=".25"
                        >
                            <span>07/2021 - 07/2022</span>
                            <h3>Web Designing and Development Course</h3>
                            <p>
                                Completed an intensive course in Web Designing and Development at AP TECH, gaining comprehensive knowledge and practical skills in HTML, CSS, Bootstrap, PHP, and MySQL. Applied acquired skills to build a fully functional e-commerce website, showcasing proficiency in creating dynamic and visually appealing web solutions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {skills && skills.map((skill, index) => (
                        <div className="col-xl-3 col-lg-3" key={index}>
                            <div
                                className="tf__team_skills_bar_single fade_bottom"
                                data-triggerid="skills"
                                data-stagger=".25"
                            >
                                <p>{skill.name}</p>
                                <div style={{ width: '50%', margin: 'auto' }}>
                                    <CircularProgressbar
                                        value={skill.percentage}
                                        text={`${skill.percentage}%`}
                                        styles={buildStyles({
                                            textColor: '#fff',
                                            pathColor: '#55e6a5',
                                            trailColor: 'rgba(255, 255, 255, 0.3)',
                                        })}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
