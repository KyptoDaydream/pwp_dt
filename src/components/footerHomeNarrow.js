import * as React from 'react'
import styled from 'styled-components'

import linked_in from "../images/linkedin.svg"
import medium from "../images/medium.svg"
import goodreads from "../images/goodreads.svg"
import linked_in_hover from "../images/linkedin_hover.svg"
import medium_hover from "../images/medium_hover.svg"
import goodreads_hover from "../images/goodreads_hover.svg"

const FooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  padding-left: 15px;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 9999;
  a {
    position: relative;
    width: 35px;
    height: 35px;
    margin: 10px 5px;
    transition: 0.3;
    &.footer_linkedin {
      background: url(${linked_in});
      background-size: cover;
      &:hover {
        background: url(${linked_in_hover});
        background-size: cover;
      }
    }
    &.footer_medium {
      background: url(${medium});
      background-size: cover;
      &:hover {
        background: url(${medium_hover});
        background-size: cover;
      }
    }
    &.footer_goodreads {
      background: url(${goodreads});
      background-size: cover;
      &:hover {
        background: url(${goodreads_hover});
        background-size: cover;
      }
    }
  }
  }
  @media (min-width: 700px) {
		display: none;
  }	
`
class Footer extends React.Component {
  render () {
    return (
      <FooterWrapper className="social_narrow">
        <a className="footer_linkedin" target="_new" href="https://www.linkedin.com/in/dusantatransky/"> </a>
        <a className="footer_medium" target="_new" href="https://medium.com/@dusantatransky"> </a>
        <a className="footer_goodreads" target="_new" href="https://www.goodreads.com/user/show/69845863-dusan-tatransky"> </a>
      </ FooterWrapper>
    )
  }
}

export default Footer
