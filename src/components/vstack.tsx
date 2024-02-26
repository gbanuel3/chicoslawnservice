import styled from 'styled-components';

interface VStackProps {
    gap?: string;
}

const VStack = styled.div<VStackProps>`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap || '4px'};
`;

export default VStack;