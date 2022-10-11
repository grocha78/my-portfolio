import React from "react";
import zestyinvesty from "../../assets/zestyinvesty.png";
import artgarage from "../../assets/artgarage.png";
import techblog from "../../assets/techblog.png";
import weatherapp from "../../assets/weatherapp.png";
import perfectday from "../../assets/perfectday.png";

function Project() {
    const projects = [
        {
            name: "Zesty Investy",
            imgsrc: zestyinvesty,
            link: "https://grocha78.github.io/Zesty-Investy-Calculonesty/",
            repo: "https://github.com/grocha78/Zesty-Investy-Calculonesty"
        },
        {
            name: "Art Garage",
            imgsrc: artgarage,
            link: "https://art-garage-app.herokuapp.com/",
            repo: "https://github.com/BigEVK/ArtGarage"
        },
        {
            name: "Tech Blog",
            imgsrc: techblog,
            link: "https://not-another-tech-blog-78.herokuapp.com/",
            repo: "https://github.com/grocha78/Not-Another-Tech-Blog"
        },
        {
            name: "Weather App",
            imgsrc: weatherapp,
            link: "https://grocha78.github.io/How-Is-It-Over-There/",
            repo: "https://github.com/grocha78/How-Is-It-Over-There"
        },
        {
            name: "Perfect Day",
            imgsrc: perfectday,
            link: "https://grocha78.github.io/Just-Another-Day/",
            repo: "https://github.com/grocha78/Just-Another-Day"
        }
    ];
    return (
        <div>
            <h2>My Work</h2>
            <div className="gallery"></div>
            {projects.map((project) => (
                <div key={project.name}>
                    <div className="card"
                    style={{ backgroundImage: `url(${project.imgsrc})` }}>
                        <a href={project.link}>{project.name}</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;