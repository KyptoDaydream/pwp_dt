import React from "react"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { Controller, Scene } from "react-scrollmagic"

import Avatar from "./avatar"
import Burger from "./burger"
import FooterHome from "./footerHome"
import Footer from "./footer"
import ScrollDown from "./scrollDown"

import not_found from "../images/404_opt.gif"

import dusanstvo_klienti from "../images/dusanstvo_klienti.jpg"
import dusanstvo_landing from "../images/dusanstvo_landing.jpg"

const PageWrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background: var(--white);
  transition: 0.4s;
  .hide_social {
    opacity: 0;
  }
  .hide_burger {
    display: none;
  }
`
const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 150px;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0px 25px 150px 25px;
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
const Trigger = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  display: block;
`

const LayoutClients = () => (
  <PageWrapper>
    <BurgerWrapper>
      <Controller>
        <Scene classToggle="hide_burger" triggerElement="#trigger_hide_burger">
          <div>
            <Burger burder_color="burger_white" />
          </div>
        </Scene>
      </Controller>
    </BurgerWrapper>
    <Link to="/">
      <Avatar />
    </Link>
    <Controller globalSceneOptions={{ triggerHook: "onEnter" }}>
      <Scene classToggle="hide_social" triggerElement="#trigger_hide_social">
        <div>
          <FooterHome />
        </div>
      </Scene>
    </Controller>
    <Controller>
      <Scene classToggle="hide_social" triggerElement="#trigger_hide_social">
        <div>
          <ScrollDown />
        </div>
      </Scene>
    </Controller>
    <TextWrapper>
      <h2>Ooops! Stránka sa nenašla</h2>
      <img src={not_found} alt="" />
    </TextWrapper>
    <Trigger id="trigger_hide_social" />
    <Footer
      link_1="Moji klienti"
      url_1="/klienti"
      image_1={dusanstvo_klienti}
      link_2="Moje zásady"
      url_2="/bushido"
      image_2={dusanstvo_landing}
    />
  </PageWrapper>
)

export default LayoutClients
