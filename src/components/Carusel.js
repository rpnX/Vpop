import React from 'react';
import styled from 'styled-components';
import { db } from '../firebase'



export const StyledCarusel = styled.div`
    margin-left:300px;
    width: 100%;
    .slide1{
        height: 100%;
        background-image: url(https://picsum.photos/1920/1080?w);
    }
    .slide2{
        height: 100%;
        background-image: url(https://picsum.photos/1920/1080?u);
    }
    .slide3{
        height: 100%;
        background-image: url(https://picsum.photos/1920/1080?y);
    }
    .slide4{
        height: 100%;
        background-image: url(https://picsum.photos/1920/1080?t);
    }
    .slide5{
        height: 100%;
        background-image: url(https://picsum.photos/1920/1080?r);
    }
    .slide6{
        height: 100%;
        background-image: url(https://picsum.photos/1920/1080?e);
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

    db.collection("projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
        return (
            <StyledCarusel >
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="4"></li>
                        <li data-target="#carouselExampleControls" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner bg-info" role="listbox">
                        <div className="carousel-item active">
                            <div className="d-flex slide1 align-items-center justify-content-center min-vh-100">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex slide2 align-items-center justify-content-center min-vh-100">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex slide3 align-items-center justify-content-center min-vh-100">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex slide4 align-items-center justify-content-center min-vh-100">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex slide5 align-items-center justify-content-center min-vh-100">
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="d-flex slide6 align-items-center justify-content-center min-vh-100">
                            </div>
                        </div>
                    </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bbt" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bbt" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
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