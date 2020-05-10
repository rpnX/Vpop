import React from 'react';
import styled from 'styled-components';
import photoprofile from '../images/aboutphoto.webp'

export const StyledAbout = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100%;
    margin-left: 300px;
    width: 100%;

    .headtext{
        margin: 60px 65px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        height: 800px;
        display: grid;
        grid-template-areas:
        "a b c";
        
    }
    .grid__item {
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .block1 {
        grid-area: a;
        background-image: url(https://picsum.photos/900/1200?q);
    }
    .block2 {
        grid-area: b;
        background-image: url(https://picsum.photos/900/1200?w);
    }
    .block3 {
        grid-area: c;
        background-image: url(https://picsum.photos/900/1200?e);
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }


`;

const AboutPage = () => {
    return (
        <StyledAbout>
            <p className="headtext">Обо мне</p>
            <div className="grid">
                <div className="grid__item block1">Grid Item 1</div>
                <div className="grid__item block2">Grid Item 2</div>
                <div className="grid__item block3">Grid Item 3</div>
            </div>
        </StyledAbout>
    );
}

export default AboutPage