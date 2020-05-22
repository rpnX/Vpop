import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'    
import { NavLink } from 'react-router-dom';
import Totopbtn from './ToTopBtn';

// const GridItemAnimation = keyframes`${bounceIn}`;
// const GridAnimation = keyframes`${fadeIn}`;

export const StyledHandDraws = styled.div`

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
    background-color: #fff;
    min-height: 100vh;

    .headtext{
        margin: 40px 45px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr); 
    }
    .grid__item {
        /* box-shadow: 0px 0px 15px -4px #717182; */
        height: 35vh;
        animation-name: fadeInDown;
        animation-duration: 1s;
        position:relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin: 15px;
        border-radius: 3px;
    }
    .grid__item:hover {
        box-shadow: 5px 4px 150px 240px rgba(235,235,235,0.7) inset;
        transition: 0.3s;
    }
    .item-text{
        text-decoration: none;
        opacity: 0;
        position: absolute;
        font-size: 28px;
        display: block;
        transition: 0.4s;
        padding: 37% 0;
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
    
    @media screen and (max-width: 1367px) {
        .item-text{
            font-size: 20px;
            }
        }
    @media screen and (max-width: 1040px) {

        margin: 0;

        .headtext{
            padding: 15px;
            margin:0;
        }
        .btn-up{
            position: fixed;
            bottom: 15px;
            left: 15px;
            opacity: 0.5;
        }
        .btn-upimage{
            height: 30px;
            width: 30px;
        }
    }
    @media screen and (max-width: 860px) {
        .grid {
        grid-template-columns: repeat(3, 1fr); 
        }
    }
    @media screen and (max-width: 640px) {
        .grid {
        grid-template-columns: repeat(2, 1fr); 
        }
    }
    @media screen and (max-width: 460px) {
        .grid {
        grid-template-columns: repeat(1, 1fr); 
        }
        .item-text{
            font-size: 24px;
        }
        .headtext{
        font-size:24px;
        }
    }

    `;

    const HandDraws = () => {

        const [state, setState] = useState(null);

        const loadfromdb = async () => {
            try {
            const  docRef = db.collection("handdraws").doc("project");
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setState(doc.data())
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            })}
            catch (error) {
                console.log(error);
                }
            }
    
        useEffect(() => {
            loadfromdb()
            }, [])
        console.log(state)

        return (
            <StyledHandDraws>
                <p className="headtext">Hand Job</p>
                <div className="grid ">
                {(!state)?( <div>loading...</div>
                ):(
                    state.proj.map((data,i) =>(
                        <div key={i} className="grid__item" style={{backgroundImage: `url(${data.tumb })`}}>
                            <NavLink to ={`/handdraws/${i}`} className="item-text"> { data.headtext } </NavLink>
                        </div>
                    )))}
                </div>
                <Totopbtn />
            </StyledHandDraws>
    );
}

export default HandDraws