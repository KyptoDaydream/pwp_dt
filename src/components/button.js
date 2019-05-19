import * as React from 'react'
import styled from 'styled-components'


const ButtonWrapper = styled.a`
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 13px;
  color: var(--grey);
  padding: 7px 15px;
  background-image: linear-gradient(120deg, var(--green) 0%, var(--black) 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  transition: 0.25s;
  text-decoration: none;
  &:hover {
    margin-left: -2.5px;
    margin-top: -2.5px;
    font-size: 14px;
    padding: 12px 20px;
    background-size: 100% 88%;
  color: var(--white);
  }
`
class ContactButton extends React.Component {
  render () {
    return (
      <ButtonWrapper href={this.props.url}>
        {this.props.text}
      </ButtonWrapper>
    )
  }
}

export default ContactButton
