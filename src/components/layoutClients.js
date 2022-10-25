import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { Controller, Scene } from "react-scrollmagic"

import Avatar from "./avatar"
import Burger from "./burger"
import FooterHome from "./footerHome"
import Footer from "./footer"
import ScrollDown from "./scrollDown"

import dusanstvo_klienti from "../images/dusanstvo_klienti.jpg"
import dusanstvo_klienti_2 from "../images/dusanstvo_klienti_4.gif"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_bushido from "../images/dusanstvo_landing.jpg"

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--white);
  transition: 0.4s;
  &.change_color {
    background: var(--orange);
    .bm-burger-bars {
      &:before {
        background-image: linear-gradient(
          var(--white),
          var(--white)
        ) !important;
      }
    }
    h1.content_highligh {
      -webkit-text-stroke: 1px var(--orange);
    }
  }
  .subpage {
    font-size: 29vw;
  }
  .hide_text {
    opacity: 0;
    z-index: -1;
  }
  .hide_social {
    display: none;
  }
  .hide_scroll {
    display: none;
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
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
    p {
      padding: 25px 0 25px 0;
    }
    .p1_narrow {
      padding: 0 0 100px 0;
    }
  }
`
const BlokRight = styled.div`
  position: relative;
  width: 70%;
  margin-left: 30%;
  padding: 100px 0;
  h1 {
    font-size: 130px;
    -webkit-text-stroke: 1px var(--white);
  }
  h3 {
    padding-top: 50px;
  }
  p {
    padding: 50px 25px 25px 0;
  }
  .p2_narrow {
    a {
      text-decoration: underline;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
    p {
      padding: 25px 0 25px 0;
    }
    h1 {
      font-size: 19vw;
    }
    .p2_narrow {
      padding: 100px 0 100px 0;
      a {
        text-decoration: underline;
      }
    }
  }
`

const ImageWrapper2 = styled.div`
  position: absolute;
  top: 400px;
  left: -550px;
  width: 400px;
  height: 500px;
  background: url(${dusanstvo_klienti_2});
  background-position: center;
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
          <Controller>
            <Scene
              classToggle="hide_burger"
              triggerElement="#trigger_hide_burger"
            >
              <div>
                <Burger burder_color="burger_white" clients="active" />
              </div>
            </Scene>
          </Controller>
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
          <Scene
            classToggle="hide_social"
            triggerElement="#trigger_hide_social"
          >
            <div>
              <FooterHome />
            </div>
          </Scene>
        </Controller>
        <Controller>
          <Scene
            classToggle="hide_scroll"
            triggerElement="#trigger_hide_scroll"
          >
            <div>
              <ScrollDown />
            </div>
          </Scene>
        </Controller>
        <TextWrapper>
          <h2>
            Stanem sa najväčším expertom na tvoj brand. A nikomu o tom nepoviem
            ...
          </h2>
          <ImageWrapper>
            <img src={dusanstvo_klienti} alt="Dusan Tatransky Klienti" />
          </ImageWrapper>
          <BlokLeft>
            <p id="trigger_hide_text" className="p1_narrow">
              Tvoju osobnú značku budem chrániť celým Dušanom. Nebudem si brať
              kredit za tvoje budúce úspechy. Fungujem ako tieňový marketér pre
              známe osobnosti. Dôveru svojich klientov si vážim a ich mená a
              dáta strážim.
            </p>
          </BlokLeft>
          <BlokRight id="trigger_orange">
            <Controller>
              <Scene
                classToggle="reveal_image"
                triggerElement="#trigger_hide_social"
              >
                <ImageWrapper2 />
              </Scene>
            </Controller>
            <h1 className="content_highligh" id="trigger_hide_social">
              Beriem to osobne
            </h1>
            <p id="trigger_hide_scroll" className="p2_narrow">
              Počet mojich klientov je limitovaný, každému sa venujem osobne.
              Viem tak poskytnúť najkvalitnejšiu službu. Ostatným sa venujem cez{" "}
              <a href="https://www.dusantatransky.sk/oTebe/">email</a>.
            </p>
            <h3>Počet klientov:</h3>
            <h1 className="content_highligh" id="trigger_hide_social">
              6/9
            </h1>
          </BlokRight>
        </TextWrapper>
        <Footer
          link_1="Buď hrdina online"
          url_1="/oTebe"
          image_1={dusanstvo_otebe}
          link_2="Moje zásady"
          url_2="/bushido"
          image_2={dusanstvo_bushido}
        />
      </PageWrapper>
    </Scene>
  </Controller>
)

LayoutClients.propTypes = {
  children: PropTypes.node,
}

export default LayoutClients
