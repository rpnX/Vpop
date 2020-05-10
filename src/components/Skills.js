import React from 'react';
import styled from 'styled-components';

export const StyledSkills = styled.div`
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
        "a b c d"
        
    }
    .grid__item {
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;

    }
    .block1 {
        grid-area: a;
        background-image: url(https://picsum.photos/900/600?a);
    }
    .block2 {
        grid-area: b;
        background-image: url(https://picsum.photos/900/600?s);
    }
    .block3 {
        grid-area: c;
        background-image: url(https://picsum.photos/900/600?d);

    }
    .block4 {
        grid-area: d;
        background-image: url(https://picsum.photos/900/600?f);
    }

    
    @media screen and (max-width: 1040px) { 
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }
`;

const Skills = () => {
    return (
        <StyledSkills>
            <p className="headtext">Skills</p>
            <div class="grid">
                <div class="grid__item block1">Grid Item 1</div>
                <div class="grid__item block2">Grid Item 2</div>
                <div class="grid__item block3">Grid Item 3</div>
                <div class="grid__item block4">Grid Item 3</div>
            </div>
        </StyledSkills>
    );
}

export default Skills