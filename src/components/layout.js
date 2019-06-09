/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
// import { Controller, Scene } from 'react-scrollmagic'
// import { DistortionText } from 'react-text-fun'

import Burger from "./burger"
import Footer from "./footerHome"
import GlitchImage from "./glitchImage"
import Avatar from "./avatar"
// import Social from "./social"
// import Footer from "./footer"
// import WindowedImage from "./windowedImage"
// import Button from "./button"

// import avatar_default from "../images/avatar_new.png"
// import avatar_hover from "../images/avatar_green.png"
// import bushido from "../images/bushido.jpg"
// import scroll_down_img from "../images/scrolldown.svg"
// import arrow_down from "../images/arrow_down.svg"
// import stripes from "../images/stripes.png"
// import dusanstvo from "../images/dusanstvo.svg"
// import window_photo_1 from "../images/window_photo_1.png"
// import window_photo_2 from "../images/window_photo_2.png"
import dusanstvo_landing from "../images/dusanstvo_landing.jpg"
import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
// import avatar from "../images/avatar_new.png"
// import banana from "../images/banana.svg"
// import samurai from "../images/samurai.svg"
// import boom from "../images/boom.svg"
// import bushido_avatar from "../images/bushido_avatar.svg"
//import bushido_avatar_hover from "../images/bushido_avatar_hover.svg"

// import Header from "./header"
//  <Header siteTitle={data.site.siteMetadata.title} />
// import "./layout.css"

const PageWrapper = styled.div `
  width: 100vw;
  position: relative;
  overflow: hidden;
`
const WelcomeWrapper = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
`
const BurgerWrapper = styled.div `
  position: fixed;
  width: 100vw;
  height: 30px;
  top: 0;
  right: 0;
  z-index: 99999;
`
const Menu = styled.div`
  display: block;
  position: relative;
  z-index: 3;
  a {
    position: relative;
    display: block;
  }
  .home_1:hover + div {
    opacity: 1;
    display: block;
    position: absolute;
    width: 400px;
    left: 50%;
    top: -150px;
    margin-left: -200px;
  }
  .home_2:hover + div {
    opacity: 1;
    display: block;
    position: absolute;
    width: 400px;
    left: 50%;
    top: -150px;
    margin-left: -200px;
  }
  .link_wrapper:hover h1 {
    opacity: 0.3;
  }
  .text_hide {
    opacity: 0;
    animation: text_hide 0.3s linear;
  }
  @keyframes text_hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const ImageWrapper = styled.div`
  /* position: absolute;
  width: 700px;
  overflow: hidden;
  right: -150px;
  bottom: -40px;
  z-index: 2; */
  
  /*position: absolute;
  z-index: 2;
  left: 50%;
  top: 50%;
  margin-left: -250px;
  margin-top: -250px;*/

  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 700px;
  height: 100vh;
  left: 50%;
  animation: slide_in 0.3s ease-out;
  img {
    width: auto;
    width: 100%;
    object-fit: cover;
  }
  &.image_hide {
    opacity: 0.2;
    left: 100%;
    animation: slide_away 0.5s linear;
  }
  @keyframes slide_in {
    0% {
      left: 100%;
    }
    100% {
      left: 50%;
    }
  }
  @keyframes slide_away {
    0% {
      left: 50%;
    }
    100% {
      left: 100%;
    }
  }
`

const H1ImageWrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 400px;
  left: 150%;
  top: -150px;
  margin-right: 200px;
`
const H2ImageWrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 400px;
  left: 150%;
  top: -150px;
  margin-right: 200px;
`
const Headline = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 40px;
  opacity: 1;
  animation: text_show 0.4s linear;
  @keyframes text_show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
        isHovered: false
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(){
      this.setState(prevState => ({
          isHovered: !prevState.isHovered
      }));
  }
  render () {
    const imageClass = this.state.isHovered ? "image_hide" : "";
    const textClass = this.state.isHovered ? "text_hide" : "";
    return (
      <PageWrapper>
        <BurgerWrapper>
          <Burger burder_color="burger_white"/>
        </BurgerWrapper>
        <h1 className="name">Dušan Tatranský</h1>
        <WelcomeWrapper>
          <Avatar />
          <Menu>
            <Headline className={textClass}>Som Online Bodyguard z ďalekého východu ... z Košíc</Headline>
            <div className="link_wrapper" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
              <Link to="/aboutMe">
                <h1 className="headlines home_1">Prečítaj si o mne</h1>
                <H1ImageWrapper>
                  <img src={dusanstvo_omne} alt='' />
                </H1ImageWrapper>
              </Link>
              <Link to="/aboutYou">
              <h1 className="headlines home_2">Napíš mi</h1>
                <H2ImageWrapper>
                  <img src={dusanstvo_otebe} alt='' />
                </H2ImageWrapper>
              </Link>  
            </div>
          </Menu>
        </WelcomeWrapper>
        <ImageWrapper className={imageClass}>
          <GlitchImage url={dusanstvo_landing}/>
        </ImageWrapper>
        <Footer />
      </PageWrapper>
    )
  }
}

export default Layout
