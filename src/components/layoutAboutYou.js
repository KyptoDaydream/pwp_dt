import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { Controller, Scene } from 'react-scrollmagic'

import Avatar from "./avatar"
import Burger from "./burger"
import FooterHome from "./footerHome"
import FooterContact from "./footerContact"
import ScrollDown from "./scrollDown"

import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_otebe_2 from "../images/dusanstvo_otebe_2.jpg"
import dusanstvo_otebe_3 from "../images/dusanstvo_otebe_3.jpg"
import dusanstvo_otebe_4 from "../images/dusanstvo_otebe_4.jpg"
import monkey from "../images/monkey_head.png"
// import monkey from "../images/monkey.svg"

const PageWrapper = styled.div `
  width: 100vw;
  background: var(--black);
  * {
    color: var(--white);
  }
  .bm-burger-bars {
    background-image: linear-gradient(var(--white),var(--white));
  }
  transition: 0.4s;
  &.change_color {
    background: var(--white);
    * {
      color: var(--black);
    }
    .bm-burger-bars {
      background-image: linear-gradient(var(--black),var(--black));
    }
    .scroll_icon_class {
      fill: var(--black);
    }
    .blackbox_text {
      color: var(--white);
    }
  }
  .subpage {
    font-size: 45vw;
    top: 25%;
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
  .scroll_icon_class {
    fill: var(--white);
  }
`
const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 150px;
  .second_paragraph {
    padding-top: 0;
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

const BlokRight = styled.div`
  position: relative;
  width: 70%;
  margin-left: 30%;
  padding: 100px 0;
  h1 {
    -webkit-text-stroke: 1px var(--white);
    font-size: 130px;
    margin-bottom: 40px;
    position: relative;
    &:before {
      position: absolute;
      margin-left: -120px;
      margin-top: 25px;
      width: 100px;
      height: 80px;
      content: '';
      display: inline-block;
      background: url(${monkey});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  h3 {
    padding-top: 50px;
  }
  p {
    padding: 50px 25px 25px 0;
  }
  &.margin-top {
    margin-top: 200px;
  }
  .padding_top {
    padding: 150px 0;
  }
  img {
    width: 500px;
    position: relative;
    margin-left: 200px;
    padding-top: 50px;
    transition: 0.6s;
    opacity: 0;
  }
  img.reveal_image {
    opacity: 1;
    margin-left: -200px;
  }
`


const LayoutAboutYou = ({ children }) => ( 
  <Controller globalSceneOptions={{ triggerHook: 'onEnter' }}>
    <Scene classToggle="change_color" triggerElement="#trigger_hide_text">
    <PageWrapper>
      <BurgerWrapper>
        <Burger burder_color="burger_white"/>
      </BurgerWrapper>
      <Link to="/">
        <Avatar />
      </Link>
      <Controller>
        <Scene classToggle="hide_text" triggerElement="#trigger_hide_text">
          <h1 className="subpage">YOU</h1>
        </Scene>
      </Controller>
      <Controller>
        <Scene classToggle="hide_social" triggerElement="#trigger_hide_social">
          <div><FooterHome /></div>
        </Scene>
      </Controller>
      <Controller>
        <Scene classToggle="hide_scroll" triggerElement="#trigger_hide_scroll">
          <div><ScrollDown /></div>
        </Scene>
      </Controller>
      <TextWrapper>
        <h2>Si opica!<br /><br /> A ja budem tvoj profesionálny follower.</h2>
        <ImageWrapper>
          <img src={dusanstvo_otebe} alt='' />
        </ImageWrapper>
        <h2 className="second_paragraph" id="trigger_hide_text">Chcem spoznať viac zaujímavých ľudí, ktorí sa nechcú opičiť.</h2>
          <BlokRight id="trigger_hide_text">
          <p id="trigger_reveal_image_1">
          Nezáleží na tom, či si umelec,
freelancer, influencer alebo známa osobnosť. Podstatné je, že robíš čo ťa baví a chceš aby
ťa v online svete bolo vidieť a počuť. Uvedomuješ si akým spôsobom chceš byť v online
svete viditeľný a akým zas neviditeľný?</p>
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene classToggle="reveal_image" triggerElement="#trigger_reveal_image_1">
              <img src={dusanstvo_otebe_2} alt="" id="trigger_reveal_image_2"/>
            </Scene>
          </Controller>
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene classToggle="reveal_image" triggerElement="#trigger_reveal_image_2">
              <img src={dusanstvo_otebe_3} alt="" id="trigger_reveal_image_3"/>
            </Scene>
          </Controller>
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene classToggle="reveal_image" triggerElement="#trigger_reveal_image_3">
              <img src={dusanstvo_otebe_4} alt=""/>
            </Scene>
          </Controller>
          <p className="padding_top">
          Aktuálne vo svete prebieha boj o pozornosť, ktorého súčasťou je stále viac ľudí ako si ty, ale aj ... 
            </p>
            <h1>veľké značky</h1>
            <h1>hoaxy</h1>
            <h1>fake news</h1>
            <h1>hackeri</h1>
            <h1 id="trigger_hide_social">boti</h1>
            <h1 id="trigger_hide_scroll">trollovia</h1>
          </BlokRight>
      </TextWrapper>
      <FooterContact />
    </PageWrapper>   
    </Scene>
  </Controller>
)

LayoutAboutYou.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAboutYou
