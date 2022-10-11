import React from 'react';
import selfie from "../../assets/selfie.jpeg";

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">About Me</h1>
            < img src={selfie} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;