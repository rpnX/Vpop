import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'   

export const StyledTest = styled.div`
       background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100%;
    margin-left: 300px;
    width: 100%;
    
    .headtext{
        margin: 40px 45px;
        font-size: 36px;
        font-weight: 500;
        text-align: center;
        max-width: 100%;
        word-wrap: break-word;
    }
    .text{
        text-align: center;
        max-width: 100%;
        word-wrap: break-word;
        padding: 0 45px;
        margin-bottom: 20px;
    }
    .cbox{
        margin-bottom: 50px;
        max-width: 100%;
        margin-right: 0;
        margin-left: 0;
    }
    .carusel-box{
        padding: 0;
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }
`;

const Test = ( props ) => {

    const [state, setState] = useState(null);
    const { match } = props;
    let { id } = match.params;

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
        <>
             {(!state)?( <div>loading...</div>
                ):(
                <StyledTest>
                    <p className="headtext">{state.proj[id].headtext}</p>
                    <div className="text col-sm-8 col-md-8">{state.proj[id].text}</div>
                    <div className="cbox row ">
                        <div className="text-box col-0 col-sm-0 col-md-3">
                        </div>
                        <div className="carusel-box col-12 col-sm-12 col-md-6">
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
                                        <img className="d-block w-100" src={state.proj[id].tumb} alt="First slide"></img>
                                    </div>
                                    {(state.proj[id].img)?(state.proj[id].img.map((data,i) =>(
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={data} alt="Second slide"></img>
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
                        <div className="text-box col-0 col-sm-0 col-md-3"></div>
                    </div>
                </StyledTest>
            )
        }
    </>
    );
}

export default Test



