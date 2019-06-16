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


import hurray from "../images/hurray.gif"

import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import dusanstvo_landing from "../images/dusanstvo_landing.jpg"



const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  transition: 0.4s;
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
const BurgerWrapper = styled.div `
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

const LayoutClients = ({ children }) => ( 
    <PageWrapper>
      <BurgerWrapper>
        <Burger burder_color="burger_white"/>
      </BurgerWrapper>
      <Link to="/">
        <Avatar />
      </Link>
      <Controller>
        <Scene classToggle="hide_social" triggerElement="#trigger_hide_social">
          <div><FooterHome /></div>
        </Scene>
      </Controller>
      <TextWrapper>
        <h2>Výborne! Ozvem sa čoskoro ;)</h2>
        <img src={hurray} alt="" />
      </TextWrapper>
      <Trigger id="trigger_hide_social" />
      <Footer 
      link_1="Ako som sa k tomu dopracoval"
      url_1="/aboutMe"
      image_1={dusanstvo_omne}
      link_2="Moje zásady"
      url_2="/bushido"
      image_2={dusanstvo_landing} />
    </PageWrapper>  
)

LayoutClients.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutClients
