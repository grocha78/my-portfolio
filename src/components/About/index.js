import React from 'react';
import selfie from "../../assets/selfie.jpeg";

function About() {
    return (
        <section className='my-5'>
            < img src={selfie} className="my-2" style={{ width: "25%" }} alt="cover" />
            <h1 className="about">About Me</h1>
            <p className="bio">My name is Guadalupe Rocha and I am based out of Houston, TX. I grew up in south Texas, by the border, and moved to Houston to attend college. I have a B.A. in English/Linguistics and am now enrolled in a coding boot camp at Rice University in order to become a full stack web developer.</p>
        </section>
    );
}

export default About;