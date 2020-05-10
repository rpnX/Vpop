import React from 'react';
import styled from 'styled-components';

export const StyledInterier = styled.div`
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
        height: 100%;
        display: grid;
        grid-template-areas:
        "a b "
        "c d ";
        
    }
    .grid__item {
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;

    }
    .block1 {
        grid-area: a;
        background-image: url(https://picsum.photos/900/600?q);
    }
    .block2 {
        grid-area: b;
        background-image: url(https://picsum.photos/900/600?w);
    }
    .block3 {
        grid-area: c;
        background-image: url(https://picsum.photos/900/600?e);

    }
    .block4 {
        grid-area: d;
        background-image: url(https://picsum.photos/900/600?r);
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }


`;

const Interier = () => {
    return (
    <StyledInterier>
        <p className="headtext">Interier</p>
            <div className="grid">
                <div className="grid__item block1">Grid Item 1</div>
                <div className="grid__item block2">Grid Item 2</div>
                <div className="grid__item block3">Grid Item 3</div>
                <div className="grid__item block4">Grid Item 4</div>
            </div>
    </StyledInterier>
    );
}

export default Interier