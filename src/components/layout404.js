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


import not_found from "../images/404.gif"

import dusanstvo_mne from "../images/dusanstvo_omne.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"



const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  transition: 0.4s;
`
const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 150px;
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
        <h2>Ooops! Stránka sa nenašla</h2>
        <img src={not_found} alt="" />
      </TextWrapper>
      <Trigger id="trigger_hide_social" />
      <Footer 
      link_1="Prečítaj si o mne"
      url_1="/aboutMe"
      image_1={dusanstvo_mne}
      link_2="Napíš mi"
      url_2="/aboutYou"
      image_2={dusanstvo_otebe} />
    </PageWrapper>  
)

LayoutClients.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutClients
