import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'    
import { NavLink } from 'react-router-dom';

export const StyledInterier = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100%;
    margin-left: 300px;
    width: 100%;

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

    .headtext{
        margin: 40px 45px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        padding: 0 20px;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
    }
    .grid__item {
        animation-name: fadeInDown;
        animation-duration: 1s;
        height: 45vh;
        margin:  10px 20px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #fff;
        position: relative;
        transition: 0.2s;
        
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
    .blockimg{
        height: 100%;
        max-width: 100%;
        height: auto;
        overflow: hidden;
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
            object-fit: cover;
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
    console.log(state)
    // console.log(state)

    return (
    <StyledInterier>
        <p className="headtext">Interier</p>
            <div className="grid">
            {(!state)?( <div>loading...</div>
                ):(
                    state.proj.map((data,i) =>(
                        <div key={i} className="grid__item" style={{backgroundImage: `url(${data.tumb })`}}>
                            <NavLink to ={`/interier/${i}`} className="item-text"> { data.headtext } </NavLink>
                        </div>
                    )))}
            </div>
    </StyledInterier>
    );
}

export default Interier