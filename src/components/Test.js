import React from 'react';
import styled from 'styled-components';

export const StyledTest = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100vh;
    margin-left: 300px;
    width: 100%;
`;

const Test = () => {
    return (
    <StyledTest>
        Test
    </StyledTest>
    );
}

export default Test