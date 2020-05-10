import React from 'react';
import styled from 'styled-components';

export const StyledHandDraws = styled.div`
    margin-left:300px;
    width: 100%;
    background-color: rgba(235,235,235,0.8);
    height: 100vh;
    .headtext{
        margin: 30px;
        font-size:48px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas:
        "a b c"
        "f d c";
        
    }
    .grid__item {
        padding:25px;
        margin: 15px;
        border-radius: 3px;

    }
    .block1 {
        grid-area: a;
        background-image: url(https://picsum.photos/640/480?q);
    }
    .block2 {
        grid-area: b;
        background-image: url(https://picsum.photos/640/480?w);
    }
    .block3 {
        grid-area: c;
        background-image: url(https://picsum.photos/1920/1150?e);
        background-repeat: no-repeat;
        background-position: center;
    }
    .block4 {
        grid-area: d;
        background-image: url(https://picsum.photos/640/480?r);
    }
    .block5 {
        grid-area: f;
        background-image: url(https://picsum.photos/900/480?t);
    }
    
    @media screen and (max-width: 1040px) {
        margin: 0;
    }

    `;

    const HandDraws = () => {
        return (
            <StyledHandDraws>
                <p className="headtext">Hand Job</p>
                <div class="grid">
                    <div class="grid__item block1">Grid Item 1</div>
                    <div class="grid__item block2">Grid Item 2</div>
                    <div class="grid__item block3">Grid Item 3</div>
                    <div class="grid__item block4">Grid Item 4</div>
                    <div class="grid__item block5">Grid Item 5</div>
                </div>
        </StyledHandDraws>
    );
}

export default HandDraws