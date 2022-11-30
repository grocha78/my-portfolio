import React, { Component } from 'react';
import Header from "./components/Header"
import Project from "./components/Project"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
// import Navigation from "./components/Navigation"
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Project resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
    </div>
    );
  }
}

export default App;
