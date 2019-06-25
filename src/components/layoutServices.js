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

import dusanstvo_sluzby from "../images/dusanstvo_sluzby.jpg"
import dusanstvo_sluzby_2 from "../images/dusanstvo_sluzby_2.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_klienti from "../images/dusanstvo_klienti.jpg"
import one from "../images/1.svg"
import two from "../images/2.svg"
import three from "../images/3.svg"
import four from "../images/4.svg"
import five from "../images/5.svg"
import six from "../images/6.svg"

const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: var(--black);
  * {
    color: var(--white);
  }
  .bm-burger-bars {
    background-image: linear-gradient(var(--white), var(--white));
  }
  transition: 0.4s;
  &.change_color {
    background: var(--white);
    * {
      color: var(--black);
    }
    .bm-burger-bars {
      background-image: linear-gradient(var(--black), var(--black));
    }
    .scroll_icon_class {
      fill: var(--black);
    }
    .blackbox_text {
      color: var(--white);
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
  .scroll_icon_class {
    fill: var(--white);
  }
  .hide_burger {
    display: none;
  }
`
const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 150px;
  .second_paragraph {
    padding-top: 0;
  }
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

const BlokRight = styled.div`
  position: relative;
  width: 70%;
  margin-left: 30%;
  padding: 100px 0;
  h1 {
    -webkit-text-stroke: 1px var(--white);
    font-size: 130px;
    margin-bottom: 40px;
    &:before {
      position: absolute;
      margin-left: -120px;
      margin-top: 25px;
      width: 80px;
      height: 80px;
      content: "";
      display: inline-block;
    }
    &.one:before {
      background: url(${one});
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.two:before {
      background: url(${two});
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.three:before {
      background: url(${three});
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.four:before {
      background: url(${four});
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.five:before {
      background: url(${five});
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.six:before {
      background: url(${six});
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
    padding-top: 100px;
  }
  img {
    width: 500px;
    position: absolute;
    left: -200px;
    top: 200px;
    transition: 0.6s;
    opacity: 0;
  }
  img.reveal_image {
    opacity: 1;
    top: -200px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    margin-left: 0;
    padding: 0;
    p {
      padding: 25px 0 25px 0;
    }
    h1 {
      font-size: 14vw;
    }
    h1 {
      margin-bottom: 25px;
    }
    .p1_narrow {
      padding: 25px 0 100px 0;
    }
    .p2_narrow {
      padding-top: 200px;
    }
    .p3_narrow {
      padding: 75px 0 100px 0;
    }
    .p4_narrow {
      padding-bottom: 0;
    }
  }
`

const LayoutClients = ({ children }) => (
  <Controller globalSceneOptions={{ triggerHook: "onEnter" }}>
    <Scene classToggle="change_color" triggerElement="#trigger_hide_text">
      <PageWrapper>
        <BurgerWrapper>
          <Controller>
            <Scene
              classToggle="hide_burger"
              triggerElement="#trigger_hide_burger"
            >
              <div>
                <Burger burder_color="burger_white" services="active" />
              </div>
            </Scene>
          </Controller>
        </BurgerWrapper>
        <Link to="/">
          <Avatar white="true" />
        </Link>
        <Controller>
          <Scene classToggle="hide_text" triggerElement="#trigger_hide_text">
            <h1 className="subpage">BRAND</h1>
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
            Ako online bodybuilder ti pomôžem budovať tvoju osobnú značku.
          </h2>
          <ImageWrapper>
            <img src={dusanstvo_sluzby} alt="Dusan Tatransky Sluzby" />
          </ImageWrapper>
          <h2 className="second_paragraph" id="trigger_hide_text">
            Ako online bodyguard ti zas tvoju osobnú značku a reputáciu pomôžem
            chrániť.
          </h2>
          <BlokRight>
            <p id="trigger_hide_text" className="p1_narrow">
              Som freelancer a robím marketing s dušou. Vďaka tomu, že
              spolupracujem s inými osvedčenými freelancermi z oblasti dizajnu,
              produkcie, programovania, IT bezpečnosti a duševného vlastníctva,
              dokážem pre teba zabezpečiť komplexné brandingové služby a
              riešenia.
            </p>
          </BlokRight>
          <BlokRight className="margin-top" id="trigger_reveal_image">
            <Controller globalSceneOptions={{ triggerHook: "onEnter" }}>
              <Scene
                classToggle="reveal_image"
                triggerElement="#trigger_reveal_image"
              >
                <img src={dusanstvo_sluzby_2} alt="" />
              </Scene>
            </Controller>
            <p className="padding_top p2_narrow">
              Pozriem sa na tvoje čísla a štatistiky, navrhnem ti bezpečnostnú
              aktualizáciu, zadefinujem tvoju značku, vymyslím ti stratégiu,
              vytvorím ti logo a webstránku, zabezpečím tvoje publikum, nastavím
              email marketing, optimalizujem vyhľadávače, monitorujem tvoju
              reputáciu, nacením spolupráce či zorganizujem event. Proste
              čokoľvek marketingové potrebuješ.
            </p>
            <p className="p3_narrow">
              Ak chceš vlastniť svoju Identitu, Reputáciu a Publikum, môj postup
              je nasledovný:
            </p>
            <h1 className="one">Brand Review</h1>
            <h1 className="two">Brand Storming</h1>
            <h1 className="three">Brand Book</h1>
            <h1 className="four">Brand Design</h1>
            <h1 className="five" id="trigger_hide_social">
              Brand Strategy
            </h1>
            <h1 className="six" id="trigger_hide_scroll">
              Brand Monitoring
            </h1>
            <p className="padding_top p4_narrow">
              Na začiatok ti ponúkam zdarma Brand Review, s reportom rizík a
              návrhom riešenia, ktoré bude fungovať unikátne pre teba a tvoje
              možnosti.
            </p>
          </BlokRight>
        </TextWrapper>
        <Footer
          link_1="Ziskaj brand review"
          url_1="/oTebe"
          image_1={dusanstvo_otebe}
          link_2="Moji klienti"
          url_2="/klienti"
          image_2={dusanstvo_klienti}
        />
      </PageWrapper>
    </Scene>
  </Controller>
)

LayoutClients.propTypes = {
  children: PropTypes.node,
}

export default LayoutClients
