import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledSkills = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100%;
    margin-left: 300px;
    width: 100%;

    .headtext{
        margin: 40px 45px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr); 
        
    }
    .grid__item {
        height: 35vh;
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;

    }
    .block1 {
        background-image: url(https://picsum.photos/900/1080?a);
    }
    .block2 {
        background-image: url(https://picsum.photos/900/1080?s);
    }
    .block3 {
        background-image: url(https://picsum.photos/900/1080?d);

    }
    .block4 {
        background-image: url(https://picsum.photos/900/1080?f);
    }
    .block5 {
        background-image: url(https://picsum.photos/900/1080?g);
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
                <div class="grid__item block1">
                    <NavLink id="2" to="/skills">Grid Item</NavLink>
                </div>
                <div class="grid__item block2">
                    Grid Item 2
                </div>
                <div class="grid__item block3">
                    Grid Item 3
                </div>
                <div class="grid__item block4">
                    Grid Item 3
                </div>
                <div class="grid__item block5">
                    Grid Item 3
                </div>
            </div>
        </StyledSkills>
    );
}

export default Skills