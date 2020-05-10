import React from 'react';
import styled from 'styled-components';

export const StyledGraphDesigne = styled.div`
    margin-left:300px;
    width: 100%;
    background-color: rgba(235,235,235,0.8);
    height: 100vh;
    .headtext{
        margin: 60px 65px;
        font-size:36px;
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
        .headtext{
            padding: 15px;
            margin:0;
        }
    }

`;

const GraphDesigne = () => {
    return (
        <StyledGraphDesigne>
            <p className="headtext">Графичесаий дизайн</p>
                <div className="grid">
                    <div className="grid__item block1">Grid Item 1</div>
                    <div className="grid__item block2">Grid Item 2</div>
                    <div className="grid__item block3">Grid Item 3</div>
                    <div className="grid__item block4">Grid Item 4</div>
                    <div className="grid__item block5">Grid Item 5</div>
                </div>
        </StyledGraphDesigne>
    );
}

export default GraphDesigne