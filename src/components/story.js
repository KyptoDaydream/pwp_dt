import * as React from 'react'
import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'

const StoryWrapper = styled.div`
  position: relative;
  width: 100%;
  h4 {
    margin-left: 400px;
  }
  h3 {
    margin-top: 100px;
    margin-left: 150px;
    margin-bottom: 50px;
  }
  p {
    position: relative;
    margin-left: 150px;
    max-width: 350px;
  }
  .reveal_photo {
    top: 0;
    opacity: 1;
  }
`
const Image = styled.div`
  position: absolute;
  opacity: 0;
  right: -50px;
  width: 390px;
  height: 590px;
  top: 300px;
  background: url(${props => props.props});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.6s;
`

class Story extends React.Component {
  render () {
    return (
      <StoryWrapper>
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene classToggle="reveal_photo" triggerElement={this.props.trigger}>
              <Image props={this.props.image} />
            </Scene>
          </Controller>
          <h4>
            {this.props.year}
          </h4>
          <h3>
            {this.props.headline}
          </h3>
          <p>
            {this.props.text}
          </p>
      </StoryWrapper>
    )
  }
}

export default Story
