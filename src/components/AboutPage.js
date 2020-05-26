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
        margin-top: 67px;
        margin-bottom: 47px;
        /* margin-left: 40px; */
        font-size:26px;
        font-weight: 500;
        text-transform: uppercase;
    }
    .grid {
        width: 100%;
        display: grid;
        grid-gap: 90px;
        padding: 0 40px;
        grid-template-columns: repeat(2, 1fr);
    }
    .text{
        margin-bottom: 0;
        font-size: 16px;
    }
    .citatabox{
        position: relative;
        padding: 28px 30px 20px 30px;

    }
    .qote{
        text-align: center;
        color: #222;
        font-family: Georgia;
        font-size: 70px;
        margin-bottom: 0px;
        line-height: 0.4;
        }
    .citatatext{
        text-align: justify;
        margin-bottom: 24px;
    }
    .citataauthor{
        font-size: 12px;
    }
    .skillhead{
        font-weight: 600;
        font-size: 16px;
    }
    .photo{
        height: auto;
        max-width: 100%;
        margin-bottom: 20px;
    }
    .photo2{
            margin-top: 77px;
        }

    @media screen and (max-width: 1367px) {
        .text{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px 0;
            margin:0;
        }
    }
    @media screen and (max-width: 930px) {
        .grid {
            grid-template-columns: 1fr;
            grid-gap: 0;
        }
        .aboutphoto{
            max-width: 100%;
        }
        .citatabox{
        position: relative;
        padding: 35px 35px 25px 35px;
    }
        .qote{
            color: #222;
            font-family: Georgia;
            font-size: 70px;
            line-height: 0.4;
        }
        .photo{
            margin-bottom: 10px;
        }
        .photo2{
            margin-top: 10px;
        }
        .citatatext{
        margin-bottom: unset;
    }

    }

    @media screen and (max-width: 460px) {
        .headtext{
        font-size:24px;
        }
        .teaxtarea{
            font-size: 16px;
        }
        .grid {
            padding: 0 15px;
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

    return (
        <StyledAbout>
            
            {(!state)?( <div className="loadingdiv"><a className="item-text">loading...</a></div>
                ):(
                <div className="grid">
                    <div className="griditem">
                        <p className="headtext">Обо мне</p>
                        <p>
                            <h5 className="skillhead">КАРЬЕРА:</h5>
                            {state.cariera.map((data,i) =>( 
                                    <p className="text">{data}</p>
                            ))}
                        </p>
                        <p>
                            <h5 className="skillhead">ОБРАЗОВАНИЕ:</h5>
                            {state.obrazovanie.map((data,i) =>( 
                                    <p className="text">{data}</p>
                            ))}
                        </p>
                        <p>
                            <h5 className="skillhead">Дополнительное образование:</h5>
                            {state.dopobrazovanie.map((data,i) =>( 
                                    <p className="text">{data}</p>
                            ))}
                        </p> 

                        <p>
                            <h5 className="skillhead">Стажировки:</h5>
                            {state.stazirovki.map((data,i) =>( 
                                    <p className="text">{data}</p>
                            ))}
                        </p>
                        <img className="photo photo1" src={state.photo1} alt="aboutpage"></img>

                    </div>
                    <div className="griditem">

                        <img className="photo photo2" src={state.photo2} alt="aboutpage"></img>
                        <div className="citatabox" >
                            <div className="qote" >“</div>
                            <div className="citatatext" >{state.citata1}</div>
                            <div className="citataauthor"></div>
                        </div>
                        <p>
                            <h5 className="skillhead">ДОСТИЖЕНИЯ:</h5>
                                {state.dostizeniya.map((data,i) =>( 
                                    <p className="text">{data}</p>
                            ))}
                        </p>
                        {/* <img className="photo photo1" src={state.photo1} alt="aboutpage"></img>   */}
                    </div>
                </div>
            )}
        </StyledAbout>
    );
}

export default AboutPage