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


import dusanstvo_landing from "../images/dusanstvo_landing.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import banana_surf from "../images/banana_surf.svg"
import samurai from "../images/samurai.svg"



const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  transition: 0.4s;
  &.change_color {
    background: var(--orange);
  }
  .subpage {
    font-size: 23vw;
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
  position: relative;
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
const BushidoRule = styled.div`
  width: 100vw;
  border-top: 1px solid var(--black);
  padding: 50px;
  text-align: center;
  z-index: 99999999;
  h2 {
    padding-top: 0px;
    width: 900px;
    font-size: 40px;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px var(--black); 
  }
  &:hover {
    background-image: url(${banana_surf});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 200px;
    h2 {
      color: var(--white);
      -webkit-text-stroke: 0px; 
    }
  }
`
const Samurai = styled.div`
  position: absolute;
  bottom: 0%;
  right: -100px;
  width: 450px;
  height: 400px;
  background: url(${samurai});
  background-repeat: no-repeat;
  background-size: cover;
`

const LayoutBushido = ({ children }) => ( 
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
            <h1 className="subpage">BUSHIDO</h1>
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
          <h2>Som freelancer, ktorý túži mať svätý pokoj.</h2>
          <ImageWrapper>
            <img src={dusanstvo_landing} alt='' />
          </ImageWrapper>
          <BlokLeft>
            <p id="trigger_hide_text">Mám to premyslené. Pri svojej práci sa riadim týmito zásadami:
            </p>
          </BlokLeft>
          <Samurai id="trigger_orange"/>
        </TextWrapper>
          <BushidoRule>
            <h2>Šťastní je ten, kto dosiahne poznanie a slobodu, nie slávu alebo bohatstvo</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Úspešný je ten, kto so svojim časom môže naložiť, ako uzná za vhodné</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Menej je niekedy viac, uprednostňuj kvalitu pred kvantitou</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Rob výhradne pre spriaznené duše, nervy tvoje ušetrí to</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Keď niečo robíš, snaž sa urobiť viac ako sa od teba očakáva</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Nesľúb nikdy klientovi svojmu, čo splniť nedokážeš</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Napriek tomu, že freelancer si, snaž sa o budovanie dlhodobých vzťahov</h2>
          </BushidoRule>
          <BushidoRule>
            <h2>Konaj premyslene, a vyhýbaj sa neuváženým rozhodnutiam</h2>
          </BushidoRule>
          <BushidoRule id="trigger_hide_social">
            <h2>Váž si svoj a druhých čas, a štíť sa otravovať ich pozornosť</h2>
          </BushidoRule>
          <BushidoRule id="trigger_hide_scroll">
            <h2>Nevezmeš meno klientovo nadarmo, lež ochraňovať budeš ho</h2>
          </BushidoRule>
        <Footer 
        link_1="Premysli si to aj ty"
        url_1="/aboutYou"
        image_1={dusanstvo_otebe}
        link_2="Ako som sa k tomu dopracoval "
        url_2="/aboutMe"
        image_2={dusanstvo_omne} />
      </PageWrapper>
    </Scene>
  </Controller>
)

LayoutBushido.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBushido
