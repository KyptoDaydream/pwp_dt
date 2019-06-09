import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic'

import Avatar from "./avatar"
import Burger from "./burger"
import FooterHome from "./footerHome"
import Footer from "./footer"
import ScrollDown from "./scrollDown"
import Story from "./story"

import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_sluzby from "../images/dusanstvo_sluzby.jpg"



import aboutme_1 from "../images/aboutme_1.jpg"
// import aboutme_2 from "../images/aboutme_2.jpg"
// import aboutme_3 from "../images/aboutme_3.jpg"
// import aboutme_4 from "../images/aboutme_4.jpg"
// import aboutme_5 from "../images/aboutme_5.jpg"
// import aboutme_6 from "../images/aboutme_6.jpg"
// import aboutme_7 from "../images/aboutme_7.jpg"
// import aboutme_8 from "../images/aboutme_8.jpg"
// import aboutme_9 from "../images/aboutme_9.jpg"
// import aboutme_10 from "../images/aboutme_10.jpg"
// import aboutme_11 from "../images/aboutme_11.jpg"
// import aboutme_12 from "../images/aboutme_12.jpg"
// import aboutme_13 from "../images/aboutme_13.jpg"
// import aboutme_14 from "../images/aboutme_14.jpg"
// import aboutme_15 from "../images/aboutme_15.jpg"
// import aboutme_16 from "../images/aboutme_16.jpg"
// import aboutme_17 from "../images/aboutme_17.jpg"
// import aboutme_18 from "../images/aboutme_18.jpg"
// import aboutme_19 from "../images/aboutme_19.jpg"
// import aboutme_21 from "../images/aboutme_21.jpg"


const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  transition: 0.4s;
  &.change_color {
    background: var(--white);
  }
  .subpage {
    font-size: 29vw;
  }
  .hide_text {
    opacity: 0;
    z-index: -1;
  }
  .hide_social {
    opacity: 0;
  }
  .hide_scroll {
    opacity: 0;
  }
`
const BurgerWrapper = styled.div `
  position: fixed;
  width: 100vw;
  height: 30px;
  top: 0;
  right: 0;
  z-index: 99999;
`

const ImageWrapper = styled.div`
  width: 100%;
  margin: 100px 0;
`

const BlokLeft = styled.div`
  position: relative;
  width: 50%;
  padding: 100px 0;
  p {
    padding: 25px;
  }
`

const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 400px;
  position: relative;
`

const LayoutAboutMe = ({ children }) => ( 
  <Controller>
    <Scene classToggle="change_color" triggerElement="#trigger_orange">
    <PageWrapper>
      <BurgerWrapper>
        <Burger burder_color="burger_white"/>
      </BurgerWrapper>
      <Link to="/">
        <Avatar />
      </Link>
      <Controller>
        <Scene classToggle="hide_text" triggerElement="#trigger_hide_text">
          <h1 className="subpage">ME&I</h1>
        </Scene>
      </Controller>
      <Controller globalSceneOptions={{ triggerHook: 'onEnter' }}>
        <Scene classToggle="hide_social" triggerElement="#trigger_hide_social">
          <div><FooterHome /></div>
        </Scene>
      </Controller>
      <Controller globalSceneOptions={{ triggerHook: 'onEnter' }}>
        <Scene classToggle="hide_scroll" triggerElement="#trigger_hide_scroll">
          <div><ScrollDown /></div>
        </Scene>
      </Controller>
      <TextWrapper>
        <h2>Som Dušan Tatranský a ty nie ... a toto je môj príbeh o slobode a nezávislosti.</h2>
        <ImageWrapper>
          <img src={dusanstvo_omne} alt='' />
        </ImageWrapper>
        <BlokLeft>
          <p id="trigger_hide_text">
            Od roku 2008 ma baví a od roku 2011 ma živí marketing. Chcem aby sa viac ľudí 
            dokázalo uživiť tým, čo ich baví. Preto som si vytvoril vlastnú pracovnú pozíciu. 
          </p>
        </BlokLeft>
        <Story 
          trigger="#trigger_hide_text"
          image={aboutme_1}
          year="1998"
          headline="Galeje"
          text="Môj príbeh sa začína na Galejach. Počítam príklady a drhnem lavice od
          8-16. Chcem si získať svoju slobodu a ušetriť rok života. Som preto
          dobrý študent a učím sa aj to čo ma nebaví. Čo si neuvedomujem je, že
          poctivé štádium mi dá užitočnú schopnosť. Všeobecný prehlaď."/>
      </TextWrapper>
      <div id="trigger_hide_social" />
      <div id="trigger_hide_scroll" />
      <Footer 
      link_1="Napíš mi o sebe"
      url_1="/aboutYou"
      image_1={dusanstvo_otebe}
      link_2="S čím ti viem pomôcť"
      url_2="/services"
      image_2={dusanstvo_sluzby} />
    </PageWrapper>   
    </Scene>
  </Controller>
)

LayoutAboutMe.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAboutMe
