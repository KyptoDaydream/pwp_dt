import React from "react"
import styled from "styled-components"
import linkedin from "../images/linkedin.svg"
// import linkedin_hover from "../images/linkedin_hover.svg"
import medium from "../images/medium.svg"
// import medium_hover from "../images/medium_hover.svg"
import goodreads from "../images/goodreads.svg"
// import goodreads_hover from "../images/goodreads_hover.svg"
import linkedin_nav from "../images/linkedin_nav.svg"
import linkedin_nav_hover from "../images/linkedin_nav_hover.svg"
import medium_nav from "../images/medium_nav.svg"
import medium_nav_hover from "../images/medium_nav_hover.svg"
import goodreads_nav from "../images/goodreads_nav.svg"
import goodreads_nav_hover from "../images/goodreads_nav_hover.svg"

const SocialIcon = styled.div `
  width: 25px;
  height: 25px;
  position: fixed;
  transition: 0.3s;
  z-index: 1002;
  cursor: pointer;
  &.linkedin {
    background-image: url(${linkedin});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    bottom: 2px;
    left: 40px;
    width: 26px;
    height: 26px;
    background: var(--green);
    border-radius: 50px;
    border: 1px solid var(--black);
    :hover {
      background-image: url(${linkedin});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  &.medium {
    background-image: url(${medium});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    bottom: 2px;
    left: 60px;
    width: 26px;
    height: 26px;
    background: var(--green);
    border-radius: 50px;
    border: 1px solid var(--black);
    :hover {
      background-image: url(${medium});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  &.goodreads {
    background-image: url(${goodreads});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    bottom: 2px;
    left: 80px;
    width: 26px;
    height: 26px;
    background: var(--green);
    border-radius: 50px;
    border: 1px solid var(--black);
    :hover {
      background-image: url(${goodreads});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  &.linkedin_nav {
    background-image: url(${linkedin_nav});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    :hover {
      background-image: url(${linkedin_nav_hover});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  &.medium_nav {
    background-image: url(${medium_nav});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    :hover {
      background-image: url(${medium_nav_hover});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
  &.goodreads_nav {
    background-image: url(${goodreads_nav});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    display: inline-block;
    :hover {
      background-image: url(${goodreads_nav_hover});
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }
  }
`

class Social extends React.Component {

  render () {
    const social_class = this.props.icon;
    const url = this.props.icon === 'medium' || this.props.icon === 'medium_nav' ? 'https://medium.com/@dusantatransky' :
      this.props.icon === 'linkedin' || this.props.icon === 'linkedin_nav' ? 'https://www.linkedin.com/in/dusantatransky/' :
      'https://www.goodreads.com/user/show/69845863-dusan-tatransky';
    return (
      <a href={url} rel="noopener noreferrer" target="_blank"><SocialIcon className={social_class}/></a>
    );
  }
}

export default Social