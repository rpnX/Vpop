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
        margin: 40px 45px;
        font-size:36px;
        font-weight: 500;
    }
    /* .box{
        display: flex;
        width: 100%;
    } */
    .grid { 
        display: grid;
        grid-gap: 30px;
        width: 100%;
        padding:0 60px 20px 60px;
        grid-template-columns: repeat(10 , 1fr);
    }
    .grid__item {
        height: 0;
        padding-bottom: 100%;
    }
    .textbox{
        width: 100%;
        text-align: center;
        padding: 0 10px;
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
    @media screen and (max-width: 1340px) { 
        .grid {
            /* width: 37vw; */
        }
    }
    @media screen and (max-width: 1040px) { 
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
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
            font-size: 12px;
            text-align: left;
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
            <p className="headtext">Skills</p>
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
                                <p>{data}</p>
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
