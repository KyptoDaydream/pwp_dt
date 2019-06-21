import * as React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  position: fixed;
  width: 700px;
  padding-left: 50px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 9999;
  a {
      position: relative;
      margin: 25px 20px;
      transition: 0.3;
      background-color: none;
    &:before {
      content: '';
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -3px;
      height: 2px;
      background-color: var(--black);
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
  }
  @media (max-width: 700px) {
		display: none;
  }	
`
class Footer extends React.Component {
  render () {
    return (
      <FooterWrapper>
        <a className="footerLink" target="_new" href="https://www.linkedin.com/in/dusantatransky/">LINKEDIN</a>
        <a className="footerLink" target="_new" href="https://medium.com/@dusantatransky">MEDIUM</a>
        <a className="footerLink" target="_new" href="https://www.goodreads.com/user/show/69845863-dusan-tatransky">GOODREADS</a>
      </ FooterWrapper>
    )
  }
}

export default Footer
