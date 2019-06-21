import * as React from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`{
  width: 100%;
  height: 100%;
  background: url(${props => props.props});
  background-size: 190%;
  position: relative;
  overflow: hidden;
  @media (max-width: 1000px) {
    background-position: -150px 0;
  }
  @media (max-width: 800px) {
    background-size: cover;
    background-position: inherit;
  }
}
`
class GlitchImage extends React.Component {
  render () {
    return (
      <ImageWrapper props={this.props.url} />
    )
  }
}

export default GlitchImage
