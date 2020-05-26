import React, { useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import styled from 'styled-components';
import { db } from '../firebase'   

export const StyledTest = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    min-height: 100vh;
    margin-left: 300px;
    width: 100%;
    position: relative;
    
    .headtext{
        margin-top: 67px;
        margin-left: 45px;
        margin-bottom: 10px;
        font-size: 26px;
        font-weight: 500;
        max-width: 100%;
        text-transform: uppercase;
        word-wrap: break-word;
    }
    .text{
        height: 67px;
        max-width: 100%;
        word-wrap: break-word;
        padding: 0 45px;
        margin-bottom: 25px;
    }
    .cbox{
        margin: 0 150px;
        margin-bottom: 50px;
        max-width: 100%;
        margin-right: 0;
        margin-left: 0;
    }
    .carusel-box{
        padding: 0;
    }
    .carousel-item{
        height: 70vh;
    }
    .carousel-inner img{
        margin: auto;
        height: 100%!important;
    }
    @media screen and (max-width: 1367px) {
        .carousel-item{
            height: 65vh;
        }
    }

    @media screen and (max-width: 1040px) {

        margin: 0;

        .headtext{
            padding: 15px;
            margin:0;
        }
        .text{
            padding: 0 15px;
            max-height: 67px;
            height: unset;
        }
        .carousel-item{
            height: unset;
        }
        .d-block{
            width: 100%;
        }
    }
    @media screen and (max-width: 540px) {

        .headtext{
            font-size: 20px;
        }
    }
    
`;

const Test = ( props ) => {

    const location = useLocation()

    const [state, setState] = useState(null);
    const { match } = props;
    let { id } = match.params;
    let lok = location.pathname;

    const loadfromdb = async () => {
        try {

        const  docRef = db.collection("graphdesigne").doc("project");

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
    
        console.log(lok)
    return (
        <>
            {(!state)?( <div>loading...</div>
                ):(
                <StyledTest>
                    <p className="headtext">{state.proj[id].headtext}</p>
                    <div className="text">{state.proj[id].text}</div>
                    <div className="cbox row ">
                        <div className="text-box col-0">
                        </div>
                        <div className="carusel-box col-12 col-sm-12 col">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    {(state.proj[id].img)?(state.proj[id].img.map((data,i) =>(
                                        <li data-target="#carouselExampleIndicators" data-slide-to={i+1}></li>
                                    ))
                                        ):( <div></div>)}
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block" src={state.proj[id].tumb} alt="First slide"></img>
                                    </div>
                                    {(state.proj[id].img)?(state.proj[id].img.map((data,i) =>(
                                        <div className="carousel-item">
                                            <img className="d-block" src={data} alt="Second slide"></img>
                                        </div>
                                    )) ):( <div></div>)}
                                </div>
                                {(state.proj[id].img)?(
                                <div><a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a></div>
                                ):(<div></div>)}
                            </div>
                        </div>
                        <div className="text-box col-0"></div>
                    </div>
                </StyledTest>
            )
        }
    </>
    );
}

export default Test



