import * as React from 'react'
import styled from 'styled-components'
// import { Link } from "gatsby"

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
  form {
    position: relative;
    margin-bottom: 70px;
  }
  form .field {
    position: relative;
    height: 100px;
    margin-bottom: 25px;
  }
  form .field input:-webkit-autofill,
  form .field input:-webkit-autofill:hover, 
  form .field input:-webkit-autofill:focus, 
  form .field input:-webkit-autofill:active,
  form .field input{
    padding:25px 25px 6px 25px !important;
    height:100%;
    width: 50%;
    border:none !important;
    color: var(--white);
    font-size: 18px;
    box-shadow:none !important;
    border-bottom:solid 1px var(--orange) !important;
    border-radius: 0px;
    background-color: var(--black) !important;
  }
  form .field label {
    font-family: 'Raleway', sans-serif;
    font-weight: 900;
    color: var(--black);
    -webkit-text-stroke: 1px var(--white);
    font-size: 40px;
    text-align: left;
    position: absolute;
    top: 0px;
    left: 25px;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-in-out;
    line-height: 100px;
  }
  form .field input:valid {
    background-color: var(--black);
  }
  form .field input:valid + label,
  form .field input:focus + label { 
    color: var(--orange); 
    -webkit-text-stroke: 0px var(--white);
    font-weight: 700; 
    font-size: 12px; 
    line-height: 80px;
    transform: translate3d(0, -10px, 0);
  }
  form ul.actions {
    position: absolute;
    bottom: 50px;
    right: 0;
  }
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
    &:before {
      content: '';
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
`
class Footer extends React.Component {
  render () {
    return (
      <FooterWrapper>
        <form name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field">
            <input type="text" name="name" id="name" required/>
            <label htmlFor="name">Meno a priezvisko</label>
          </div>
          <div className="field">
            <input type="text" name="social_link" id="social_link" required/>
            <label htmlFor="social_link">Social media profil (link)</label>
          </div>
          <div className="field">
            <input type="text" name="email" id="email" required/>
            <label htmlFor="email">Email</label> 
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
          </ul>
        </form>
        <BottomWrapper>
          <a className="footerLink social" href="https://www.facebook.com/dusan.tatransky">LINKEDIN</a>
          <a className="footerLink social" href="https://www.facebook.com/dusan.tatransky">MEDIUM</a>
          <a className="footerLink social" href="https://www.facebook.com/dusan.tatransky">GOODREADS</a>
          <div className="filler" />
          <img className="hand_gif" src={hand} alt='' />
        </BottomWrapper>
      </FooterWrapper>
    )
  }
}

export default Footer
