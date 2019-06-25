import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import hand from "../images/hand.gif"


const FooterWrapper = styled.div`
  display: block;
  width: 100vw;
  padding: 50px 50px 0 50px;
  overflow: hidden;
  position: relative;
  background: var(--black);
  justify-content: center;
  align-items: center;
  .hand_gif {
    width: 80px;
    padding: 5px;
    flex: 0;
  }
  .footer_mail {
    color: var(--black);
    -webkit-text-stroke: 1px var(--white);
    margin-top: 100px;
    margin-bottom: 100px;
    &:hover {
      color: var(--orange);
      -webkit-text-stroke: 1px var(--black);
    }
  }
  @media (max-width: 1000px) {
    padding: 25px 25px 0 25px;
  }
  @media (max-width: 460px) {
    .footer_mail {
      margin-top: 50px;
      margin-bottom: 70px;
    }
  }
  @media (max-width: 600px) {
    .hand_gif {
      display: none;
    }
  }
`
const Menu = styled.div`
  margin-top: 190px;
  display: block;
  position: relative;
  z-index: 3;
  a {
    position: relative;
    display: block;
  }
  h1.headlines {
    font-family: "Raleway", sans-serif;
    font-weight: 900;
    color: var(--white);
    font-size: 40px;
    text-align: left;
    cursor: pointer !important;
    &:hover {
      -webkit-text-stroke: 0px;
    }
  }
  .home_1:hover + div {
    opacity: 1;
    display: block;
    position: absolute;
    width: 400px;
    left: 50%;
    top: -150px;
    margin-left: -200px;
  }
  .home_2:hover + div {
    opacity: 1;
    display: block;
    position: absolute;
    width: 400px;
    left: 50%;
    top: -150px;
    margin-left: -200px;
  }
  &:hover h1 {
    opacity: 0.3;
  }
  @media (max-width: 600px) {
    margin-top: 70px;
    h1.headlines {
      font-size: 32px;
    }
    .home_1:hover + div,
    .home_2:hover + div {
      display: none;
    }
  }
  @media (max-width: 460px) {
    h1.headlines {
      font-size: 24px;
    }
  }
`
const H1ImageWrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 400px;
  left: 150%;
  top: -150px;
  margin-right: 200px;
`
const H2ImageWrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  opacity: 0;
  z-index: -1;
  width: 400px;
  left: 150%;
  top: -150px;
  margin-right: 200px;
`
const BottomWrapper = styled.div`
  position: relative;
  width: 100%;
  border-top: 3px solid var(--white);
  display: flex;
  height: 90px;
  margin: 15px 0;
  .filler {
    flex: 1;
  }
  a.social {
    position: relative;
    margin: 25px 20px;
    transition: 0.3;
    line-height: 37px;
    color: var(--white);
    flex: 0;
    background-color: none;
    &:before {
      content: "";
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -3px;
      height: 2px;
      background-color: var(--white);
    }
    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -3px;
      left: 0;
      background-color: var(--orange);
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.2s ease-in-out 0s;
      transition: all 0.2s ease-in-out 0s;
      transform-origin: 0% 0%;
    }
    &:hover:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      transform-origin: 0% 0%;
    }
  }
  @media (max-width: 600px) {
    height: 50px;
    a.social {
      line-height: 24px;
      margin: 10px 10px;
      font-size: 12px;
      letter-spacing: 0;
    }
  }
`
class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper id="trigger_hide_burger">
        <Menu onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <Link to={this.props.url_1}>
            <h1 className="headlines home_1">- {this.props.link_1}</h1>
            <H1ImageWrapper>
              <img src={this.props.image_1} alt="" />
            </H1ImageWrapper>
          </Link>
          <Link to={this.props.url_2}>
            <h1 className="headlines home_2">- {this.props.link_2}</h1>
            <H2ImageWrapper>
              <img src={this.props.image_2} alt="" />
            </H2ImageWrapper>
          </Link>
        </Menu>
        <a className="footer_mail" href="mailto:dusan@tatransky.sk">
          dusan@tatransky.sk
        </a>
        <BottomWrapper>
          <a
            className="footerLink social"
            href="https://www.linkedin.com/in/dusantatransky/"
            target="_new"
          >
            LINKEDIN
          </a>
          <a
            className="footerLink social"
            href="https://medium.com/@dusantatransky"
            target="_new"
          >
            MEDIUM
          </a>
          <a
            className="footerLink social"
            href="https://www.goodreads.com/user/show/69845863-dusan-tatransky"
            target="_new"
          >
            GOODREADS
          </a>
          <div className="filler" />
          <img className="hand_gif" src={hand} alt="" />
        </BottomWrapper>
      </FooterWrapper>
    )
  }
}

export default Footer
