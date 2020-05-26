import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'    
import { NavLink } from 'react-router-dom';
import Totopbtn from './ToTopBtn';

export const StyledInterier = styled.div`

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
        margin-top: 67px;
        margin-bottom: 47px;
        margin-left: 40px;
        font-size:26px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .grid {
        padding: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    .grid__item {
        height: 0;
        padding-bottom: 70%;
        animation-name: fadeInDown;
        animation-duration: 1s;
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 3px;
    }
    .grid__item:hover {
        box-shadow: 5px 4px 150px 340px #f5f5f5 inset;
        transition: 0.2s;
    }
    .item-text{
        color: white;
        text-decoration: none;
        opacity: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 16px;
        text-transform: uppercase;
        display: block;
        transition: 0.4s;
        padding: 43% 0;
        margin: auto;
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
    .mobile-text{
            margin: 5px 0;
            display: none;
            animation-name: fadeInDown;
            animation-duration: 1s;
        }

    @media screen and (max-width: 1367px) {
        .item-text{
            padding: 28% 0;
            font-size: 24px;
        }
    }
    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
        .mobile-text{
            display: block;
        }
    }
    @media screen and (max-width: 700px) {
        .grid {
            grid-template-columns: repeat(1, 1fr); 
        }
    }
    @media screen and (max-width: 460px) {
        .grid {
            grid-template-columns: repeat(1, 1fr); 
        }
        .item-text{
            font-size: 18px;
        }
        .headtext{
        font-size:24px;
        }
    }

`;

const Interier = () => {
    const [state, setState] = useState(null);

    const loadfromdb = async () => {
        try {
        const  docRef = db.collection("interier").doc("project");
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

    return (
    <StyledInterier>
        <p className="headtext">Дизайн интерьера</p>
            <div className="grid">
            {(!state)?( <div>loading...</div>
                ):(
                    state.proj.slice(0).reverse().map((data,i) =>(<div>
                        <div key={i} className="grid__item" style={{backgroundImage: `url(${data.tumb })`}}>
                            <NavLink to ={`/interier/${(state.proj.length - 1) - i}`} className="item-text"> { data.headtext } </NavLink>
                        </div>
                        <p className="mobile-text"> { data.headtext } </p></div> 
                    )))}
            </div>
            <Totopbtn />
    </StyledInterier>
    );
}

export default Interier