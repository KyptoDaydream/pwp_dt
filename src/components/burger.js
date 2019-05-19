import { slide as Menu } from 'react-burger-menu'
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Social from "./social"

const MenuWrapper = styled.div `
  .bm-burger-button {
    z-index: 1000;
    width: 40px;
    height: 30px;
    position: absolute;
    right: 80px;
    top: 60px;
  }
  @media (max-width: 700px) {
    .bm-burger-button {
    z-index: 1000;
    width: 30px;
    height: 20px;
    position: absolute;
    right: 50px;
    top: 25px;
  }
  }
  .bm-burger-bars {
    background: var(--white);
    border-radius: 5px;
    transition: 0.4s;
  }
  &.burger_black {
    .bm-burger-bars {
      background: var(--bg_black);
    }
  }
  .bm-cross-button {
    position: absolute;
    top: 50px !important;
    right: 70px !important;
    width: 50px !important;
    height: 50px !important;
  }
  .bm-burger-button:hover .bm-burger-bars {
    background: var(--orange);
    opacity: 1 !important;
  }
  .bm-cross {
    margin-left: -15px;
    background: black;
    border-radius: 5px;
    width: 7px !important;
    height: 40px !important;
    transition: 0.3s;
  }
  .bm-cross-button:hover .bm-cross{
    background: var(--orange);
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
  font-family: 'Rubik Mono One', sans-serif;
  color: var(--bg_black);
  font-size: 48px;
  font-weight: 900;
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
        <Menu right width={ '100%' }>
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