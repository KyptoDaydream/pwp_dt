import * as React from "react"
import styled from "styled-components"

import hand from "../images/hand.gif"
import arrow from "../images/arrow_right.svg"
import cursor from "../images/cursor.png"

const FooterWrapper = styled.div`
  display: block;
  width: 100vw;
  padding: 50px 50px 0 50px;
  overflow: hidden;
  position: relative;
  background: var(--black);
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--white) !important;
  }
  .hand_gif {
    width: 80px;
    padding: 5px;
    flex: 0;
  }
  form {
    position: relative;
    margin-bottom: 120px;
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
  form .field input {
    padding: 25px 25px 6px 25px !important;
    height: 100%;
    width: 80%;
    border: none !important;
    color: var(--white);
    font-size: 18px;
    box-shadow: none !important;
    border-bottom: solid 1px var(--orange) !important;
    border-radius: 0px;
    background-color: var(--black) !important;
  }
  form .field label {
    font-family: "Raleway", sans-serif;
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
  form .field:hover label {
    color: var(--white);
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
    margin-top: 25px;
    position: relative;
    li {
      list-style: none;
      .arrow {
        display: inline-block;
        transition: 0.3s;
        width: 0px;
        height: 30px;
        margin-left: 40px;
        background: url(${arrow});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
      }
      input {
        font-family: "Raleway", sans-serif;
        font-weight: 900;
        padding-left: 25px;
        height: 100px;
        background: transparent;
        font-size: 48px;
        color: var(--orange);
        border: 0;
        cursor: url(${cursor}), auto;
        &:hover + div {
          width: 45px;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 25px 25px 0 25px;
    form {
      margin-top: 70px;
    }
    p {
      padding: 25px 0 25px 0;
    }
    form .field input:-webkit-autofill,
    form .field input:-webkit-autofill:hover,
    form .field input:-webkit-autofill:focus,
    form .field input:-webkit-autofill:active,
    form .field input {
      width: 100%;
    }
  }
  @media (max-width: 700px) {
    form .field {
      height: 70px;
    }
    form .field label {
      font-size: 24px;
      line-height: 70px;
    }
    form ul.actions li input {
      font-size: 32px;
    }
  }
  @media (max-width: 600px) {
    .hand_gif {
      display: none;
    }
  }
  @media (max-width: 440px) {
    form .field label {
      left: 10px;
      font-size: 20px;
      line-height: 70px;
    }
    form .field input:-webkit-autofill,
    form .field input:-webkit-autofill:hover,
    form .field input:-webkit-autofill:focus,
    form .field input:-webkit-autofill:active,
    form .field input {
      padding: 25px 10px 6px 10px !important;
    }
    form ul.actions li input {
      font-size: 24px;
    }
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
const BlokLeft = styled.div`
  position: relative;
  width: 50%;
  padding: 100px 0;
  p {
    padding: 25px;
    color: var(--white) !important;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
    p {
      padding: 25px 0 25px 0;
    }
  }
`
const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 100px;
  position: relative;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0px 25px 0px 25px;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper id="trigger_hide_burger">
        <TextWrapper>
          <h2 id="contactForm">
            Na začiatok zanalyzujem tvoju online stopu a vypracujem ti zdarma
            Brand Review.
          </h2>
          <BlokLeft>
            <p>
              Nepoužívam žiadne zaručené návody. Zanalyzujem tvoju situáciu a
              prídem s riešením, ktoré bude fungovať unikátne pre teba a tvoje
              možnosti.{" "}
            </p>
          </BlokLeft>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/hurray/"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <input type="text" name="name" id="name" required />
              <label htmlFor="name">Meno a priezvisko</label>
            </div>
            <div className="field">
              <input type="text" name="social_link" id="social_link" required />
              <label htmlFor="social_link">Social media profil (link)</label>
            </div>
            <div className="field">
              <input type="text" name="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Poslať." className="special" />
                <div className="arrow" />
              </li>
            </ul>
          </form>
        </TextWrapper>

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
