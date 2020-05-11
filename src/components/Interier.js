import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { db } from '../firebase'    

export const StyledInterier = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100vh;
    margin-left: 300px;
    width: 100%;

    .headtext{
        margin: 60px 65px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        width: 100%;
        /* height: 100%; */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
    }
    .grid__item {
        height: 50vh;
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;

    }
    .block1 {
        /* grid-area: a; */
        background-image: url(https://picsum.photos/900/600?q);
    }
    .block2 {
        /* grid-area: b; */
        background-image: url(https://picsum.photos/900/600?w);
    }
    .block3 {
        /* grid-area: c; */
        background-image: url(https://picsum.photos/900/600?e);

    }
    .block4 {
        /* grid-area: d; */
        background-image: url(https://picsum.photos/900/600?r);
    }
    .block5{

    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }

`;

const Interier = () => {
    const [state, setState] = useState(null);

    const ggg = async () => {
        try {

        const  docRef = db.collection("carusel").doc("images");

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
        ggg()
        }, [])
    console.log(state)


    return (
    <StyledInterier>
        <p className="headtext">Interier</p>
            <div className="grid">
            {(!state)?( <div>loading...</div>
                ):(
                    state.img.map((bg,i) =>(
                        <div key={i} className="grid__item" style={{backgroundImage: 'url(' + bg + ')'}}>Grid Item {i+1}</div>
                    )))}
            </div>
    </StyledInterier>
    );
}

export default Interier