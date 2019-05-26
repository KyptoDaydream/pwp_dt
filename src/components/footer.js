import * as React from 'react'
import styled from 'styled-components'

import finger_white from "../images/finger_green.svg"


const FooterWrapper = styled.div`
  position: fixed;
  height: 30px;
  width: 100vw;
  bottom: 0;
  background-image: url('https://www.onlygfx.com/wp-content/uploads/2019/02/7-noise-texture-overlays-4.png');
  background-size: cover;
  background-color: var(--orange);
  display: flex;
  flex-direction: row;
  }
`
const Social = styled.div`
  width: 210px;
  flex-basis: 210px;
`
const Text = styled.div`
  flex-basis:1;
  flex-grow:1;
`
const ContantButton = styled.a`
  background: var(--black);
  padding: 4px 15px;
  flex-basis: 210px;
  width: 210px;
  color: var(--white);
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 4px;
  height: 20px;
`
const Finger = styled.div`
  flex-basis: 30px;
  width: 30px;
  background: url(${finger_white}) no-repeat;
  background-size: cover;
  color: var(--white);
  animation: swing 3s linear infinite;
  @keyframes swing {
    { 0% { -webkit-transform: rotate(0deg); transform:rotate(0deg); }
     25% { -webkit-transform: rotate(-10deg); transform:rotate(-10deg); } 
     75% { -webkit-transform: rotate(10deg); transform:rotate(10deg); }
     100% { -webkit-transform: rotate(0deg); transform:rotate(0deg); } }
  }
`
class Footer extends React.Component {
  render () {
    return (
      <FooterWrapper>
        <Social>
        </Social>
        <Text>
        </Text>
        <Finger />
        <ContantButton href="mailto:info@dusantatransky.sk">
          napis@dusantatransky.sk
        </ ContantButton>
      </ FooterWrapper>
    )
  }
}

export default Footer
