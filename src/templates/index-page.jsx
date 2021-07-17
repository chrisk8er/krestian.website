import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
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
        <h1>Krestian Weken</h1>
        <section className="section contact-info">
          <div className="is-flex is-flex-direction-row">
            <ul className="list-titles has-text-weight-bold">
              <li>Call</li>
              <li>Mail</li>
              <li>Web</li>
              <li>Home</li>
            </ul>
          
            <ul className="list-content">
              <li>+62 852 401 66691</li>
              <li>chrisk8er@gmail.com</li>
              <li><a href="https://krestian.website">krestian.website</a></li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </section>

        <section className="section contact-presentation"> 
          <p><span className="has-text-weight-bold">Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet. Sed nec imperdiet purus. </p>
        </section>

        <section className="section contact-social">
          <div className="is-flex is-flex-direction-row">
            <ul className="list-titles has-text-weight-bold">
              <li>Twitter</li>
              <li>Dribbble</li>
              <li>Codepen</li>
            </ul>

            <ul className="list-content"> 
              <li><a href="">@janderson</a></li> 
              <li><a href="">janderson</a></li> 
              <li><a href="">janderson</a></li> 
            </ul>
          </div>
        </section>
      </div>

      <div className="column is-three-fifths has-text-light has-background-dark">
        <section className="section ">
          <h3 className="experience-title">Experience</h3>
          <div className="experience-wrapper">
            <div className="company-wrapper clearfix">
              <div className="experience-title">Company name</div> 
              <div className="time">Nov 2012 - Present</div> 
            </div>
            
            <div className="job-wrapper clearfix">
              <div className="experience-title">Front End Developer </div> 
              <div className="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  
              </div>
            </div>
            
            <div className="company-wrapper clearfix">
              <div className="experience-title">Company name</div> 
              <div className="time">Nov 2010 - Present</div> 
            </div>
            
            <div className="job-wrapper clearfix">
              <div className="experience-title">Freelance, Web Designer / Web Developer</div> 
              <div className="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quis magni pariatur, harum perferendis aliquid aliquam similique, minima enim sed omnis totam eius necessitatibus amet a temporibus nisi maxime minus.</p>  
              </div>
            </div>
            
            <div className="company-wrapper clearfix">
              <div className="experience-title">Company name</div> 
              <div className="time">Nov 2009 - Nov 2010</div>
            </div> 
            
            <div className="job-wrapper clearfix">
              <div className="experience-title">Web Designer </div> 
              <div className="company-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Skills</h3>  
            <ul>
              <li className="skill-percentage">HTML / HTML5</li>
              <li className="skill-percentage">CSS / CSS3 / SASS / LESS</li>
              <li className="skill-percentage">Javascript</li>
              <li className="skill-percentage">Jquery</li>
              <li className="skill-percentage">Wordpress</li>
              <li className="skill-percentage">Photoshop</li>
            </ul>
        </section>

        <section className="section">
          <h3 className="section-title">Hobbies</h3> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p> 
        </section>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
`
