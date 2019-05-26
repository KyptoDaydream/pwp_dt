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
// import Social from "./social"
// import Footer from "./footer"
import WindowedImage from "./windowedImage"
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
import dusanstvo_landing from "../images/dusanstvo_landing_alt.jpg"
import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import avatar from "../images/avatar.svg"
import banana from "../images/banana.svg"
// import samurai from "../images/samurai.svg"
// import boom from "../images/boom.svg"

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
const CustomCursor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100px;
  height: 100px;
  left: -2.5px;
  top: -2.5px;
  border-radius: 50%;
  mix-blend-mode: difference;
  z-index: 10000000;
  background: var(--white);
  transition: width 500ms ease 0s, height 500ms ease 0s, border 500ms ease 0s, background-color 250ms ease 0s;
  display: block;
`
const Menu = styled.div`
  display: block;
  position: relative;
  z-index: 3;
  .home_1:hover {
    div {
      display: block;
      position: fixed;
      width: 400px;
      top: 60px;
      right: 120px;
      animation: reveal_1 1.5s;
    }
  }
  .home_2:hover {
    div {
      display: block;
      position: fixed;
      width: 400px;
      bottom: 20px;
      left: 40px;
      animation: reveal_1 1.5s;
    }
  }
  @keyframes reveal_1 {
    0% {width: 0px;}
    100% {background-position: 400px;}
    }
`
const ImageWrapper = styled.div`
  position: absolute;
  width: 700px;
  overflow: hidden;
  right: -270px;
  top: 170px;
  z-index: 2;
  img {
    margin-left: -100px;
  }
`
const Avatar = styled.img`
  width: 100px;
  position: absolute;
  left: 200px;
  top: 50px;
`
const TextSlide = styled.div`
  position: absolute;
  padding: 20px;
  bottom: 20px;
  z-index: 1;
  width: 3125px;
  p {
    overflow-x:auto;
    overflow-y:hidden;
    display: inline-block;
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    color: var(--white);
    animation: slide 40s linear infinite;
    height: 50px;
    line-height: 50px;
    span {
      float: left;
      font-size: 18px;
      font-weight: 600;
    }
  }
  @keyframes slide {
  0% {
    transform: translate(100px, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
`
const MenuText = styled.p`
  position: fixed;
  top: 55px;
  right: 120px;
  color: var(--white);
  
`
const Banana = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0 25px 0 25px;
  background-image: url(${banana});
  background-size: cover;
  background-repeat: no-repeat;
`

const H1ImageWrapper = styled.div`
  display: none;
  z-index: -1;
`
const H2ImageWrapper = styled.div`
  display: none;
  z-index: -1;
`
class Layout extends React.Component {
  constructor () {
    super()
 
    this.state = {
      clientX: -100,
      clientY: -100,
    }
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.custom_cursor = React.createRef()
  }

  componentDidUpdate () {
    this.custom_cursor.current.style.transform = `translate(${this.state.clientX}px, ${this.state.clientY}px)`;
  }

  handleMouseMove(e) {
    this.setState({ 
      clientX: e.clientX - 50, 
      clientY: e.clientY - 50
      
    });
  }

  render () {
    return (
      <PageWrapper onMouseMove={this.handleMouseMove}>
        <CustomCursor ref={this.custom_cursor}/>
        <Avatar src={avatar}/>
        <MenuText>
          menu
        </MenuText>
        <BurgerWrapper>
          <Burger burder_color="burger_white"/>
        </BurgerWrapper>
        <h1 className="name">Dušan Tatranský</h1>
        <WelcomeWrapper>
          <Menu>
            <Link to="/aboutMe">
              <h1 className="headlines home home_1"><span>01 </span><span className="word_fill"> pre</span>Čítaj<span className="typewritter"> si o mne</span>
              <H1ImageWrapper>
                <WindowedImage url={dusanstvo_omne} />
              </H1ImageWrapper>
              </h1>
            </Link>
            <h1 className="headlines home home_2"><span>02 </span><span className="word_fill"> na</span>Píš<span className="typewritter"> mi o sebe</span>
              <H2ImageWrapper>
                <WindowedImage url={dusanstvo_otebe} />
              </H2ImageWrapper>
            </h1>
          </Menu>
        </WelcomeWrapper>
        <ImageWrapper>
          <WindowedImage url={dusanstvo_landing} />
        </ImageWrapper>
        <TextSlide>
          <p className="first_slide"> <span>Som Dušan Tatranský a ty nie </span> <Banana />
           <span>Som Online Bodyguard z ďalekého východu ... z Košíc </span><Banana />
           <span>Od roku 2008 ma baví a od roku 2011 ma živí marketing </span><Banana />
           <span>Chcem aby sa viac ľudí dokázalo uživiť tým, čo ich baví </span><Banana />
           <span>Preto ľudom ako si ty pomáham budovať osobnú značku </span><Banana />
           </p>
        </TextSlide>
      </PageWrapper>
    )
  }
}

export default Layout
