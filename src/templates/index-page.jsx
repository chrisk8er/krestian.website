import React from "react";
import anime from 'animejs'
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";


import Layout from "../components/Layout";
import TypedElement from "../components/TypedElement";

// im krestian


const messages = [
  `Krestian Weken The Programmer`,
  `Krestian Weken The UI/UX Designer`,
  `Krestian Weken The Front End Developer`,
  `Krestian Weken The Web Developer`,
  `Krestian Weken The Mobile Developer`,
  `Krestian Weken The Full Stack Developer`,
];

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  // <section className="section is-large is-fullheight">
  //   <div className="container">
  //     <h1 className="subtitle is-3 has-text-light">Hello, I'm Krestian Weken</h1>
  //     <h2 className="title is-1 has-text-light">Bring your ideas to life.</h2>
  //     {/* <TypedElement className="has-text-light" messages={messages} /> */}
  //   </div>
  // </section>

<section className="hero is-fullheight">
  <div className="hero-body">
    <div className="">
      <h1 className="subtitle is-4 has-text-light">Hello, I'm Krestian</h1>
      <h2 className="title is-1 has-text-light main-title">I will bring your ideas to life.</h2>
      <a className="button is-light is-inverted" href="mailto:chrisk8er@gmail.com">
        <span>Let's work together 🤝</span> 
      </a>
    </div>
  </div>
</section>
);

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
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  React.useEffect(() => {

  anime({
    targets: '.path',
    loop: false,
    direction: 'alternate',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 400,
    delay: (el, i) => { return i * 500 }
  });
    
  }, [])

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
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

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
`;
