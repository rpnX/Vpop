import React from 'react';
import styled from 'styled-components';

export const StyledLandscape = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100vh;
    margin-left: 300px;
    width: 100%;

    .headtext{
        margin: 60px 65px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
    }
    .grid__item {
        height: 50vh;
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;

    }
    .block1 {
        background-image: url(https://picsum.photos/900/600?j);
    }
    .block2 {
        background-image: url(https://picsum.photos/900/600?k);
    }
    .block3 {
        background-image: url(https://picsum.photos/900/600?l);

    }
    .block4 {
        background-image: url(https://picsum.photos/900/600?h);
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }


`;

const Landscape = () => {
    return (
        <StyledLandscape>
            <p className="headtext">Ландшафный дизайн</p>
                <div className="grid">
                    <div className="grid__item block1">Grid Item 1</div>
                    <div className="grid__item block2">Grid Item 2</div>
                    <div className="grid__item block3">Grid Item 3</div>
                    <div className="grid__item block4">Grid Item 4</div>
                </div>
        </StyledLandscape>
    );
}

export default Landscape