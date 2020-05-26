import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'    
import { NavLink } from 'react-router-dom';
import Totopbtn from './ToTopBtn'

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
        width: 100%;
        display: grid;
        grid-gap: 20px;
        padding: 20px;
        grid-template-columns: repeat(4, 1fr); 
    }
    .grid__item {
        height: 0;
        padding-bottom: 100%;
        animation-name: fadeInDown;
        animation-duration: 1s;
        position:relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        transition: 0.4s;
    }
    .grid__item:hover {
        box-shadow: 5px 4px 150px 240px #f5f5f5 inset;
        transition: 0.4 s;
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
            font-size: 16px;
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
        .mobile-text{
            display: block;
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
            font-size: 16px;
        }
        .headtext{
        font-size:24px;
        }
        .mobile-text{
            display: block;
        }
    }

`;

const GraphDesigne = () => {

    const [state, setState] = useState(null);

        const loadfromdb = async () => {
            try {
            const  docRef = db.collection("graphdesigne").doc("project");
            docRef.get().then(function(doc) {
                if (doc.exists) {
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
        <StyledGraphDesigne>
            {/* <div class="bar">    
                <div class="progressbar progress-infinitebar">
                    <div class="progress-bar3" >
                    </div>                       
                </div> 
            </div> */}
            <p className="headtext">Графический дизайн</p>
                <div className="grid">
                    {(!state)?( <div>loading</div>
                        ):(
                        state.proj.slice(0).reverse().map((data,i) =>(<div>
                            <div key={i} className="grid__item" style={{backgroundImage: `url(${data.tumb })`}}>
                                <NavLink to ={`/graphdesigne/${(state.proj.length - 1) - i}`} className="item-text"> { data.headtext } </NavLink>
                            </div>
                            <p className="mobile-text"> { data.headtext } </p></div>))
                        )
                    }
                </div>
                <a id="demo"></a>
                <Totopbtn /> 
        </StyledGraphDesigne>
    );
}

export default GraphDesigne

// .slice(0).reverse()