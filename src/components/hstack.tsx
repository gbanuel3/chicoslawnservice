import styled from 'styled-components';

interface HStackProps {
    gap?: string;
}

const HStack = styled.div<HStackProps>`
    display: flex;
    flex-direction: row; // Align items horizontally
    gap: ${(props) => props.gap || '4px'}; // Use the provided gap or default to 4px
`;

export default HStack;