import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import scroll_down_img from "../images/scrolldown_dark.svg"

const ScrollDownWrapper = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 99998;
  #Layer_1 {
    animation: spin 8s linear infinite;
  }
  #Layer_3 {
    position: absolute;
    left: 1px;
    top: 1px;
    transform: translate(14px, 14px);
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .scroll_icon_class {
    transition: 0.3s;
    fill: var(--black);
  }
  .scroll_icon_class_hover {
    fill: transparent;
  }
  &:hover .scroll_icon_class_hover {
    fill: var(--orange);
  }
  @media (max-width: 700px) {
    display: none;
  }
`

class ScrollDown extends React.Component {
  componentWillMount() {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="/aboutYou/#contactForm"]')
    }
  }
  render() {
    return (
      <Link to="/oTebe/#contactForm">
        <ScrollDownWrapper>
          <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100 100">
            <g id="Layer_2_1_">
              <g>
                <path
                  className="scroll_icon_class"
                  d="M35.2,10.8c0.6,0.1,1,0.5,1.3,1.1s0.2,1.3-0.2,2s-1.2,1.3-2.3,1.8s-2,0.7-2.8,0.6s-1.3-0.5-1.6-1
			c-0.1-0.1,0-0.2,0.1-0.3l2-0.9c0.1-0.1,0.3-0.1,0.4,0c0.3,0.1,0.6,0,1.1-0.2c0.6-0.3,0.9-0.5,0.8-0.7C33.9,13,33.7,13,33.5,13
			s-0.6,0.1-1.2,0.3c-1.9,0.6-3.1,0.4-3.7-0.8c-0.3-0.6-0.2-1.3,0.2-2c0.4-0.7,1.1-1.2,2.1-1.7s1.9-0.6,2.7-0.5s1.3,0.5,1.5,0.9
			c0,0.1,0,0.1,0,0.2c0,0.1-0.1,0.1-0.1,0.1l-2.1,1c-0.1,0.1-0.2,0.1-0.4,0s-0.5,0-0.8,0.1c-0.4,0.2-0.6,0.4-0.5,0.6
			c0,0.1,0.2,0.1,0.4,0.1c0.2,0,0.6-0.1,1.1-0.3C33.7,10.8,34.6,10.7,35.2,10.8z"
                />
                <path
                  className="scroll_icon_class"
                  d="M40.3,8.7l0.3,1.6c0.1,0.3,0.2,0.5,0.4,0.6s0.5,0.1,0.8,0.1s0.5-0.2,0.6-0.3s0.2-0.3,0.3-0.5s0.2-0.3,0.3-0.3
			l2.3-0.5c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0.1,0.1,0.1c0.1,0.6-0.1,1.3-0.6,1.9c-0.3,0.3-0.6,0.6-1.1,0.9s-1.1,0.5-1.7,0.6
			c-0.7,0.1-1.3,0.2-1.9,0.1s-1.1-0.3-1.6-0.7s-0.8-0.9-0.9-1.6l-0.3-1.2c-0.1-0.7-0.1-1.3,0.2-1.9c0.5-1,1.5-1.7,3.1-2
			c0.6-0.1,1.2-0.2,1.8-0.1c0.5,0.1,1,0.2,1.4,0.4c0.7,0.4,1.1,0.9,1.3,1.6c0,0.1,0,0.1,0,0.2s-0.1,0.1-0.1,0.1l-2.3,0.5
			c-0.2,0-0.3,0-0.4-0.2c-0.1-0.2-0.3-0.3-0.4-0.3c-0.2-0.1-0.4-0.1-0.7,0S40.9,8,40.7,8.2S40.3,8.5,40.3,8.7z"
                />
                <path
                  className="scroll_icon_class"
                  d="M55.1,11.9V12c0,0,0,0.1-0.1,0.1c0,0-0.1,0.1-0.2,0.1l-2.4-0.1c-0.2,0-0.4-0.1-0.4-0.3l-0.9-2.1h-0.9v2.1
			c0,0.1,0,0.1-0.1,0.2s-0.1,0.1-0.2,0.1h-2.3c-0.1,0-0.1,0-0.2-0.1s-0.1-0.1-0.1-0.2l0.1-6.9c0-0.1,0-0.1,0.1-0.2s0.1-0.1,0.2-0.1
			l4.1,0.1c1,0,1.7,0.3,2.3,0.7C54.7,6,55,6.6,55,7.4c0,1-0.4,1.7-1.2,2.1L55.1,11.9z M50.3,6.7v1.1h1.3c0.2,0,0.3,0,0.4-0.1
			c0.1-0.1,0.1-0.2,0.1-0.4c0-0.2,0-0.3-0.1-0.4s-0.2-0.2-0.4-0.2H50.3z"
                />
                <path
                  className="scroll_icon_class"
                  d="M64.3,10.1L64,11.3c-0.2,0.7-0.5,1.2-1,1.6c-0.5,0.4-1,0.6-1.6,0.6c-0.6,0.1-1.3,0-2-0.2
			c-0.8-0.2-1.4-0.5-1.9-0.8s-0.9-0.8-1.1-1.3s-0.2-1.2-0.1-1.9l0.3-1.2c0.3-1,0.8-1.7,1.6-2s1.8-0.3,3,0s2,0.8,2.6,1.5
			C64.4,8.2,64.5,9.1,64.3,10.1z M59.4,8.7L59,10.2c-0.1,0.3,0,0.5,0.1,0.7c0.2,0.2,0.4,0.3,0.7,0.4c0.3,0.1,0.6,0.1,0.8,0
			S61,11,61,10.8l0.4-1.5c0.1-0.3,0-0.5-0.1-0.7c-0.2-0.2-0.4-0.3-0.7-0.4c-0.3-0.1-0.6-0.1-0.8,0C59.7,8.2,59.5,8.4,59.4,8.7z"
                />
                <path
                  className="scroll_icon_class"
                  d="M68.3,14.4l3.2,1.7c0.1,0,0.1,0.1,0.1,0.2s0,0.1,0,0.2l-0.7,1.4c0,0.1-0.1,0.1-0.2,0.1s-0.1,0-0.2,0L65,15.1
			c-0.1,0-0.1-0.1-0.1-0.2s0-0.1,0-0.2L68,8.6c0-0.1,0.1-0.1,0.2-0.1s0.1,0,0.2,0l2,1.1c0.1,0,0.1,0.1,0.1,0.2c0,0.1,0,0.1,0,0.2
			L68.3,14.4z"
                />
                <path
                  className="scroll_icon_class"
                  d="M75.9,19.5l2.8,2.4c0.1,0.1,0.1,0.1,0.1,0.2s0,0.1-0.1,0.2l-1,1.2c-0.1,0.1-0.1,0.1-0.2,0.1s-0.1,0-0.2-0.1
			l-4.7-4c-0.1-0.1-0.1-0.1-0.1-0.2s0-0.1,0.1-0.2l4.5-5.2c0.1-0.1,0.1-0.1,0.2-0.1s0.1,0,0.2,0.1l1.7,1.5c0.1,0.1,0.1,0.1,0.1,0.2
			c0,0.1,0,0.1-0.1,0.2L75.9,19.5z"
                />
                <path
                  className="scroll_icon_class"
                  d="M90.2,28.9l1.3,3.1c0.3,0.7,0.5,1.4,0.5,2s-0.1,1.2-0.4,1.7s-0.8,0.9-1.5,1.2l-1,0.4c-1,0.5-2,0.4-2.7-0.1
			s-1.3-1.2-1.8-2.3l-1.3-3.1c0-0.1,0-0.1,0-0.2s0.1-0.1,0.2-0.2l6.3-2.7c0.1,0,0.1,0,0.2,0S90.2,28.9,90.2,28.9z M89.3,32l-3,1.3
			l0.4,0.9c0.1,0.3,0.3,0.5,0.5,0.6s0.5,0.1,0.7,0l1.4-0.6c0.3-0.1,0.4-0.3,0.5-0.5s0-0.5-0.1-0.8L89.3,32z"
                />
                <path
                  className="scroll_icon_class"
                  d="M92.2,46.4L91,46.7c-0.7,0.1-1.3,0.1-1.9-0.2s-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.2-0.7-2
			c-0.1-0.8-0.2-1.5-0.1-2.1s0.3-1.1,0.8-1.6c0.4-0.4,1-0.7,1.7-0.8l1.2-0.2c1-0.2,1.9,0,2.5,0.7s1.1,1.5,1.3,2.7s0.1,2.1-0.3,3
			C93.9,45.8,93.2,46.3,92.2,46.4z M91.5,41.4l-1.6,0.3c-0.3,0-0.5,0.2-0.6,0.4s-0.1,0.5-0.1,0.8c0.1,0.3,0.2,0.6,0.4,0.7
			c0.2,0.2,0.4,0.2,0.7,0.2l1.6-0.3c0.3,0,0.5-0.2,0.6-0.4s0.1-0.5,0.1-0.8c-0.1-0.3-0.2-0.6-0.4-0.7C92,41.4,91.8,41.4,91.5,41.4z"
                />
                <path
                  className="scroll_icon_class"
                  d="M87.9,50.5L88,49c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1l6.8-0.6l0,0c0.1,0,0.1,0,0.2,0.1
			s0.1,0.1,0.1,0.2L95.3,50c0,0.1-0.1,0.3-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1l-3.3,0.2l1.7,0.7c0.1,0,0.1,0.1,0.2,0.2
			s0.1,0.2,0.1,0.3v0.7c0,0.1,0,0.2-0.1,0.3s-0.1,0.1-0.2,0.1l-1.7,0.5l3.2,0.5c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.4
			L95,56.4c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1l0,0L88,55.4c-0.1,0-0.2-0.1-0.3-0.2s-0.1-0.2-0.1-0.3l0.1-1.5
			c0-0.1,0-0.2,0.1-0.3C87.9,53,88,53,88,53l2.3-0.9L88.1,51c-0.1,0-0.1-0.1-0.2-0.2C87.9,50.7,87.8,50.6,87.9,50.5z"
                />
                <path
                  className="scroll_icon_class"
                  d="M93.2,63.8l-0.5,1.9c0,0.1-0.1,0.1-0.1,0.2s-0.1,0-0.2,0L85.7,64c-0.1,0-0.1-0.1-0.2-0.1s0-0.1,0-0.2l0.5-1.6
			c0-0.2,0.2-0.3,0.3-0.3l3.5-1.4l-2.8-1c-0.1,0-0.1-0.1-0.2-0.1s0-0.1,0-0.2l0.5-1.9c0-0.1,0.1-0.1,0.1-0.2s0.1,0,0.2,0l6.6,1.9
			c0.1,0,0.1,0.1,0.2,0.1s0,0.1,0,0.2L94,60.9c0,0.2-0.2,0.3-0.3,0.3L90,62.5l3,0.9c0.1,0,0.1,0.1,0.2,0.1S93.2,63.7,93.2,63.8z"
                />
                <path
                  className="scroll_icon_class"
                  d="M83,75.2c0.2,0.2,0.4,0.4,0.6,0.7c0.1,0.3,0.2,0.5,0.2,0.8s0,0.6-0.1,0.9s-0.2,0.5-0.4,0.8
			c-0.2,0.2-0.4,0.4-0.7,0.6s-0.5,0.2-0.8,0.2s-0.6,0-0.9-0.1s-0.5-0.2-0.8-0.4c-0.2-0.2-0.4-0.4-0.6-0.7s-0.2-0.5-0.2-0.8
			s0-0.6,0.1-0.9s0.2-0.6,0.4-0.8c0.2-0.2,0.4-0.4,0.7-0.6c0.3-0.1,0.5-0.2,0.8-0.2s0.6,0,0.9,0.1C82.5,74.8,82.8,75,83,75.2z"
                />
                <path
                  className="scroll_icon_class"
                  d="M65,89.2c-0.6-0.1-1-0.5-1.3-1.1s-0.2-1.3,0.2-2c0.5-0.7,1.2-1.3,2.3-1.8c1.1-0.5,2-0.7,2.8-0.6
			s1.3,0.5,1.6,1c0.1,0.1,0,0.2-0.1,0.3l-2,0.9c-0.1,0.1-0.3,0.1-0.4,0c-0.3-0.1-0.6,0-1.1,0.2c-0.6,0.3-0.9,0.5-0.8,0.7
			c0.1,0.1,0.2,0.2,0.4,0.1c0.2,0,0.6-0.1,1.2-0.3c1.9-0.6,3.1-0.4,3.7,0.7c0.3,0.6,0.3,1.3-0.1,2C71,90,70.3,90.5,69.3,91
			s-1.9,0.6-2.7,0.5c-0.8-0.1-1.3-0.4-1.5-0.9c0-0.1,0-0.1,0-0.2s0.1-0.1,0.1-0.1l2.1-1c0.1-0.1,0.2-0.1,0.3,0
			c0.2,0.1,0.5,0,0.8-0.1c0.4-0.2,0.6-0.4,0.5-0.6c0-0.1-0.2-0.1-0.4-0.1c-0.2,0-0.6,0.1-1.1,0.3C66.4,89.1,65.6,89.3,65,89.2z"
                />
                <path
                  className="scroll_icon_class"
                  d="M59.8,91.2l-0.3-1.6c-0.1-0.3-0.2-0.5-0.4-0.6s-0.5-0.1-0.8-0.1c-0.3,0.1-0.5,0.2-0.6,0.3
			c-0.1,0.1-0.2,0.3-0.3,0.5S57.2,90,57.1,90l-2.3,0.5c-0.1,0-0.1,0-0.2,0s-0.1-0.1-0.1-0.1c-0.1-0.6,0-1.3,0.5-1.9
			c0.3-0.3,0.6-0.6,1.1-0.9s1.1-0.5,1.7-0.6c0.7-0.1,1.3-0.2,1.9-0.1c0.6,0.1,1.1,0.3,1.6,0.7c0.5,0.4,0.8,0.9,0.9,1.6l0.3,1.2
			c0.1,0.7,0.1,1.3-0.2,1.9c-0.5,1-1.5,1.7-3.1,2c-0.6,0.1-1.2,0.2-1.8,0.1c-0.5-0.1-1-0.2-1.4-0.4c-0.7-0.4-1.2-0.9-1.3-1.5
			c0-0.1,0-0.1,0-0.2s0.1-0.1,0.1-0.1l2.3-0.5c0.2,0,0.3,0,0.4,0.2c0.1,0.2,0.3,0.3,0.4,0.3c0.2,0.1,0.4,0.1,0.7,0s0.5-0.2,0.7-0.4
			C59.8,91.7,59.8,91.5,59.8,91.2z"
                />
                <path
                  className="scroll_icon_class"
                  d="M45.1,88.1L45.1,88.1c0-0.1,0-0.2,0.1-0.2c0,0,0.1-0.1,0.2-0.1h2.4c0.2,0,0.4,0.1,0.4,0.3l0.9,2.1H50v-2.1
			c0-0.1,0-0.1,0.1-0.2s0.1-0.1,0.2-0.1h2.3c0.1,0,0.1,0,0.2,0.1c0.1,0.1,0.1,0.1,0.1,0.2L52.8,95c0,0.1,0,0.1-0.1,0.2
			s-0.1,0.1-0.2,0.1l-4.1-0.1c-1,0-1.7-0.3-2.3-0.7c-0.6-0.5-0.8-1.1-0.8-1.9c0-1,0.4-1.7,1.2-2.1L45.1,88.1z M49.9,93.3v-1.1h-1.3
			c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.1,0.2-0.1,0.4s0,0.3,0.1,0.4s0.2,0.2,0.4,0.2H49.9z"
                />
                <path
                  className="scroll_icon_class"
                  d="M35.8,90l0.3-1.2c0.2-0.7,0.5-1.2,1-1.6s1-0.6,1.6-0.6s1.3,0,2,0.2s1.4,0.5,1.9,0.8s0.9,0.8,1.1,1.3
			c0.2,0.5,0.3,1.2,0.1,1.9L43.5,92c-0.3,1-0.8,1.7-1.6,2s-1.8,0.3-3,0.1s-2-0.8-2.6-1.5C35.8,91.8,35.6,91,35.8,90z M40.7,91.4
			l0.4-1.6c0.1-0.3,0-0.5-0.1-0.7c-0.2-0.2-0.4-0.3-0.7-0.4s-0.6-0.1-0.8,0C39.2,88.8,39,89,39,89.3l-0.4,1.5
			c-0.1,0.3,0,0.5,0.1,0.7c0.2,0.2,0.4,0.3,0.7,0.4s0.6,0.1,0.8,0S40.6,91.6,40.7,91.4z"
                />
                <path
                  className="scroll_icon_class"
                  d="M31.8,85.7L28.6,84c-0.1,0-0.1-0.1-0.1-0.2s0-0.1,0-0.2l0.7-1.4c0-0.1,0.1-0.1,0.2-0.1s0.1,0,0.2,0l5.5,2.9
			c0.1,0,0.1,0.1,0.1,0.2s0,0.1,0,0.2L32,91.5c0,0.1-0.1,0.1-0.2,0.1s-0.1,0-0.2,0l-2-1.1c-0.1,0-0.1-0.1-0.1-0.2s0-0.1,0-0.2
			L31.8,85.7z"
                />
                <path
                  className="scroll_icon_class"
                  d="M24.2,80.6l-2.8-2.4c-0.1-0.1-0.1-0.1-0.1-0.2s0-0.1,0.1-0.2l1-1.2c0.1-0.1,0.1-0.1,0.2-0.1s0.1,0,0.2,0.1
			l4.7,4c0.1,0.1,0.1,0.1,0.1,0.2s0,0.2-0.1,0.2L23,86.2c-0.1,0.1-0.1,0.1-0.2,0.1s-0.1,0-0.2-0.1L21,84.8c-0.1,0-0.1-0.1-0.1-0.2
			s0-0.2,0.1-0.2L24.2,80.6z"
                />
                <path
                  className="scroll_icon_class"
                  d="M9.8,71.2l-1.4-3.1c-0.3-0.7-0.5-1.4-0.5-2s0.1-1.2,0.4-1.7c0.3-0.5,0.8-0.9,1.5-1.2l1-0.4
			c1-0.5,2-0.4,2.7,0.1s1.3,1.2,1.8,2.3l1.4,3.1c0,0.1,0,0.1,0,0.2s-0.1,0.1-0.2,0.2l-6.3,2.7c-0.1,0-0.1,0-0.2,0S9.8,71.3,9.8,71.2
			z M10.7,68.1l3-1.3l-0.4-0.9c-0.1-0.3-0.3-0.5-0.5-0.6s-0.5-0.1-0.7,0l-1.3,0.6c-0.3,0.1-0.4,0.3-0.5,0.5s0,0.5,0.1,0.8L10.7,68.1
			z"
                />
                <path
                  className="scroll_icon_class"
                  d="M7.8,53.7L9,53.5c0.7-0.1,1.3-0.1,1.9,0.2s1,0.7,1.3,1.2s0.5,1.2,0.7,1.9c0.1,0.8,0.2,1.5,0.1,2.1
			c-0.1,0.6-0.3,1.1-0.8,1.6c-0.4,0.4-1,0.7-1.7,0.8l-1.2,0.2c-1,0.2-1.9,0-2.5-0.7c-0.6-0.6-1.1-1.5-1.3-2.7
			c-0.2-1.2-0.1-2.1,0.3-3S6.8,53.9,7.8,53.7z M8.5,58.7l1.6-0.3c0.3,0,0.5-0.2,0.6-0.4s0.1-0.5,0.1-0.8c-0.1-0.3-0.2-0.6-0.4-0.7
			s-0.4-0.2-0.7-0.2l-1.6,0.3c-0.3,0-0.5,0.2-0.6,0.4s-0.1,0.5-0.1,0.8c0.1,0.3,0.2,0.6,0.4,0.7C8,58.7,8.2,58.7,8.5,58.7z"
                />
                <path
                  className="scroll_icon_class"
                  d="M12.1,49.6L12,51.1c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1l-6.8,0.6l0,0c-0.1,0-0.1,0-0.2-0.1
			c0,0-0.1-0.1-0.1-0.2L4.6,50c0-0.1,0.1-0.3,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1l3.3-0.2l-1.7-0.7c-0.1,0-0.1-0.1-0.2-0.2
			c-0.1-0.1-0.1-0.2-0.1-0.3v-0.7c0-0.1,0-0.2,0.1-0.3s0.1-0.1,0.2-0.1l1.7-0.5l-3-0.6c-0.1,0-0.2,0-0.3-0.1s-0.1-0.2-0.1-0.4
			L5,43.7c0-0.1,0-0.1,0.1-0.2s0.1-0.1,0.2-0.1l0,0l6.7,1.2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.3l-0.1,1.5
			c0,0.1,0,0.2-0.1,0.3S12,47.1,12,47.2L9.7,48l2.2,1.1c0.1,0,0.1,0.1,0.2,0.2C12.1,49.4,12.1,49.5,12.1,49.6z"
                />
                <path
                  className="scroll_icon_class"
                  d="M6.8,36.4l0.5-1.9c0-0.1,0.1-0.1,0.1-0.2c0.1,0,0.1,0,0.2,0l6.6,1.9c0.1,0,0.1,0.1,0.2,0.1c0,0.1,0,0.1,0,0.2
			L14,38.1c0,0.2-0.2,0.3-0.3,0.3l-3.5,1.4l2.8,0.8c0.1,0,0.1,0.1,0.2,0.1c0,0.1,0,0.1,0,0.2L12.7,43c0,0.1-0.1,0.1-0.1,0.2
			c-0.1,0-0.1,0-0.2,0l-6.6-1.9c-0.1,0-0.1-0.1-0.2-0.1c0-0.1,0-0.1,0-0.2L6,39.3C6,39.1,6.2,39,6.3,39l3.7-1.4l-3-0.9
			c-0.1,0-0.1-0.1-0.2-0.1C6.8,36.5,6.8,36.4,6.8,36.4z"
                />
                <path
                  className="scroll_icon_class"
                  d="M16.9,24.9c-0.2-0.2-0.4-0.4-0.6-0.7c-0.1-0.3-0.2-0.5-0.2-0.8s0-0.6,0.1-0.9s0.2-0.5,0.4-0.8
			c0.2-0.2,0.4-0.4,0.7-0.6c0.3-0.1,0.5-0.2,0.8-0.2s0.6,0,0.9,0.1s0.5,0.2,0.8,0.4c0.2,0.2,0.4,0.4,0.6,0.7
			c0.1,0.3,0.2,0.5,0.2,0.8s0,0.6-0.1,0.9s-0.2,0.6-0.4,0.8c-0.2,0.2-0.4,0.4-0.7,0.6c-0.3,0.1-0.5,0.2-0.8,0.2s-0.6,0-0.9-0.1
			C17.4,25.3,17.2,25.1,16.9,24.9z"
                />
              </g>
            </g>
          </svg>
          <svg id="Layer_3" x="0px" y="0px" viewBox="0 0 100 100">
            <polygon
              className="scroll_icon_class_hover"
              points="6.8,12.6 6.8,38.1 42.5,38.1 42.5,12.1 "
            />
            <path
              className="scroll_icon_class"
              d="M40.6,9.4H9.4c-2.7,0-4.9,2.1-4.9,4.7v21.8c0,2.6,2.2,4.7,4.9,4.7h31.2c2.7,0,4.9-2.1,4.9-4.7V14.1
	C45.5,11.5,43.3,9.4,40.6,9.4z M40.6,36.4H9.4c-0.4,0-0.7-0.3-0.7-0.5V17l14.1,11.9c0.3,0.2,0.7,0.4,1,0.4l2.4,0
	c0.4,0,0.7-0.1,1-0.4L41.4,17v18.9C41.4,36.2,41,36.4,40.6,36.4z M25,25.2L11.3,13.6h27.5L25,25.2z"
            />
          </svg>
        </ScrollDownWrapper>
      </Link>
    )
  }
}

export default ScrollDown
