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
      <div className="column">
        <section className="section main-website-header media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img
                className="is-rounded"
                src="https://media-exp1.licdn.com/dms/image/C5103AQFwReuBcnRahQ/profile-displayphoto-shrink_200_200/0/1516952059931?e=1632355200&v=beta&t=hu2t5eQPkoNJjATj2zXK9vz6ARNdaBbCOh4rVeHoal0"
                alt="Krestian Weken Picture"
              />
            </p>
          </figure>

          <div className="media-content ml-6">
            <div className="content" style={{ width: 300 }}>
              <h1 className="is-size-1">Krestian Weken</h1>
            </div>
          </div>
        </section>

        <section className="section contact-info">
          <div className="is-flex is-flex-direction-row">
            <ul className="list-titles has-text-weight-bold">
              <li className="mb-3">Call</li>
              <li className="mb-3">Mail</li>
              <li className="mb-3">Web</li>
              <li className="mb-3">Home</li>
            </ul>

            <ul className="list-content">
              <li className="mb-3">
                <a href="tel:6285240166691">+62 852 401 66691</a>
              </li>
              <li className="mb-3">
                <a href="mailto:chrisk8er@gmail.com">chrisk8er@gmail.com</a>
              </li>
              <li className="mb-3">
                <a href="https://krestian.website">krestian.website</a>
              </li>
              <li className="mb-3">Jakarta, Indonesia</li>
            </ul>
          </div>
        </section>

        <section className="section contact-presentation">
          <p>
            <span className="has-text-weight-bold">Lorem</span> ipsum dolor sit
            amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec
            consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec
            imperdiet purus.{" "}
          </p>
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
            <div className="columns is-mobile">
              <div className="company-wrapper column is-one-third">
                <div className="experience-title is-size-5 has-text-white">
                  PT Sakti Makmur Pratama
                </div>
                <div className="time has-text-grey-light">
                  August 2020 - Present
                </div>
              </div>

              <div className="job-wrapper column">
                <div className="experience-title is-size-5 has-text-white">
                  Full Stack Developer
                </div>
                <div className="company-description">
                  <p className="has-text-grey-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="company-wrapper column is-one-third">
                <div className="experience-title is-size-5 has-text-white">
                  PT Jasnita Telekomindo, Tbk
                </div>
                <div className="time has-text-grey-light">
                  August 2018 - August 2020
                </div>
              </div>

              <div className="job-wrapper column">
                <div className="experience-title is-size-5 has-text-white">
                  Front End Developer
                </div>
                <div className="company-description">
                  <p className="has-text-grey-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="company-wrapper column is-one-third">
                <div className="experience-title is-size-5 has-text-white">
                  PT Jasnita Telekomindo, Tbk
                </div>
                <div className="time has-text-grey-light">
                  August 2017 - August 2018
                </div>
              </div>

              <div className="job-wrapper column">
                <div className="experience-title is-size-5 has-text-white">
                  System Administrator and Networking Support
                </div>
                <div className="company-description">
                  <p className="has-text-grey-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque quis magni pariatur, harum perferendis aliquid
                    aliquam similique, minima enim sed omnis totam eius
                    necessitatibus amet a temporibus nisi maxime minus.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="company-wrapper column is-one-third">
                <div className="experience-title is-size-5 has-text-white">
                  Kawanua TV
                </div>
                <div className="time has-text-grey-light">
                  September 2016 - August 2017
                </div>
              </div>

              <div className="job-wrapper column">
                <div className="experience-title is-size-5 has-text-white">
                  IT Specialist
                </div>
                <div className="company-description">
                  <p className="has-text-grey-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                  </p>
                </div>
              </div>
            </div>

            <div className="columns is-mobile">
              <div className="company-wrapper column is-one-third">
                <div className="experience-title is-size-5 has-text-white">
                  Freelance
                </div>
                <div className="time has-text-grey-light">
                  Nov 2013 - Present
                </div>
              </div>

              <div className="job-wrapper column">
                <div className="experience-title is-size-5 has-text-white">
                  Web Designer / Web Developer
                </div>
                <div className="company-description">
                  <p className="has-text-grey-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce a elit facilisis, adipiscing leo in, dignissim magna.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque quis magni pariatur, harum perferendis aliquid
                    aliquam similique, minima enim sed omnis totam eius
                    necessitatibus amet a temporibus nisi maxime minus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="columns">
          <section className="section column">
            <h3 className="section-title experience-title is-size-4 is-uppercase has-text-primary has-text-weight-bold mb-3">
              Skills
            </h3>
            <ul className="has-text-grey-light">
              <li className="skill-percentage mb-3">
                <p className="mb-1">HTML / HTML5</p>
                <progress
                  class="progress is-success is-small"
                  value="60"
                  max="100"
                >
                  60%
                </progress>
              </li>
              <li className="skill-percentage mb-3">
                <p className="mb-1">CSS / CSS3 / SASS / LESS</p>
                <progress
                  class="progress is-success is-small"
                  value="60"
                  max="100"
                >
                  60%
                </progress>
              </li>
              <li className="skill-percentage mb-3">
                <p className="mb-1">Javascript</p>
                <progress
                  class="progress is-success is-small"
                  value="60"
                  max="100"
                ></progress>
              </li>
              <li className="skill-percentage mb-3">
                <p className="mb-1">Jquery</p>
                <progress
                  class="progress is-success is-small"
                  value="60"
                  max="100"
                ></progress>
              </li>
              <li className="skill-percentage mb-3">
                <p className="mb-1">Wordpress</p>
                <progress
                  class="progress is-success is-small"
                  value="60"
                  max="100"
                ></progress>
              </li>
              <li className="skill-percentage mb-3">
                <p className="mb-1">Photoshop</p>
                <progress
                  class="progress is-success is-small"
                  value="60"
                  max="100"
                ></progress>
              </li>
            </ul>
          </section>

          <section className="section column">
            <h3 className="section-title experience-title is-size-4 is-uppercase has-text-primary has-text-weight-bold mb-3">
              Hobbies
            </h3>
            <div className="has-text-grey-light">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                elit facilisis, adipiscing leo in, dignissim magna.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                elit facilisis, adipiscing leo in, dignissim magna.
              </p>
            </div>
          </section>
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
