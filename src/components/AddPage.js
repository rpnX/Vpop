import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { db } from '../firebase'

export const StyledAdd = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    min-height: 100vh;
    margin-left: 300px;
    width: 100%;
    position: relative;

    .addbtn{
        height: 25px;
        width: 50px;
    }
`

const AddPage = () => {

    const [proj, setForm] = useState({})

    const changeHandler = event =>{
        setForm({ ...proj, [event.target.name]: event.target.value})
    }

    const loadfromdb = async () => {
        try {
            db.collection("cities").doc("LA").set({
                capital: true
            }, { merge: true })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            })}
            catch (error) {
                console.log(error);
                }
            }


    return (
    <StyledAdd>
        <select>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option selected value="coconut">Кокос</option>
            <option value="mango">Манго</option>
            </select>
        <input
            placeholder="input img"
            id="projectName"
            type="text"
            name="img"
            value={proj.img}
            onChange={changeHandler}
        ></input>
        <input
            placeholder="input header"
            id="projectName"
            type="text"
            name="header"
            value={proj.header}
            onChange={changeHandler}
        ></input>
        <input
            placeholder="input text"
            id="projectName"
            type="text"
            name="text"
            value={proj.text}
            onChange={changeHandler}
        ></input>
        <button className="addbtn" onClick={loadfromdb}></button>
    </StyledAdd>
    );
}

export default AddPage