import React from 'react';
import styled from 'styled-components';

export const StyledLandscape = styled.div`
    margin-left:300px;
    width: 100%;
    background-color: rgba(235,235,235,0.8);
    height: 100vh;
`;

const Landscape = () => {
    return (
    <StyledLandscape>
        Landscape
    </StyledLandscape>
    );
}

export default Landscape