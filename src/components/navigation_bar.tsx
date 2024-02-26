import React from 'react'
import { Toolbar, ToolbarSeparator, ToolbarLink } from '@radix-ui/react-toolbar'
import styled from 'styled-components'

const toolbarStyles: React.CSSProperties = {
  display: 'flex',
  padding: '10px',
  backgroundColor: '#f0f0f0',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  position: 'fixed',
  top: '0',
  zIndex: '1000',
}
const itemStyles: React.CSSProperties = {
  marginLeft: '10px',
  marginRight: '10px',
  cursor: 'pointer',
}

const NavBarContainer = styled.div`
  margin-bottom: 50px;
`

function NavigationBar() {
  return (
    <NavBarContainer>
      <Toolbar style={toolbarStyles}>
        <ToolbarLink href="/" style={itemStyles} asChild>
          <a>Home</a>
        </ToolbarLink>
        <ToolbarSeparator />
        <ToolbarLink href="/about" style={itemStyles} asChild>
          <a>About</a>
        </ToolbarLink>
        <ToolbarSeparator />
        <ToolbarLink href="/contact" style={itemStyles} asChild>
          <a>Contact</a>
        </ToolbarLink>
      </Toolbar>
    </NavBarContainer>
  )
}

export default NavigationBar
