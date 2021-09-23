import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

export const ResumePageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className="columns">
      <div className="column has-background-white">
        <section className="section">
          <div className="columns is-align-items-center">
            <figure className="column is-narrow">
              <div className="image is-128x128" style={{margin: '0 auto'}}>
                <img
                  className="is-rounded"
                  src="https://media-exp1.licdn.com/dms/image/C5103AQFwReuBcnRahQ/profile-displayphoto-shrink_200_200/0/1516952059931?e=1632355200&v=beta&t=hu2t5eQPkoNJjATj2zXK9vz6ARNdaBbCOh4rVeHoal0"
                  alt="Krestian Weken Picture"
                />
              </div>
            </figure>
            <div className="column">
              <div className="resume-name has-text-centered-mobile">
                <h1 className="is-size-1">Krestian Weken</h1>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="columns is-multiline is-mobile">
            <div className="column is-half">
              <div>
                <h6 className="is-size-6 has-text-weight-semibold">Phone</h6>
                <div className="content is-small">
                  <a href="tel:6285240166691">+62 852 401 66691</a>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div>
                <h6 className="is-size-6 has-text-weight-semibold">Web</h6>
                <div className="content is-small">
                  <a href="https://krestian.website">krestian.website</a>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div>
                <h6 className="is-size-6 has-text-weight-semibold">Email</h6>
                <div className="content is-small">
                  <a href="mailto:chrisk8er@gmail.com">chrisk8er@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div>
                <h6 className="is-size-6 has-text-weight-semibold">Location</h6>
                <div className="content is-small">
                  <p className="">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-presentation">
          <p>
            Hi there, <span className="has-text-weight-bold">I’m a software developer</span>. Worked 8 years as a full-stack developer for creating websites and software. Strong hold on Typescript/Javascript programming, but also knows some basic of PHP, C++, C# and Java language. I also good at UI/UX Design, database design, optimizing/testing software, networking and pentesting. I'm quick learner, good coder, and self-directed. Consistent updating self with the emerging trends in the industry. I can work on a team with interpersonal skills and prossess a flexible and detail oriented attitude.
          </p>
        </section>

        <section className="section column">
          <h3 className="section-title experience-title is-size-4 is-uppercase has-text-primary has-text-weight-bold mb-3">
            Hobbies
          </h3>
          <div className="">
            <p>
              I love skateboarding, drawing, coding, creating and learning new things and solving problems.
            </p>
          </div>
        </section>

        <section className="section contact-social">
          <div className="is-flex is-flex-direction-row">
            <ul className="list-titles has-text-weight-bold">
              <li className="mb-3">LinkedIn</li>
              <li className="mb-3">Facebook</li>
              <li className="mb-3">Instagram</li>
            </ul>

            <ul className="list-content">
              <li className="mb-3">
                <a href="https://id.linkedin.com/in/krestian-weken">
                  krestian-weken
                </a>
              </li>
              <li className="mb-3">
                <a href="https://fb.com/chrisk8er">chrisk8er</a>
              </li>
              <li className="mb-3">
                <a href="https://instagram.com/chrisk8er">@chrisk8er</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
      
      <div className="column is-three-fifths has-background-dark">
        <section className="section ">
          <h3 className="experience-title is-size-4 is-uppercase has-text-primary has-text-weight-bold mb-3">
            Experience
          </h3>

          <div className="experience-wrapper">
            <div className="columns">
              <div className="company-wrapper column is-one-third">
                <p className="time has-text-grey-light is-size-7">
                  August 2020 - Present
                </p>
                <h4 className="experience-title is-size-5 has-text-white">
                  PT. Sakti Makmur Pratama
                </h4>
                <h5 className="is-size-7 has-text-light">Full-Stack Developer</h5>
              </div>

              <div className="job-wrapper column">
                <div className="company-description">
                  <p className="has-text-grey-light">
                    As a full-stack developer, I have created several projects internally as well as for their clients. And uses several new technologies such as TypeORM, NestJS, Figma, React, NextJs, Gatsby, Leaflet, and others to create APIs, UI/UX, and Front-end Applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="company-wrapper column is-one-third">
                <p className="time has-text-grey-light is-size-7">
                  August 2018 - August 2020
                </p>
                <div className="experience-title is-size-5 has-text-white">
                  PT. Jasnita Telekomindo, Tbk
                </div>
                <h5 className="is-size-7 has-text-light">Front-End Developer</h5>
              </div>

              <div className="job-wrapper column">
                <div className="company-description">
                  <p className="has-text-grey-light">
                  As a front-end developer, I have created several internal projects using React, React Native and others for the Front-end applications. I am also responsible for designing the UI/UX using Sketch, Photoshop, and Illustrator.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="company-wrapper column is-one-third">
                <p className="time has-text-grey-light is-size-7">
                  August 2017 - August 2018
                </p>
                <div className="experience-title is-size-5 has-text-white">
                  PT. Jasnita Telekomindo, Tbk
                </div>
                <h5 className="is-size-7 has-text-light">System Administrator</h5>
              </div>

              <div className="job-wrapper column">
                <div className="company-description">
                  <p className="has-text-grey-light">
                    As a System Administrator, I am responsible for monitoring and configuring the network and servers, analyzing and fixing the problem. And also do the installation to the client.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="company-wrapper column is-one-third">
                <p className="time has-text-grey-light is-size-7">
                  September 2016 - August 2017
                </p>
                <div className="experience-title is-size-5 has-text-white">
                  Kawanua TV
                </div>
                <h5 className="is-size-7 has-text-light">IT Manager</h5>
              </div>

              <div className="job-wrapper column">
                <div className="company-description">
                  <p className="has-text-grey-light">
                  As an IT Manager, I am responsible for configuring and monitoring networks and servers, analyzing, repairing and finding solutions to computer, broadcast and network problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="company-wrapper column is-one-third">
                <p className="time has-text-grey-light is-size-7">
                  Nov 2013 - Present
                </p>
                <div className="experience-title is-size-5 has-text-white">
                  Freelance
                </div>
                <h5 className="is-size-7 has-text-light">Software/Web Developer</h5>
              </div>

              <div className="job-wrapper column">
                <div className="company-description">
                  <p className="has-text-grey-light">
                  Working on website and application projects from multiple clients. Such as company profile website, e-commerce, mobile and desktop application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title experience-title is-size-4 is-uppercase has-text-primary has-text-weight-bold mb-3">
            Skills
          </h3>
          <div className="columns">
            <div className="column">
              <ul className="has-text-grey-light">
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">85%</span> Typescript / Javascript</p>
                  <progress
                    class="progress is-success is-small"
                    value="85"
                    max="100"
                  >
                    85%
                  </progress>
                </li>
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">90%</span> React / Ionic / Electron</p>
                  <progress
                    class="progress is-success is-small"
                    value="90"
                    max="100"
                  >
                    90%
                  </progress>
                </li>
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">95%</span> HTML5 / CSS3 / SASS</p>
                  <progress
                    class="progress is-success is-small"
                    value="95"
                    max="100"
                  >
                    95%
                  </progress>
                </li>
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">80%</span> GIT / Github / Gitlab</p>
                  <progress
                    class="progress is-success is-small"
                    value="80"
                    max="100"
                  >
                    80%
                  </progress>
                </li>
              </ul>
            </div>
            <div className="column">
              <ul className="has-text-grey-light">
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">80%</span> NodeJS / Express</p>
                  <progress
                    class="progress is-success is-small"
                    value="80"
                    max="100"
                  >
                    80%
                  </progress>
                </li>
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">79%</span> Linux System</p>
                  <progress
                    class="progress is-success is-small"
                    value="79"
                    max="100"
                  >
                    79%
                  </progress>
                </li>
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">85%</span> CPanel, Wordpress, Joomla</p>
                  <progress
                    class="progress is-success is-small"
                    value="85"
                    max="100"
                  >85%</progress>
                </li>
                <li className="skill-percentage mb-3">
                  <p className="mb-1"><span className="has-text-weight-bold has-text-primary">83%</span> Figma / Illustrator</p>
                  <progress
                    class="progress is-success is-small"
                    value="83"
                    max="100"
                  >83%</progress>
                </li>
              </ul>
            </div>
          </div>
        </section>
      
        <div className="print-button no-print">
          <button class="button is-primary" onClick={() => window.print()}>
            <span class="icon">
              <i class="fa fa-print has-text-light"></i>
            </span>
            <span>Print This</span>
          </button>
        </div>
      </div>
    </div>
  </div>
);

ResumePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const ResumePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResumePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

ResumePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ResumePage;

export const pageQuery = graphql`
  query ResumePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "resume-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
