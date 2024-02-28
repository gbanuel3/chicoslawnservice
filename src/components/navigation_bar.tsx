import React from 'react'
import { Toolbar, ToolbarLink, ToolbarSeparator } from '@radix-ui/react-toolbar'
import styled from 'styled-components'
import Text from './text'

const NavBarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #3e9b4f; // Assuming a color similar to the blue in the image
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`

const Logo = styled.div`
  font-size: 36px; // Adjust size as needed
  font-weight: bold;
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px; // Adjust gap as needed
  margin-right: 40px;
`

const SocialMediaLink = styled(ToolbarLink)`
  color: white;
  cursor: pointer;
  size: 22px; // Adjust size as needed
  &:hover {
    color: #ebebeb; // Lighten the color on hover
  }
`

const PhoneNumber = styled.a`
  color: white; // Assuming you want the phone number to be white like other items
  text-decoration: none;
  cursor: pointer;
  font-size: 22px; // Adjust size as needed
  &:hover {
    text-decoration: underline;
  }
`

const GetInTouchButton = styled(ToolbarLink)`
  background-color: white;
  color: #3b5998; // Match the navbar color
  padding: 10px 20px;
  border-radius: 20px; // Adjust for desired curvature
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb; // Lighten the background on hover
  }
`

function NavigationBar() {
  return (
    <NavBarContainer>
      <Logo>Chicos</Logo>
      <NavItems>
        <PhoneNumber href="tel:1-847-949-7232">1-(847)-949-7232</PhoneNumber>
        <ToolbarSeparator />
        <GetInTouchButton href="mailto:gbanuel3@gmail.com" asChild>
          <Text>Get In Touch</Text>
        </GetInTouchButton>
      </NavItems>
    </NavBarContainer>
  )
}

export default NavigationBar
