import React from 'react';
import styled from 'styled-components';

export const StyledGraphDesigne = styled.div`

@keyframes fadeInDown {
            0% {
            opacity: 0;
            transform: translateY(-20px);
            }
            100% {
            opacity: 1;
            transform: translateY(0);
            }
        }

    margin-left:300px;
    width: 100%;
    background-color: rgba(235,235,235,0.8);
    height: 100vh;
    .headtext{
        margin: 40px 45px;
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
        animation-name: fadeInDown;
        animation-duration: 1s;
        position:relative;
        background-repeat: no-repeat;
        background-position: center;
        padding:25px;
        margin: 15px;
        border-radius: 3px;
    }
    .grid__item:hover {
        box-shadow: 5px 4px 150px 240px rgba(235,235,235,0.5) inset;
        transition: 0.2s;
    }
    .item-text{
        opacity: 0;
        position: absolute;
        font-size: 28px;
        display: block;
        transition: 0.4s;
        padding: 20vh 0;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        width: 100%;
        height: 100%;
        cursor: pointer;
        }
    .item-text:hover{
        opacity: 1;
        color: black;   
        transition: 0.4s;
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
                    <div className="grid__item block1"><a className="item-text">Grid Item 1</a></div>
                    <div className="grid__item block2"><a className="item-text">Grid Item 2</a></div>
                    <div className="grid__item block3"><a className="item-text">Grid Item 3</a></div>
                    <div className="grid__item block4"><a className="item-text">Grid Item 4</a></div>
                    <div className="grid__item block5"><a className="item-text">Grid Item 5</a></div>
                </div>
        </StyledGraphDesigne>
    );
}

export default GraphDesigne