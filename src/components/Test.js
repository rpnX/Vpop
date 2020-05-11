import React from 'react';
import styled from 'styled-components';

export const StyledTest = styled.div`
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
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .grid__item {
        height: 50vh;
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;
        border: 1px solid black;
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }
`;

const backgrounds = [
    "https://picsum.photos/900/600?j",
    "https://picsum.photos/900/600?k",
    "https://picsum.photos/900/600?l",
    "https://picsum.photos/900/600?h",
    "https://picsum.photos/900/600?f",
    "https://picsum.photos/900/600?d",
]


const Test = () => {
    return (
    <StyledTest>
        <p className="headtext">Ландшафный дизайн</p>
                <div className="grid">
                    {backgrounds.map((bg,i) =>(
                        <div className="grid__item" style={{backgroundImage: 'url(' + bg + ')'}}>Grid Item {i+1}</div>
                    ))}
                </div>
    </StyledTest>
    );
}

export default Test


