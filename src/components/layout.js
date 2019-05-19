/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Controller, Scene } from 'react-scrollmagic'
// import { DistortionText } from 'react-text-fun'

import Burger from "./burger"
import Social from "./social"
import Button from "./button"

import avatar_default from "../images/avatar_orange.png"
import avatar_hover from "../images/avatar_green.png"
import bushido from "../images/bushido.jpg"
import scroll_down_img from "../images/scrolldown.svg"
import arrow_down from "../images/arrow_down.svg"
import stripes from "../images/stripes.png"
import dusanstvo from "../images/dusanstvo.svg"
import window_photo_1 from "../images/window_photo_1.png"
import window_photo_2 from "../images/window_photo_2.png"

// import Header from "./header"
//  <Header siteTitle={data.site.siteMetadata.title} />
// import "./layout.css"

const PageWrapper = styled.div `
  width: 100vw;
`
const WelcomeWrapper = styled.div `
  width: 100vw;
  height: 100vh;
`
const AvatarButton = styled.div `
  display: block;
  position: fixed;
  top: 20px;
  left: 50%;
  margin-left: -50px;
  background: url(${avatar_default}) center center no-repeat;
  background-size: cover;
  width: 100px;
  height: 110px;
  transition: 0.6s;
  z-index: 99997;
  cursor: pointer;
  &:hover {
    background: url(${avatar_hover}) center center no-repeat;
    background-size: cover;
  }
`
const ScrollDownWrapper = styled.div `
  width: 84px;
  height: 84px;
  position: absolute;
  bottom: 40px;
  right: 50px;
  z-index: 99998;

  .hover_orange {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 12px;
    left: 12px;
    border-radius: 70px;
    background-color: var(--orange);
    background-image: url(${arrow_down});
    background-size: 20%;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    opacity: 1;
    transition: 1s
  }
  &:hover .hover_orange {
    background-color: var(--green);
  }
`

const BurgerWrapper = styled.div `
  position: fixed;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  z-index: 99999;
`
const Bushido = styled.img `
  z-index: -1;
  position: absolute;
  width: 80%;
  left: 30%;
  top: 0px;
`
const PSST = styled.span`
  color: var(--white);
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 200px;
  letter-spacing: -0.1em;
  position: absolute;
  
  background: url(${stripes}) repeat-y;
  background-size: cover;
	-webkit-background-clip: text;
  background-clip: text;
  left: 30px;
  top: 270px;

  -webkit-text-fill-color: transparent;
  animation: aitf 80s linear infinite;
  transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;

  @keyframes aitf {
	0% { background-position: 0% 50%; }
	100% { background-position: 100% 50%; }
  }
}
`
const TextWelcome = styled.p`
  color: var(--grey);
  position: absolute;
  left: 60px;
  top: 270px;
`
const ScrollDownSvg = styled.img `
  width: 100%;
  height: 100%;
  animation:spin 8s linear infinite;
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`

const HomeWrapper = styled.div `
  width: 900px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 150px;
  position: relative;
  h2 {
    color: var(--white);
    margin-left: 0;
    max-width: 500px;
  }
  p {
    color: var(--white);
    margin-left: 0;
    max-width: 500px;
    margin-bottom: 40px;
  }
  .window_photo_1 {
    position: absolute;
    right: -100px;
    top: 0px;
    width: 400px;
    z-index: 1000;
  }
  .window_photo_2 {
    position: absolute;
    right: 0px;
    top: 250px;
    width: 700px;
    z-index: 1001;
  }
`
const DusanstvoWrapper = styled.div`
  width: 100vw;
  position: relative;
  background: transparent;
  transition: 1s;
  &.turn_orange {
    background: var(--orange);
  }
`
const BushidoWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-top: 800px;
`
const Dusanstvo = styled.img`
  z-index: -1;
  background: var(--bg_black);
  &.d1 {
    margin-top: -50px;
  }
  &.d2 {
    margin-top: -150px;
  }
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <PageWrapper>
        <Link to="/">
          <AvatarButton />
        </Link>
        <BurgerWrapper>
          <Burger burder_color="burger_white"/>
        </BurgerWrapper>
        <Social icon='linkedin' />
        <Social icon='medium' />
        <Social icon='goodreads' />
        <WelcomeWrapper>
          <h1>Dušan Tatranský</h1>
          <Bushido src={bushido} />
          <TextWelcome>Som Online Bodyguard z ďalekého východu ... z Košíc</TextWelcome>
          <PSST>PSST!</PSST>
          <ScrollDownWrapper>
            <ScrollDownSvg src={scroll_down_img}/>
            <div className='hover_orange' />
          </ScrollDownWrapper>
        </WelcomeWrapper>
        <HomeWrapper>
          <p>Som Dušan Tatranský a ty nie.</p>
          <p>Od roku 2008 ma baví a od roku 2011 ma živí marketing.
            Chcem aby sa viac ľudí dokázalo uživiť tým, čo ich baví.
            Preto ľudom ako ty pomáham budovať osobnú značku.
          </p>
          <Button text="čítaj o mne" url="/aboutMe"/> 
          <img className="window_photo_1" src={window_photo_1} alt=''/>
          <img className="window_photo_2" src={window_photo_2} alt=''/>
        </HomeWrapper>
        <Controller>
          <Scene classToggle="turn_orange" triggerElement="#trigger_turn_orange">
            <DusanstvoWrapper>
              <Dusanstvo className="d1" src={dusanstvo} alt=''/>
              <Dusanstvo className="d2" src={dusanstvo} alt=''/>
              <Dusanstvo className="d2" src={dusanstvo} alt=''/>
              <Dusanstvo className="d2" src={dusanstvo} alt=''/>
              <Dusanstvo className="d2" src={dusanstvo} alt=''/>
            </DusanstvoWrapper>
            <BushidoWrapper/>
          </Scene>
        </Controller>
        <main>{children}</main>
      </PageWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
