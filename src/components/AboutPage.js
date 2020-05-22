import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import af from'../images/aboutphoto.webp'
import { db } from '../firebase'

export const StyledAbout = styled.div`
    background-color: #fff;
    box-sizing: border-box;
    display: block;
    min-height: 100vh;
    margin-left: 300px;
    max-width: 100%;

    .row{
        max-width: 100%;
    }
    .headtext{
        max-width: 100%;
        margin: 40px 45px;
        font-size: 36px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        display: grid;
        grid-gap: 20px;
        padding: 20px;
        grid-template-columns: 4fr 3fr; 
    }
    /* .teaxtarea{
        margin: 20px;
    } */
    .aboutphoto{
        height: auto;
        max-width: 90%;
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }
    @media screen and (max-width: 930px) {
        .grid {
        grid-template-columns: 1fr; 
        }
        .aboutphoto{
        max-width: 100%;
    }
    }

`;

const AboutPage = () => {

    const [state, setState] = useState(null);

    const loadfromdb = async () => {
        try {

        const  docRef = db.collection("main").doc("about");

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
        console.log(state)

    return (
        <StyledAbout>
            <p className="headtext">Обо мне</p>
            {(!state)?( <div className="loadingdiv"><a className="item-text">loading...</a></div>
                ):(
                <div className="grid">
                    <div className="griditem teaxtarea">
                        <p>
                            {state.deviz}
                        </p>
                        <p>
                            <h5>ДОСТИЖЕНИЯ:</h5>
                            {state.dostizeniya}
                        </p>
                        <p>
                            <h5>КАРЬЕРА:</h5>
                            {state.cariera}
                        </p>
                        <p>
                            <h5>ОБРАЗОВАНИЕ:</h5>
                            {state.obrazovanie}
                        </p>
                        <p>
                            <h5>Дополнительное образование:</h5>
                            {state.dopobrazovanie}
                        </p>
                        <p>
                            <h5>Стажировки:</h5>
                            {state.stazirovki}
                        </p>
                    </div>
                    <div className="griditem">
                        <img className="aboutphoto" src={state.img} alt="aboutpage"></img>   
                    </div>
                </div>)}
        </StyledAbout>
    );
}

export default AboutPage