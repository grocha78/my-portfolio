import React, { Component } from "react";
export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
    return (
        <section id="contact">
            <div className="row section-head">
                <div className="ten columns">
                    <p classname="lead">
                    Feel free to contact me for any work or suggestions below
                    </p>
                </div>
            </div>
            <div className="row">
                <aside className="eight columns footer-widgets">
                    <div className="widget">
                        <h4>Email:                            
                            {resumeData.linkedinId}
                        </h4>
                    </div>
                </aside>
            </div>
        </section>
    );
}
}