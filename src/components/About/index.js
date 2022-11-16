import React from 'react';
import selfie from "../../assets/selfie.jpeg";

function About() {
    return (
        <section className='my-5'>
            < img src={selfie} className="my-2" style={{ width: "20%" }} alt="cover" />
            <h2 className="about">About Me</h2>
            <p className="bio">My name is Guadalupe Rocha and I am based out of Houston, TX. I grew up in south Texas, by the border, and moved to Houston to attend college. 
            I have a B.A. in English/Linguistics from the University of Houston and recently earned a certificate in full stack development from the Rice University Coding Bootcamp, 
            with newly developed skills in JavaScript, CSS, React.js, and responsive web design. I’m known as an innovative problem solver that is passionate about developing apps, 
            with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I worked on a team of 3 to 
            develop a single-page MERN app that helps individuals track their food intake and health options on a daily basis. I’m excited to leverage my skills as part of a fast-paced, 
            quality-driven team to build better experiences on the web. 
</p>
        </section>
    );
}

export default About;