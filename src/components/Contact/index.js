import React, { Component } from "react";
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="ten columns">
                    <p className="lead">
                    <h1> Feel free to contact me for any work or suggestions below
                    </h1>
                    </p>
                </div>
            </div>
            <div className="row">
                <aside className="eight columns footer-widgets">
                    <div className="widget">
                        <h4>Email :                             
                            <a href="mailto:rochalupe@gmail.com"> rochalupe@gmail.com</a>
                        </h4>
                        <p></p>
                        <h3>
                            <a href="https://docs.google.com/document/d/1VQnikZZN2RepkJbocWq5T0sVMld3mcjTAEHsZEP6ZyU/edit">Click here for a copy of my resume</a>
                          </h3>
                    </div>
                </aside>
            </div>
        </section>
    );
}
}