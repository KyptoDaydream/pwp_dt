import { slide as Menu } from "react-burger-menu"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import Social from "./social"

import burger from "../images/burger.svg"
import burger_hover from "../images/burger_hover.svg"
// import burger_close from "../images/burger_close.svg"
import hand from "../images/monkey_menu.gif"

const MenuWrapper = styled.div`
  .bm-burger-button {
    z-index: 1000;
    width: 40px;
    height: 20px;
    position: absolute;
    right: 60px;
    top: 90px;
    border-radius: 50%;
    span {
      display: block;
    }
   /* button {
      display: none;
      background: url(${burger}) !important;
      background-size: cover !important;
      background-repeat: no-repeat;
      width: 60% !important;
      height: 60% !important;
      left: 20% !important;
      top: 20% !important;
      &:hover {
        background: url(${burger_hover}) !important;
        background-size: cover !important;
        background-repeat: no-repeat;
      }
    }*/
  }
  @media (max-width: 700px) {
    .bm-burger-button {
    z-index: 1000;
    width: 25px;
    height: 15px;
    position: absolute;
    right: 50px;
    top: 50px;
  }
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.8) !important;
  }
  .bm-burger-bars {
    background: var(--black);
    /*background-image: linear-gradient(var(--black), var(--black));
    background-repeat: no-repeat;*/
    position:relative;
    overflow: hidden;
    &:before {
      display: block;
      content: '';
      background-image: linear-gradient(var(--orange), var(--orange));
      margin-left: -100%;
      transition: 0.2s;
      height: 100%;
      width: 100%;
    }
  }
  &:hover .bm-burger-bars:before {
      margin-left: 0;
  }
  &.burger_black {
    .bm-burger-bars {
      background-image: linear-gradient(var(--black), var(--black));
    }
  }
  .bm-cross-button {
    position: absolute;
    top: 70px !important;
    right: 70px !important;
    width: 50px !important;
    height: 50px !important;
    cursor: pointer !important;
    span {
      background: var(--white);
      display: block;
    }
  }
  .bm-burger-button:hover .bm-burger-bars {
    background: var(--orange);
    /* background-image: linear-gradient(var(--orange), var(--orange)); */
    opacity: 1 !important;
  }
  .bm-cross {
    margin-top: 2px;
    margin-left: -7px;
    background: var(--black);
    width: 5px !important;
    height: 40px !important;
    transition: 0.3s;
  }
  @media (max-width: 700px) {
    .bm-cross-button {
      position: absolute;
      top: 50px !important;
      right: 60px !important;
      width: 25px !important;
      height: 25px !important;
    }
    .bm-cross {
      margin-top: -5px;
      margin-left: 0px;
      height: 20px !important;
    }
  }
  .bm-cross-button:hover .bm-cross{
    background-image: linear-gradient(var(--orange), var(--orange));
  }
  .bm-item-list {
    height: auto !important;
    width: 100%;
    margin-top: 50px;
    margin-left: 200px;
  }
  .bm-menu-wrap {
    background: var(--black); 
    z-index: 999999999;
  }
  .bm-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${hand});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 200px;
  }
  .bm-item{
    text-align: left;
    text-decoration: none;
    padding: 5px 0;
  }
  div.bm-item {
    margin-top: 60px;
  }
  @media (max-width: 1000px) {
    .bm-menu {
      background: url(${hand});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: left;
    }
  }
  @media (max-width: 550px) {
    .bm-item-list {
      height: auto !important;
      width: auto;
      margin-top: 50px;
      margin-left: 0;
    }
  }
  @media (max-width: 390px) {
    .bm-menu {
      background: url(${hand});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: -100px;
    }
  }
`
const MenuItem = styled.span`
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  color: var(--white) !important;
  font-size: 40px;
  text-align: left;
  cursor: pointer !important;
  &:hover {
    color: var(--orange) !important;
  }
  /* 
  font-family: 'Rubik Mono One', sans-serif; 
  font-weight: 900;
  text-transform: uppercase;
  */
  &.active_link {
    color: transparent !important;
    -webkit-text-stroke: 1px var(--white);
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }
`
class Burger extends React.Component {
  constructor() {
    super()
    this.overAboutme = this.overAboutme.bind(this)
    this.overAboutyou = this.overAboutyou.bind(this)
    this.overSerivces = this.overSerivces.bind(this)
    this.overClients = this.overClients.bind(this)
    this.overBushido = this.overBushido.bind(this)
  }
  overAboutme(e) {
    if (this.props.aboutMe) {
      e.preventDefault()
    }
  }
  overAboutyou(e) {
    if (this.props.aboutYou) {
      e.preventDefault()
    }
  }
  overSerivces(e) {
    if (this.props.services) {
      e.preventDefault()
    }
  }
  overClients(e) {
    if (this.props.clients) {
      e.preventDefault()
    }
  }
  overBushido(e) {
    if (this.props.bushido) {
      e.preventDefault()
    }
  }
  render() {
    const aboutMe_class = this.props.aboutMe ? "active_link" : ""
    const aboutYou_class = this.props.aboutYou ? "active_link" : ""
    const services_class = this.props.services ? "active_link" : ""
    const clients_class = this.props.clients ? "active_link" : ""
    const bushido_class = this.props.bushido ? "active_link" : ""
    return (
      <MenuWrapper className={this.props.burger_color}>
        <Menu right width={"100%"}>
          <Link to="/oMne" onClick={this.overAboutme}>
            <MenuItem className={aboutMe_class}>O Mne</MenuItem>
          </Link>
          <Link to="/oTebe" onClick={this.overAboutyou}>
            <MenuItem className={aboutYou_class}>O Tebe</MenuItem>
          </Link>
          <Link to="/sluzby" onClick={this.overSerivces}>
            <MenuItem className={services_class}>Služby</MenuItem>
          </Link>
          <Link to="/klienti" onClick={this.overClients}>
            <MenuItem className={clients_class}>Klienti</MenuItem>
          </Link>
          <Link to="/bushido" onClick={this.overBushido}>
            <MenuItem className={bushido_class}>Bushido</MenuItem>
          </Link>
        </Menu>
      </MenuWrapper>
    )
  }
}

export default Burger
