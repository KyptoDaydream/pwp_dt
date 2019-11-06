/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Burger from "./burger"
import Footer from "./footerHome"
import FooterNarrow from "./footerHomeNarrow"
import GlitchImage from "./glitchImage"
import Avatar from "./avatar"

import dusanstvo_landing from "../images/dusanstvo_landing.jpg"
import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import arrow from "../images/arrow.svg"
// import home_text from "../images/home_text.png"

const PageWrapper = styled.div`
  width: 100vw;
  position: relative;
  overflow: hidden;
  h1.headlines {
    cursor: pointer !important;
    &:hover {
      color: var(--black);
      -webkit-text-stroke: 0px;
    }
    &.home_1_hovered,
    &.home_2_hovered {
      opacity: 1 !important;
      color: var(--orange);
      -webkit-text-stroke: 1px var(--white);
    }
  }
  @media (min-width: 1600px) {
    h1.headlines {
      font-size: 130px;
    }
  }
  @media (max-width: 800px) {
    h1.headlines {
      position: relative;
      text-align: left;
      padding-left: 25px;
      display: inline-block;
      font-size: 9vw;
      &:after {
        position: absolute;
        content: "";
        display: inline-block;
        right: -30px;
        top: 5px;
        width: 20px;
        height: 100%;
        background: url(${arrow});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }
  @media (max-width: 400px) {
    h1.headlines {
      &:after {
        top: 2px;
        background-size: 80% 80%;
      }
    }
  }
`
const WelcomeWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    align-items: flex-start;
  }
`
const BurgerWrapper = styled.div`
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
  .home_1_img.hovered {
    opacity: 1;
    display: block;
    position: absolute;
    width: 400px;
    left: 50%;
    top: -150px;
    margin-left: -200px;
  }
  .home_2_img.hovered {
    opacity: 1;
    display: block;
    position: absolute;
    width: 400px;
    left: 50%;
    top: -150px;
    margin-left: -200px;
  }
  .link_wrapper_hovered h1 {
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
  @media (max-width: 500px) {
    .text_hide {
      opacity: 1;
      animation: none;
    }
  }
  @media (min-width: 1600px) {
    .home_1_img.hovered,
    .home_2_img.hovered {
      width: 600px;
      top: -250px;
      margin-left: -300px;
    }
  }
  @media (max-width: 500px) {
    .home_1_img.hovered,
    .home_2_img.hovered {
      display: none;
    }
  }
  @media (max-width: 800px) {
    .link_wrapper {
      margin-top: 80px;
    }
  }
  @media (max-height: 667px) {
    .link_wrapper {
      margin-top: 40px;
    }
  }
  @media (max-height: 568px) {
    .link_wrapper {
      margin-top: 30px;
    }
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 700px;
  height: 100vh;
  left: 50%;
  animation: slide_in 0.3s ease-out;
  overflow: hidden;
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
  @media (max-width: 500px) {
    animation: none;
    &.image_hide {
      opacity: 1;
      left: 0;
      animation: none;
    }
  }
  @media (max-width: 800px) {
    bottom: 0;
    left: 0;
    height: 500px;
    width: 100%;
  }
  @media (max-width: 500px) {
    height: 500px;
    width: 100%;
  }
  @media (max-width: 414px) and (max-height: 800px) {
    height: 440px;
    width: 130%;
  }
  @media (max-width: 414px) and (max-height: 500px) {
    height: 440px;
    width: 100%;
  }
  @media (max-height: 667px) and (max-width: 800px) {
    height: 400px;
    width: 120%;
  }
  @media (max-height: 667px) and (max-width: 500px) {
    height: 400px;
    width: 100%;
  }
  @media (max-width: 370px) {
    height: 370px;
    width: 100%;
  }
  @media (max-width: 330px) {
    height: 330px;
    width: 100%;
  }
  @media (max-width: 330px) and (max-height: 530px) {
    height: 290px;
    width: 100%;
  }
  @media (min-width: 1400px) {
    width: 800px;
  }
  @media (min-width: 1600px) {
    width: 900px;
  }
  @media (min-width: 1800px) {
    width: 1000px;
  }
  @media (min-width: 2000px) {
    width: 1100px;
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
  @media (min-width: 1600px) {
    width: 600px;
    top: -250px;
    margin-left: -300px;
  }
  @media (max-width: 500px) {
    display: none;
  }
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
  @media (min-width: 1600px) {
    width: 600px;
    top: -250px;
    margin-left: -300px;
  }
  @media (max-width: 500px) {
    display: none;
  }
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
  @media (max-width: 800px) {
    padding: 0 25px;
    margin-bottom: 5px;
    font-size: 16px;
    text-align: left;
    margin-top: 200px;
  }
  @media (max-height: 667px) and (max-width: 800px) {
    font-size: 14px;
    margin-top: 200px;
  }
  @media (max-height: 568px) and (max-width: 800px) {
    font-size: 14px;
    margin-top: 160px;
  }
`
/*
const WelcomeText = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: url(${home_text});
  opacity: 1;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 100%;
`
*/
class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      isHovered: false,
      isHovered_1: false,
      isHovered_2: false,
    }
    this.handleLeave_1 = this.handleLeave_1.bind(this)
    this.handleLeave_2 = this.handleLeave_2.bind(this)
    this.handleOver_1 = this.handleOver_1.bind(this)
    this.handleOver_2 = this.handleOver_2.bind(this)
  }
  handleOver_1() {
    this.setState(prevState => ({
      isHovered: true,
      isHovered_1: true,
    }))
  }
  handleOver_2() {
    this.setState(prevState => ({
      isHovered: true,
      isHovered_2: true,
    }))
  }
  handleLeave_1() {
    this.setState(prevState => ({
      isHovered: false,
      isHovered_1: false,
    }))
  }
  handleLeave_2() {
    this.setState(prevState => ({
      isHovered: false,
      isHovered_2: false,
    }))
  }
  render() {
    const imageClass = this.state.isHovered ? "image_hide" : ""
    const textClass = this.state.isHovered ? "text_hide" : ""
    const link_wrapper_class = this.state.isHovered
      ? "link_wrapper link_wrapper_hovered"
      : "link_wrapper"
    const home_1_class = this.state.isHovered_1
      ? "home_1_img hovered"
      : "home_1_img"
    const home_2_class = this.state.isHovered_2
      ? "home_2_img hovered"
      : "home_2_img"
    const home_1_text = this.state.isHovered_1
      ? "headlines home_1 home_1_hovered"
      : "headlines home_1"
    const home_2_text = this.state.isHovered_2
      ? "headlines home_2 home_2_hovered"
      : "headlines home_2"
    return (
      <PageWrapper>
        <BurgerWrapper>
          <Burger burder_color="burger_white" />
        </BurgerWrapper>
        <h1 className="name">Dušan Tatranský</h1>
        <WelcomeWrapper>
          <Avatar />
          <Menu>
            <Headline className={textClass}>
              Som Online Bodyguard z ďalekého východu ... z Košíc
            </Headline>
            <div className={link_wrapper_class}>
              <Link to="/oMne">
                <h1
                  className={home_1_text}
                  onMouseOver={this.handleOver_1}
                  onMouseEnter={this.handleOver_1}
                  onMouseMove={this.handleOver_1}
                  onMouseLeave={this.handleLeave_1}
                >
                  Prečítaj si o mne
                </h1>
                <H1ImageWrapper className={home_1_class}>
                  <img src={dusanstvo_omne} alt="" />
                </H1ImageWrapper>
              </Link>
              <Link to="/oTebe">
                <h1
                  className={home_2_text}
                  onMouseOver={this.handleOver_2}
                  onMouseEnter={this.handleOver_2}
                  onMouseMove={this.handleOver_2}
                  onMouseLeave={this.handleLeave_2}
                >
                  Napíš mi
                </h1>
                <H2ImageWrapper className={home_2_class}>
                  <img src={dusanstvo_otebe} alt="" />
                </H2ImageWrapper>
              </Link>
            </div>
          </Menu>
        </WelcomeWrapper>
        <ImageWrapper className={imageClass}>
          <GlitchImage url={dusanstvo_landing} />
        </ImageWrapper>
        <Footer />
        <FooterNarrow />
      </PageWrapper>
    )
  }
}

export default Layout
