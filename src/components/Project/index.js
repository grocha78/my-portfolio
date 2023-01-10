import React, { Component } from "react";
export default class Project extends Component {
    render() {
        let resumeData = this.props.resumeData;
    return (
        <section id="portfolio">
        <div className="row">
            <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work Samples</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
              resumeData.portfolio && resumeData.portfolio.map((item) => {
                return(
                  <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} alt="" className="item-imgurl"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <a href={item.url}>{item.url}</a>
                        </div>
                      </div>                   
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}