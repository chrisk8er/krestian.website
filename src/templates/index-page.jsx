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
  photo,
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
<>
<section className="hero is-fullheight">
  <div className="hero-body">
    <img className="hero-photo" src={!!photo.childImageSharp ? photo.childImageSharp.fixed.src : photo} alt="Krestian Photo"/>
    <div className="hero-content">
      <h1 className="subtitle is-4 has-text-light">{heading}</h1>
      <h2 className="title is-1 has-text-light main-title">{subheading}</h2>
      <a className="button is-light is-inverted" href="mailto:chrisk8er@gmail.com">
        <span>Let's work together 🤝</span> 
      </a>
    </div>
    <div className="hero-background">
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="fab fa-github"></i>
          <i class="far fa-laugh"></i>
          <i class="far fa-smile-wink"></i>
          <i class="fab fa-android"></i>
          <i class="far fa-laugh-beam"></i>
          <i class="far fa-bell"></i>
          <i class="far fa-laugh-squint"></i>
          <i class="far fa-hand-spock"></i>
          <i class="fab fa-app-store"></i>
          <i class="far fa-credit-card"></i>
          <i class="far fa-laugh-wink"></i>
          <i class="far fa-star"></i>
          <i class="far fa-smile-wink"></i>
          <i class="far fa-smile-beam"></i>
          <i class="far fa-lightbulb"></i>
          <i class="fab fa-apple"></i>
          <i class="far fa-handshake"></i>
          <i class="fab fa-aws"></i>
          <i class="far fa-file-code"></i>
          <i class="far fa-save"></i>
          <i class="far fa-grin-stars"></i>
          <i class="fab fa-facebook-messenger"></i>
          <i class="fab fa-behance"></i>
          <i class="far fa-edit"></i>
          <i class="fab fa-dribbble"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
      <div className="font">
        <div>
          <i class="far fa-heart"></i>
          <i class="fab fa-google-play"></i>
          <i class="fab fa-bitcoin"></i>
          <i class="far fa-keyboard"></i>
          <i class="far fa-compass"></i>
          <i class="fab fa-slack"></i>
          <i class="fab fa-safari"></i>
          <i class="fab fa-stack-overflow"></i>
          <i class="fab fa-stack-steam"></i>
          <i class="fab fa-telegram"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-pinterest"></i>
          <i class="fab fa-raspberry-pi"></i>
          <i class="fab fa-reddit-alien"></i>
          <i class="fab fa-redhat"></i>
          <i class="fab fa-sass"></i>
          <i class="fab fa-sketch"></i>
          <i class="fab fa-youtube"></i>
          <i class="fab fa-yarn"></i>
          <i class="fab fa-wordpress"></i>
          <i class="fab fa-whatsapp"></i>
          <i class="fab fa-php"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-cpanel"></i>
          <i class="fab fa-python"></i>
        </div>
        <div>
          <i class="fab fa-unity"></i>
          <i class="far fa-check-circle"></i>
          <i class="fab fa-html5"></i>
          <i class="fab fa-medium"></i>
          <i class="far fa-grin-tongue"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-gitkraken"></i>
          <i class="far fa-comments"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-ethereum"></i>
          <i class="far fa-paper-plane"></i>
          <i class="fab fa-codepen"></i>
          <i class="far fa-hdd"></i>
          <i class="far fa-clock"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-docker"></i>
          <i class="fab fa-figma"></i>
          <i class="fab fa-git-alt"></i>
          <i class="fab fa-gitlab"></i>
          <i class="fab fa-markdown"></i>
          <i class="fab fa-node-js"></i>
          <i class="fab fa-google"></i>
          <i class="fab fa-opera"></i>
          <i class="fab fa-paypal"></i>
        </div>  
      </div>
    </div>
  </div>
</section>
</>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
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
        photo={frontmatter.photo}
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
        photo {
          childImageSharp {
            fixed(width: 600, height: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
