import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">My Story</h2>
                    <p>I am a computer science graduate from Wichita State University. I have a range of experience working in small startup companies, to large private corporations. In my time as a developer, I have built multiple mobile and web applications. I have also had the opportunity to work with Nvidia's Jetson TX2s and various technologies in developing simulated and real world computer vision mapping software for autonomous vehicles.<br>In my spare time, I enjoy being outdoors playing golf, hiking, fishing, jet skiing, and flying drones! I have recently also picked up vlogging, so check out my youtube for a more in depth look into my life. Thanks for coming!</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">My Experiences</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and applications using multiple different technologies. Professionally, I have used HTML, SCSS, React, TypeScript, and JavaScript. Many of these technologies part of the Ionic framework and React libraries. This website is built in React!</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I graduated from Wichita State with a computer science degree and a minor in math. Through my studies and coursework, I have a strong fundamental of object oriented programming practices, and data structures and algorithms.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Data Engineering</h3>
                    <p>Through past internships and projects, I have experience working on creating data pipelines through cloud technologies. I have familiarity regarding modern technologies such as Boomi, .NET, AWS datalakes, automica, informatica, and denodo.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
