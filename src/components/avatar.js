import * as React from 'react'
import styled from 'styled-components'


import bushido_avatar from "../images/bushido_avatar.svg"



const AvatarImage = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  background: url(${bushido_avatar});
  transition: 0.3s;
  z-index: 9999;
  &:hover {
    transform: scale(0.8);
  }
`

class Avatar extends React.Component {
  render () {
    return (
      <AvatarImage />
    )
  }
}

export default Avatar
