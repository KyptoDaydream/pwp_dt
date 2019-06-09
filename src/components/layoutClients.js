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


import dusanstvo_klienti from "../images/dusanstvo_klienti.jpg"
import dusanstvo_klienti_2 from "../images/dusanstvo_klienti_3.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_bushido from "../images/dusanstvo_landing.jpg"



const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  transition: 0.4s;
  &.change_color {
    background: var(--orange);
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
const BlokRight = styled.div`
  position: relative;
  width: 70%;
  margin-left: 30%;
  padding: 100px 0;
  h1 {
    font-size: 130px;
  }
  h3 {
    padding-top: 50px;
  }
  p {
    padding: 50px 25px 25px 0;
  }
`

const ImageWrapper2 = styled.div`
  position: absolute;
  top: 400px;
  left: -550px;
  width: 400px;
  height: 500px;
  background: url(${dusanstvo_klienti_2});
  opacity: 0;
  background-size: cover;
  transition: 0.6s;
  &.reveal_image {
    opacity: 1;
    top: 200px;
  }
`


const LayoutClients = ({ children }) => ( 
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
          <h1 className="subpage">PSSST</h1>
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
        <h2>Stanem sa najväčším expertom na tvoj brand. A nikomu o tom nepoviem ...</h2>
        <ImageWrapper>
          <img src={dusanstvo_klienti} alt='' />
        </ImageWrapper>
        <BlokLeft>
          <p id="trigger_hide_text">Tvoju osobnú značku budem chrániť celým Dušanom. Nebudem si brať kredit za tvoje budúce úspechy. Fungujem ako tieňový marketér pre známe osobnosti a dôveru svojich klientov si vážim
          </p>
        </BlokLeft>
        <BlokRight id="trigger_orange">
          <Controller>
            <Scene classToggle="reveal_image" triggerElement="#trigger_hide_social">
              <ImageWrapper2 />
            </Scene>
          </Controller>
          <h1 id="trigger_hide_social">
            Beriem to osobne
          </h1>
          <p id="trigger_hide_scroll">
          Počet mojich klientov je limitovaný, každému sa venujem osobne. Viem tak poskytnúť najkvalitnejšiu službu. Ostatní na moju pozornosť čakajú v poradí.
          </p>
          <h3>
            Počet klientov:
          </h3>
          <h1 id="trigger_hide_social">
            4/9
          </h1>
        </BlokRight>
      </TextWrapper>
      <Footer 
      link_1="Staň sa mojim klientom"
      url_1="/aboutYou"
      image_1={dusanstvo_otebe}
      link_2="Moje zásady"
      url_2="/bushido"
      image_2={dusanstvo_bushido} />
    </PageWrapper>   
    </Scene>
  </Controller>
)

LayoutClients.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutClients
