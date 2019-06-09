import { slide as Menu } from 'react-burger-menu'
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import Social from "./social"


import burger from "../images/burger.svg"
import burger_hover from "../images/burger_hover.svg"
import burger_close from "../images/burger_close.svg"
import hand from "../images/monkey_menu.gif"

const MenuWrapper = styled.div `
  .bm-burger-button {
    z-index: 1000;
    width: 40px;
    height: 20px;
    position: absolute;
    right: 80px;
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
    width: 20px;
    height: 10px;
    position: absolute;
    right: 50px;
    top: 25px;
  }
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.8) !important;
  }
  .bm-burger-bars {
    background-image: linear-gradient(var(--black), var(--black));
    background-repeat: no-repeat;
    transition: 0.3s;
    &:nth-child(1) {
      background-size: 50px 100%;
      animation: slide_1 2s linear infinite;
    }
    &:nth-child(2) {
      background-size: 75px 100%;
      animation: slide_2 2.5s linear infinite;
    }
    &:nth-child(3) {
      background-size: 100px 100%;
      animation: slide_3 3s linear infinite;
    }
    /*@keyframes slide_1 {
      0% {background-position: 50px;}
      100% {background-position: -50px;}
    }
    @keyframes slide_2 {
      0% {background-position: 75px;}
      100% {background-position: -75px;}
    }
    @keyframes slide_3 {
      0% {background-position: 100px;}
      100% {background-position: -100px;}
    }*/
  }
  &.burger_black {
    .bm-burger-bars {
      background-image: linear-gradient(var(--black), var(--black));
    }
  }
  .bm-cross-button {
    position: absolute;
    top: 50px !important;
    right: 70px !important;
    width: 20px !important;
    height: 20px !important;
    cursor: pointer !important;
    span {
      display: none;
    }
    button {
      background: url(${burger_close}) !important;
      background-size: cover !important;
      background-repeat: no-repeat;
    }
  }
  .bm-burger-button:hover .bm-burger-bars {
    background-image: linear-gradient(var(--orange), var(--orange));
    opacity: 1 !important;
  }
  .bm-cross {
    margin-top: 2px;
    margin-left: -7px;
    background: var(--black);
    width: 4px !important;
    height: 20px !important;
    transition: 0.3s;
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
`
const MenuItem = styled.span`
  font-family: 'Raleway', sans-serif;
    font-weight: 900;
    color: var(--white) !important;
    font-size: 40px;
    text-align: left;
    &:hover {
      color: var(--orange) !important;
    }
  /* 
  font-family: 'Rubik Mono One', sans-serif; 
  font-weight: 900;
  text-transform: uppercase;
  */
  cursor: pointer;
  @media (max-width: 550px) {
    font-size: 32px;
  }
`
class Burger extends React.Component {
  render () {
    return (
      <MenuWrapper className={this.props.burger_color}>
        <Menu right width={ '100%' }>
          <Link to="/aboutMe"><MenuItem>O Mne</MenuItem></Link>
          <Link to="/aboutYou"><MenuItem>O Tebe</MenuItem></Link>  
          <Link to="/services"><MenuItem>Služby</MenuItem></Link>  
          <Link to="/clients"><MenuItem>Klienti</MenuItem></Link>  
          <Link to="/bushido"><MenuItem>Bushido</MenuItem></Link>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default Burger