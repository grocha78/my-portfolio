import React from "react";

function Resume() {
    return (
        <div className="resume">
            <h2>Acquired Skills</h2>
            <ul>
                <div>
                <h3>Front-end Proficiencies</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Jquery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                </div>
                <div>
                <h3>Back-end Proficiencies</h3>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                </div>
            </ul>
            <br></br>
            <a className="download" href="https://docs.google.com/document/d/1VQnikZZN2RepkJbocWq5T0sVMld3mcjTAEHsZEP6ZyU/edit?usp=sharing">Click here to download my resume!</a>
        </div>
    );
}

export default Resume;