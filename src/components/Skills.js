import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'   
import { NavLink } from 'react-router-dom';

export const StyledSkills = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    display: block;
    min-height: 100vh;
    margin-left: 300px;
    width: 100%;

    .headtext{
        margin-top: 67px;
        margin-bottom: 47px;
        margin-left: 40px;
        font-size:26px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .grid { 
        display: grid;
        grid-gap: 30px;
        width: 100%;
        padding:0 35% 47px 35%;
        grid-template-columns: repeat(5 , 1fr);
    }
    .grid__item {
        align-self: center;
        height: 0;
        padding-bottom: 100%;
    }
    .textbox{
        margin-top: 15px;
        column-count: 2;
        column-width: 40%;
        column-gap: 90px;
        width: 100%;
        padding: 0 40px;

    }
    .skillimg{
        max-width: 100%;

    }
    .skillhead{
        padding: 5px;
        margin: auto;
        font-size: 14px;
        text-align: center;
    }
    .progress{
        margin: 10px;        
    }
    .progress-bar{
        background-color: gray;
    }
    @media screen and (max-width: 1367px) { 
        .grid {
            padding:0 32% 47px 32%;
        }
        .teaxtarea{
            font-size: 14px;
        }
        .textbox{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 1040px) { 
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }
    @media screen and (max-width: 740px) { 
        .grid {
            padding:0 25% 20px 25%;
        }
    }
    @media screen and (max-width: 540px) {
        .box{
        display: unset;
        }
        .grid {
            padding:0 10px 10px 10px;
            grid-template-columns: repeat(5 , 1fr);
        }
        .textbox{
            width: 100%;
            text-align: left;
            column-gap: unset;
            column-count: unset;
            padding: 15px;
        }
    }
`;

const Skills = () => {

    const [state, setState] = useState(null);

    const loadfromdb = async () => {
        try {

        const  docRef = db.collection("main").doc("skills");

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
        <StyledSkills>
            <p className="headtext">Навыки</p>
            <div className="box" >
                <div className="grid gridbox">
                {(!state)?( <div>loading...</div>
                    ):(
                    state.icons.map((data,i) =>(
                    <div className="grid__item block">
                        <img className="skillimg" src={data.img}  alt="skillimg" />
                    {/* <span className="skillhead" >{data.name}</span> */}
                </div>
                )))}
                </div>
                <div className="textbox">
                    {(!state)?( <div>loading...</div>
                        ):(
                            state.text.map((data,i) =>(
                                <p>● {data}</p>
                            )))}
                </div>  
            </div>
        </StyledSkills>
        );
    }

        export default Skills


// eslint-disable-next-line no-lone-blocks
{/* <StyledSkills>
<p className="headtext">Skills</p>
<div className="box" >
    <div className="grid gridbox">
        {(!state)?( <div>loading...</div>
            ):(
                state.skills.map((data,i) =>(
                    <div className="grid__item block">
                        <img className="skillimg" src={data.img} alt="skillimg" />
                    <p className="skillhead" >{data.name}</p>
                </div>
                )))}
    </div>
    <div className="textbox">
        {(!state)?( <div>loading...</div>
            ):(
                state.skillstext.map((data,i) =>(
                    <p>{data.text}</p>
                )))}
    </div>   
</div>
</StyledSkills> */}
