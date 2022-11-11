import React from 'react';
import selfie from "../../assets/selfie.jpeg";

function About() {
    return (
        <section className='my-5'>
            < img src={selfie} className="my-2" style={{ width: "20%" }} alt="cover" />
            <h2 className="about">About Me</h2>
            <p className="bio">My name is Guadalupe Rocha and I am based out of Houston, TX. I grew up in south Texas, by the border, and moved to Houston to attend college. 
            I have a B.A. in English/Linguistics from the University of Houston and just earned a certificate in Full Stack Web Development from the Rice University Coding Boot Camp.
            As a front-end web developer, I am leveraging my background in linguistics to provide unique perspectives on how end-users interact with websites and software platforms. 
            I am an innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. My strengths are in creativity, teamwork, 
            and building projects from ideation to execution.</p>
        </section>
    );
}

export default About;