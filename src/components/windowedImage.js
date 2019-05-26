import * as React from 'react'
import styled from 'styled-components'

import window_bar from "../images/window_bar.png"
import window_controls from "../images/window_controls.png"

const ImageWrapper = styled.div`
  border: 1px solid #ababab;
  width: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: -5px 28px 59px -11px rgba(0,0,0,0.4);
-moz-box-shadow: -5px 28px 59px -11px rgba(0,0,0,0.4);
box-shadow: -5px 28px 59px -11px rgba(0,0,0,0.4);
  img {
    margin-top: 20px;
  }
  &:before {
    width: 100%;
    height: 20px;
    top: 0%;
    content: '';
    position: absolute;
    display: block;
    background: url(${window_bar}) repeat-x;
    background-size: 20px 100%;
  }
  &:after {
    height: 20px;
    content: '';
    top: 0%;
    width: 100%;
    position: absolute;
    display: block;
    background: url(${window_controls});
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 40px;
  }
`
class WindowedImage extends React.Component {
  render () {
    return (
      <ImageWrapper>
        <img src={this.props.url} alt=""/>
      </ImageWrapper>
    )
  }
}

export default WindowedImage
