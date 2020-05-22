import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import { NavLink } from 'react-router-dom'




export const StyledCarusel = styled.div`
    margin-left:300px;
    width: 100%;
    .loadingdiv{
        height: 100vh;
    }
    .slide{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .item-text{
        opacity: 0.5;
        position: absolute;
        font-size: 72px;
        display: block;
        padding: 45vh 0;
        margin: auto;
        text-align: center;
        margin-left: -150px;
        width: 100%;
        height: 100%;
        }
    .bbt{
        opacity: 0.5;
    }
    .d-flex{
        background-position: center;
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }

`;

const  Carousel = () => {

    const [state, setState] = useState(null);

    const loadfromdb = async () => {
        try {

        const  docRef = db.collection("main").doc("project");

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
            <StyledCarusel >
                {(!state)?( <div className="loadingdiv"><a className="item-text">loading...</a></div>
                ):(
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>

                        {state.slides.map((data,i) =>(
                                <li data-target="#carouselExampleControls" data-slide-to={i+1}></li>
                            ))} 

                    </ol>
                    <div className="carousel-inner bg-info" role="listbox">
                        <div className="carousel-item active">
                            <NavLink to={state.tumblink} className="d-flex slide align-items-center justify-content-center min-vh-100" style={{backgroundImage: 'url(' + state.tumb + ')'}}>
                            </NavLink>
                        </div>
                        {state.slides.map((data,i) =>(
                            <div className="carousel-item">
                                <NavLink to={data.link} className="d-flex slide align-items-center justify-content-center min-vh-100" style={{backgroundImage: 'url(' + data.img + ')'}}>
                                </NavLink>
                            </div>
                            ))}
                    </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bbt" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bbt" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>)}
            <p>wekfgieughfiuegt</p>
            </StyledCarusel>
            
        );
    }


// const Carusel = () => {
//     return (
//     <StyledCarusel>
//         Carusel
//     </StyledCarusel>
//     );
// }   

export default Carousel