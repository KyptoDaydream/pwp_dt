import * as React from "react"
import styled from "styled-components"
import { Controller, Scene } from "react-scrollmagic"

const StoryWrapper = styled.div`
  position: relative;
  margin-top: ${props => props.margin_top};
  width: 100%;
  a {
    background-image: linear-gradient(
      120deg,
      var(--orange) 0%,
      var(--orange) 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 7%;
    background-position: 0 100%;
    transition: 0.3s linear;
    &:hover {
      background-size: 100% 20%;
    }
  }
  h4 {
    z-index: 1;
    padding-top: ${props => props.h4_top};
    margin-left: ${props => props.h4_left};
  }
  h3 {
    margin-top: ${props => props.h3_top};
    margin-left: ${props => props.h3_left};
    margin-bottom: 50px;
  }
  p {
    position: relative;
    margin-left: ${props => props.h3_left};
    max-width: ${props => props.p_width};
  }
  .reveal_photo {
    top: ${props => props.top}px;
    opacity: 1;
  }
  @media (max-width: 1000px) {
    margin-top: 70px;
    h4 {
      margin-left: 0px;
      padding-top: 70px;
      padding-bottom: 50px;
    }
    h3 {
      margin-top: 0;
      margin-left: 0px;
      margin-bottom: 25px;
    }
    p {
      margin-left: 0px;
      margin-right: 0px;
      max-width: 100%;
    }
    .reveal_photo {
      top: 0;
    }
  }
`
const Image = styled.div`
  position: absolute;
  opacity: 0;
  right: ${props => props.right};
  width: ${props => props.width};
  height: ${props => props.height};
  top: ${props => Number(props.top) + 300}px;
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  background: url(${props => props.url});
  background-position: ${props =>
    props.bg_pos ? props.bg_pos : "center center"};
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.6s;
  z-index: 0;
  @media (max-width: 1000px) {
    opacity: 1;
    width: 100%;
    height: 200px;
    position: relative;
    background-position: ${props =>
      props.bg_narrow_pos ? props.bg_narrow_pos : "center center"};
    left: auto;
    right: auto;
    top: 0;
    bottom: auto;
    margin-top: 70px;
  }
`

class Story extends React.Component {
  render() {
    const class_trigger =
      this.props.triggering_class_secondary !== "dont_trigger"
        ? "onCenter"
        : "onLeave"
    return (
      <StoryWrapper
        margin_top={this.props.margin_top}
        top={this.props.top}
        h4_top={this.props.h4_top}
        h4_left={this.props.h4_left}
        h3_top={this.props.h3_top}
        h3_left={this.props.h3_left}
        p_width={this.props.p_width}
      >
        <h4>{this.props.year}</h4>
        <h3 id={this.props.triggering_class}>{this.props.headline}</h3>
        <p id={this.props.triggering_class_secondary}>{this.props.text}</p>
        <Controller globalSceneOptions={{ triggerHook: class_trigger }}>
          <Scene classToggle="reveal_photo" triggerElement={this.props.trigger}>
            <Image
              id={this.props.triggering_class_image}
              url={this.props.image}
              top={this.props.top}
              right={this.props.right}
              bottom={this.props.bottom}
              left={this.props.left}
              width={this.props.width}
              height={this.props.height}
              bg_pos={this.props.bg_pos}
              bg_narrow_pos={this.props.bg_narrow_pos}
            />
          </Scene>
        </Controller>
      </StoryWrapper>
    )
  }
}

export default Story
