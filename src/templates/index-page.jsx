import React from "react";
import anime from 'animejs'
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";


import Layout from "../components/Layout";
import TypedElement from "../components/TypedElement";

// im krestian


const messages = [
  `Hello, I'm Krestian a Programmer`,
  `Hello, I'm Krestian a UI/UX Designer`,
  `Hello, I'm Krestian a Front End Developer`,
  `Hello, I'm Krestian a Web Developer`,
  `Hello, I'm Krestian a Mobile Developer`,
  `Hello, I'm Krestian a Full Stack Developer`,
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
<>
<nav class="navbar is-transparent is-fixed-top">
  <div className="container">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://krestian.website">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194 62" width="145"><title>logo</title><path d="M32.18,14.94h6.15L36.54,27.68l8.83-12.74h6.85l-10,13.19q1.66,4,3.42,7.93c1.18,2.61,2.34,5.25,3.49,7.94H41.72l-5.5-14.14L34.23,44H28.09Z" style={{fill:"#fff"}}/><path d="M59.51,44H53.56l3.2-22.66H62l-.19,3h.06a8.85,8.85,0,0,1,2.43-2.56,4.75,4.75,0,0,1,2.56-1,4,4,0,0,1,1.44.16l.67.29L67.77,26.4a6.7,6.7,0,0,1-1-.26A4.9,4.9,0,0,0,65.4,26a3.06,3.06,0,0,0-1.6.51,15.89,15.89,0,0,0-2.11,1.67Z" style={{fill: "#fff"}}/><path d="M80.63,40a11.27,11.27,0,0,0,5.63-1.6l.64,4a13,13,0,0,1-5.12,1.86,13.47,13.47,0,0,1-3.07.32,9.28,9.28,0,0,1-3.36-.64,6.09,6.09,0,0,1-2.66-2C71.12,39.9,70.6,37,71.16,33.31a16.9,16.9,0,0,1,4-9.41A9.29,9.29,0,0,1,82,20.83q6,0,7.1,5.76a15.63,15.63,0,0,1-.44,6.91,2.9,2.9,0,0,1-.32,1H76.92c-.3,2-.08,3.39.67,4.26A3.78,3.78,0,0,0,80.63,40Zm2.62-13.76a2,2,0,0,0-1.82-1.21,3.35,3.35,0,0,0-2.37,1.24,8.24,8.24,0,0,0-1.63,4.45h6C83.75,28.58,83.68,27.08,83.25,26.27Z" style={{fill: "#fff"}}/><path d="M92.92,38.82a6,6,0,0,1,.7.32,11.58,11.58,0,0,0,1.22.51,10.27,10.27,0,0,0,3,.57,3.92,3.92,0,0,0,2-.41,1.88,1.88,0,0,0,.89-1.47,2.41,2.41,0,0,0-.35-1.8A8.22,8.22,0,0,0,99,35.1c-.53-.47-1.12-1-1.76-1.44A9.88,9.88,0,0,1,95.54,32,6.07,6.07,0,0,1,94.13,27a6.58,6.58,0,0,1,2.6-4.51,9.46,9.46,0,0,1,5.92-1.7,17.36,17.36,0,0,1,5.56.9l-.89,4.35a11.43,11.43,0,0,1-1.76-.45,9.19,9.19,0,0,0-2.66-.38c-1.79,0-2.79.6-3,1.79a1.86,1.86,0,0,0,.42,1.5,8.88,8.88,0,0,0,1.38,1.35c.55.45,1.17.92,1.85,1.41a12.63,12.63,0,0,1,1.86,1.63,5.49,5.49,0,0,1,1.47,4.86,7.18,7.18,0,0,1-2.43,4.8,9.27,9.27,0,0,1-6.27,2,11.72,11.72,0,0,1-4-.52,12.65,12.65,0,0,1-2.88-1.28Z" style={{fill: "#fff"}}/><path d="M123.57,21.34l-.51,4.36h-4.93L116.6,36.58a4.54,4.54,0,0,0,0,2.17c.17.47.61.71,1.31.71a5.22,5.22,0,0,0,1.82-.29c.52-.19.86-.31,1-.35V43a4.09,4.09,0,0,0-.77.32c-.34.17-.73.34-1.15.51a8.81,8.81,0,0,1-3.59.71c-2,0-3.43-.55-4.16-1.64s-.91-2.93-.57-5.53l1.73-11.71h-2.44l.58-4.36h2.43l.77-5.44,6.08-1-1,6.4Z" style={{fill: "#fff"}}/><path d="M131.13,44h-6l3.08-22.27,6.14-.83Zm2-37.53a3.67,3.67,0,0,1,3.06,1.4,4.5,4.5,0,0,1,.78,3.54,5.65,5.65,0,0,1-1.79,3.5,5,5,0,0,1-3.45,1.35,3.83,3.83,0,0,1-3.1-1.35,4.33,4.33,0,0,1-.88-3.45,6.51,6.51,0,0,1,1.93-3.59A4.89,4.89,0,0,1,133.09,6.47Z" style={{fill: "#fff"}}/><path d="M150.58,41.31q-3.65,3.27-7.1,3.27-5,0-5.7-6.21A21.82,21.82,0,0,1,138,33a19.12,19.12,0,0,1,1.54-5.54,13.27,13.27,0,0,1,2.56-3.77A9.42,9.42,0,0,1,148.92,21a51.15,51.15,0,0,1,9.79,1L155.57,44h-5Zm1.6-15.68a29.81,29.81,0,0,0-3-.13,3.86,3.86,0,0,0-3.1,1.54q-1.24,1.53-1.79,5.54c-.37,2.66-.34,4.49.06,5.47a2.35,2.35,0,0,0,2.4,1.47,4,4,0,0,0,2.15-.67,7.46,7.46,0,0,0,1.69-1.44Z" style={{fill: "#fff"}}/><path d="M163.64,21.34h5.25l-.26,2.88h.13a6.19,6.19,0,0,0,.93-.76,10.3,10.3,0,0,1,6.24-2.63q3.19,0,4.22,1.92c.68,1.28.83,3.27.45,5.95L178.42,44H172.6l1.85-13.82a7,7,0,0,0-.06-3.3,1.68,1.68,0,0,0-1.73-.86,3.47,3.47,0,0,0-2.11.7,9.82,9.82,0,0,0-2,1.79L166.39,44h-5.95Z" style={{fill: "#fff"}}/><polygon points="24.78 11.82 18.93 52.75 17 50.55 163 52.5 17 54.45 14.81 54.47 15.07 52.25 19.82 11.18 24.78 11.82" style={{fill: "#fff"}}/></svg>
      </a>
    </div>
  </div>
</nav>
<section className="hero is-fullheight">
  <div className="hero-body">
    <img className="hero-photo" src={!!photo.childImageSharp ? photo.childImageSharp.fixed.src : photo} alt="Krestian Photo"/>
    <div className="hero-content">
      <h1 className="subtitle is-size-4 has-text-light">{heading}</h1>
      {/* <TypedElement className="has-text-light" messages={messages} /> */}
      <h2 className="title is-1 has-text-light main-title">{subheading}</h2>
      <a className="" href="mailto:chrisk8er@gmail.com">
        <span className="cta-link">Let's work together</span>
        <span className="shakehand">🤝🏻</span>
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
