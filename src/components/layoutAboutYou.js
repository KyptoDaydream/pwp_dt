import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { Controller, Scene } from "react-scrollmagic"

import Avatar from "./avatar"
import Burger from "./burger"
import FooterHome from "./footerHome"
import FooterContact from "./footerContact"
import ScrollDown from "./scrollDownMail"

import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_otebe_2 from "../images/dusanstvo_otebe_2.jpg"
import monkey from "../images/monkey_head.png"
// import monkey from "../images/monkey.svg"

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
  padding-bottom: 50px;
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
    position: relative;
    &:before {
      position: absolute;
      margin-left: -120px;
      margin-top: 25px;
      width: 100px;
      height: 80px;
      content: "";
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
    .p3_narrow {
      padding: 100px 0 0 0;
    }
    .p2_narrow {
      padding: 100px 0;
    }
    .p1_narrow {
      padding: 25px 0 50px 0;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 500px;
      position: relative;
      margin-left: -200px;
      padding-top: 450px;
      transition: 0.6s;
      opacity: 0;
    }
    img.reveal_image {
      opacity: 1;
      margin-left: -200px;
      padding-top: 50px;
    }
  }
`
const Trigger = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  display: block;
`

const LayoutAboutYou = ({ children }) => (
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
                <Burger burder_color="burger_white" aboutYou="active" />
              </div>
            </Scene>
          </Controller>
        </BurgerWrapper>
        <Link to="/">
          <Avatar white="true" />
        </Link>
        <Controller>
          <Scene classToggle="hide_text" triggerElement="#trigger_hide_text">
            <h1 className="subpage">FREE</h1>
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
            triggerElement="#trigger_hide_social"
          >
            <div>
              <ScrollDown />
            </div>
          </Scene>
        </Controller>
        <TextWrapper>
          <h2>
            Si opica!
            <br />
            <br />A ja budem tvoj marketingový sensei, ktorý ti ukáže cestu.
          </h2>
          <ImageWrapper>
            <img src={dusanstvo_otebe} alt="Dusan Tatransky Follower" />
          </ImageWrapper>
          <h2 className="second_paragraph" id="trigger_hide_text">
            Chceš byť sám sebe pánom a neopičiť sa po iných?
          </h2>
          <BlokRight id="trigger_hide_text">
            <p id="trigger_reveal_image_1" className="p1_narrow">
              Život je príliš krátky na to, aby si sedel v práci, ktorá ťa
              nebaví. Nezáleží na tom, či chceš byť umelec, freelancer alebo
              influencer. Podstatné je, že sa chceš živiť tým čo ťa baví. A
              preto chceš, aby ťa v online svete bolo vidieť a počuť. Problém
              je, že tvoj aktuálny marketing, ktorý si niekde odkukal, smrdí.
            </p>
            <Controller globalSceneOptions={{ triggerHook: "onCenter" }}>
              <Scene
                classToggle="reveal_image"
                triggerElement="#trigger_reveal_image_1"
              >
                <img
                  src={dusanstvo_otebe_2}
                  alt=""
                  id="trigger_reveal_image_1"
                />
              </Scene>
            </Controller>
            <p className="padding_top p2_narrow">
              Ak chceš začať podnikať na voľnej nohe, musíš si uvedomiť, že keď
              budeš robiť to čo všetci ostatní, neprinesieš ľuďom žiadnu pridanú
              hodnotu a zanikneš v dave. Aby si využil svoj jedinečný potenciál
              naplno, a zaistil si stabilné miesto medzi freelancermi,
              potrebuješ niekoho, kto si tým už prešiel. Pomôžem ti prekonať
              prekážky na tvojej ceste k samostatnosti tým, že ti budem
              pravidelne zasielať email so všetkým, čo by si si mal premyslieť a
              vyskúšať. Napríklad veci ako:
            </p>
            <h1>BIZNIS IDEA</h1>
            <h1>BIZNIS PLÁN</h1>
            <h1>CENOTVORBA</h1>
            <h1>PONUKA</h1>
            <h1>PUBLIKUM</h1>
            <h1>PRÁVNE VECI</h1>
            <p className="padding_top p3_narrow">
              Nepoužívam žiadne zaručené návody. Inšpirácia formou pravidelného
              emailu, ktorú ti ponúkam, spočíva v hľadaní funkčnosti a riešenia
              tvojej unikátnej situácie. 2x za mesiac ťa tak posuniem o krok
              bližšie k slobode.
            </p>
            <Trigger id="trigger_hide_social" />
          </BlokRight>
        </TextWrapper>
        <FooterContact />
      </PageWrapper>
    </Scene>
  </Controller>
)

LayoutAboutYou.propTypes = {
  children: PropTypes.node,
}

export default LayoutAboutYou
