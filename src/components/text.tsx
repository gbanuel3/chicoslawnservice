import styled from 'styled-components'

interface TextProps {
  size?: string
  color?: string
  weight?: string
  lineHeight?: string
}

const Text = styled.span<TextProps>`
  font-size: ${(props) => props.size || '16px'};
  color: ${(props) => props.color || '#000'};
  font-weight: ${(props) => props.weight || 'normal'};
  line-height: ${(props) => props.lineHeight || 'normal'};
`

export default Text
