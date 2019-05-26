import { slide as Menu } from 'react-burger-menu'
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Social from "./social"

const MenuWrapper = styled.div `
  .bm-burger-button {
    z-index: 1000;
    width: 20px;
    height: 10px;
    position: absolute;
    right: 80px;
    top: 60px;
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
    background-image: linear-gradient(var(--white), var(--white));
    border-radius: 5px;
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
    @keyframes slide_1 {
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
    }
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
  }
  .bm-menu-wrap {
    background: var(--green); 
  }
  .bm-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bm-item{
    text-align: center;
    text-decoration: none;
    
  }
`
const MenuItem = styled.span`
  
  font-family: 'Titan One', cursive;
  color: var(--green);
  -webkit-text-stroke: 1px var(--black); 
  /* 
  font-family: 'Rubik Mono One', sans-serif; 
  font-weight: 900;
  */
  font-size: 48px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color:var(--orange);    
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }
`
class Burger extends React.Component {
  render () {
    return (
      <MenuWrapper className={this.props.burger_color}>
        <Menu right width={ '600px' }>
          <Link to="/aboutMe"><MenuItem>O Mne</MenuItem></Link>
          <Link to="/sluzby"><MenuItem>O Tebe</MenuItem></Link>  
          <Link to="/sluzby"><MenuItem>Služby</MenuItem></Link>  
          <Link to="/sluzby"><MenuItem>Klienti</MenuItem></Link>  
          <Link to="/bushido"><MenuItem>Bushido</MenuItem></Link>
          <div>
            <Social icon='linkedin_nav' />
            <Social icon='medium_nav' />
            <Social icon='goodreads_nav' />
          </div>
        </Menu>
      </MenuWrapper>
    );
  }
}

export default Burger