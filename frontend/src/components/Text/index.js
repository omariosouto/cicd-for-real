import styled from 'styled-components';

const StyledText = styled.h1`
    color: orange;
`;


export default function Text({children, ...props}) {
    return (
        <StyledText props={{...props}}>
            {children}
        </StyledText>
    )
}