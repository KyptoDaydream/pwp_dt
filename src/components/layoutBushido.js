/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import Burger from "./burger"
import Social from "./social"

import avatar_default from "../images/avatar_black.png"
import avatar_hover from "../images/avatar_green.png"
import bushido_title from "../images/bushido_title.svg"
import banana from "../images/banana.svg"

const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  .text_block {
    margin: 200px auto;
    padding-bottom: 100px;
    max-width: 550px;
    position: relative;
  }
`
const AvatarButton = styled.div `
  display: block;
  position: fixed;
  top: 20px;
  left: 50px; /* 50%;
  margin-left: -50px; */
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
const BurgerWrapper = styled.div `
  position: fixed;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  z-index: 99999;
`
const BushidoWrapper = styled.div `
  background: var(--orange);
  h2 {
    color: var(--white);
  }
`
const BushitoTitle = styled.img `
  width: 900px;
  max-width: 900px;
  margin: 0 auto;
  display: block;
  padding-top: 100px;
`
const BushidoTextWrapper = styled.div `
  width: 100vw;
  background: var(--white);
  ul {
    list-style: none;
    padding-left: 0;
    li {
      font-size: 13px;
      line-height: 21px;
      font-weight: 400;
      position: relative;
      padding-left: 60px;
      margin-bottom: 40px;
      &:before {
        content: '';
        width: 30px;
        height: 30px;
        position: absolute;
        background-image: url(${banana});
        background-size: cover;
        background-position: center;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`

const LayoutBushido = ({ children }) => ( 
  <PageWrapper>
    <Link to="/">
      <AvatarButton />
    </Link>
    <BurgerWrapper>
      <Burger burger_color="burger_black"/>
    </BurgerWrapper>
    <Social icon='linkedin' />
    <Social icon='medium' />
    <Social icon='goodreads' />
    <BushidoWrapper>
      <BushitoTitle src={bushido_title}/>
      <div className="text_block">
        <h2>Online Bodyguard</h2>
        <p>Mám to premyslené. Pri svojej práci sa riadim týmito zásadami:</p>
      </div>
    </BushidoWrapper>
    <BushidoTextWrapper>
      <div className="text_block">
        <ul>
          <li>Šťastní je ten, kto dosiahne poznanie a slobodu, nie slávu alebo bohatstvo.
          </li>
          <li>Úspešný je ten, kto so svojim časom môže naložiť, ako uzná za vhodné.
          </li>
          <li>Poznaj svoje hranice a počet pracovných hodín limituj.
          </li>
          <li>Rob výhradne pre spriaznené duše, nervy tvoje ušetrí to.
          </li>
          <li>Keď niečo robíš, snaž sa urobiť viac ako sa od teba očakáva.
          </li>
          <li>Nesľúb nikdy klientovi svojmu, čo splniť nedokážeš.
          </li>
          <li>Napriek tomu, že freelancer si, snaž sa o budovanie dlhodobých vzťahov.
          </li>
          <li>Konaj premyslene, a vyhýbaj sa neuváženým rozhodnutiam.
          </li>
          <li>Váž si svoj a druhých čas, a štíť sa otravovať ich pozornosť.
          </li>
          <li>Nevezmeš meno klientovo nadarmo, lež ochraňovať budeš ho.
          </li>
        </ul>
      </div>
    </BushidoTextWrapper>
  </PageWrapper>   
)

LayoutBushido.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBushido
