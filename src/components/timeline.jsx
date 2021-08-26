import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer<span>  02/2019 - CURRENT</span></h2>
                        <p>Developed 2 primary web applications capable of handling patient health care information to EHR systems, scheduling data for health care offices, and VR frame try on for patients and optometrists. Leveraged the Ionic framework to create seamless user experiences through native phone APIs and Ionic-built APIs. Developed, integrated, and tested REST APIs through Ruby on Rails.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Intern<span>  05/2018 - 08/2018</span></h2>
                        <p>Modernized the data pipeline process for badging events at on-site facilities to provide real time data and visualizations for business leaders through the use of .NET, Informatica, Denodo, Dell Boomi, PowerBI, and other tools. Transformed different company products through Boomi, Informatica, and .NET to modernize company technologies. Collaborated with the Operations Data capabilities team to understand and develop accurate scoring models with h2o.ai. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Student Software Developer<span>  01/2018 - 02/2019</span></h2>
                        <p>Software developer at Ennovar Software Labs, working with a variety of languages to create new apps for emerging and existing companies that include HTML, CSS, TypeScript, Ionic, React, React-native, angular, and ruby on rails. I work heavily in front end development specializing in mobile apps and websites, while also finding time to continue my education on backend development in the pursuit of being a full-stack developer.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>IT Support<span> 05/2017 - 01/2018</span></h2>
                        <p>I worked as a service desk representative for the City of Wichita. I was responsible for remote and onsite technology repairs for over 9000+ technology items for the City that include computers, laptops, monitors, printers, scanners,... etc for hundreds of business units including Fire, Police, Law, and Public Works. This included documentation for all repairs through Cherwell portals. I was also responsible for imaging and replacing bad hard drives. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelors of Science in Computer Science<span>  2016-2020</span></h2>
                        <p>I have completed my undergraduate degree in computer science with a minor in mathematics. Through 4 years, I was able to learn about design & analysis of algorithms, databases, discrete mathematics, and more! I was also involved in several student organizations including Engineering Ambassadors, undergraduate peer partner program, Beta Theta Pi, and Wichita State E-Sports.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
