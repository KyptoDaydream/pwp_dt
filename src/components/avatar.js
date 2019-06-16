import * as React from 'react'
import styled from 'styled-components'


import bushido_avatar from "../images/bushido_avatar_3.svg"
import bushido_avatar_white from "../images/bushido_avatar_3_white.svg"



const AvatarImage = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background: url(${props => props.color ? bushido_avatar_white : bushido_avatar});
  transition: 0.3s;
  z-index: 9999;
  &:hover {
    transform: scale(0.8);
  }
  @media (max-width: 1000px) {
    left: 10px;
    top: 25px;
  }
`

class Avatar extends React.Component {
  render () {
    return (
      <AvatarImage color={this.props.white}/>
    )
  }
}

export default Avatar
