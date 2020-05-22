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
    .box{
        display: flex;
        width: 100%;
    }
    .grid { 
        display: grid;
        grid-gap: 5px;
        width: 30%;
        grid-template-columns: repeat(2, 1fr); 
    }
    .grid__item {
        height: 0;
        padding-bottom: 90%;
    }
    .textbox{
        width: 60%;
        padding: 0 10px;
    }
    .skillimg{
        max-height: 100px;
        width: auto;
    }
    .skillhead{
        font-size: 18px;
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
            padding: 10px;
            width: 100vw;
        }
        .textbox{
            width: 100%;
            text-align: justify;
        }
    }
`;

const Skills = () => {

    const [state, setState] = useState(null);

    const loadfromdb = async () => {
        try {

        const  docRef = db.collection("main").doc("project");

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
        <StyledSkills>
            <p className="headtext">Skills</p>
            <div className="box" >
                <div className="grid gridbox">
                    <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div>
                    <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div>
                    <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div>
                    <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div>
                    <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div>
                    <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div>
                    {/* <div className="grid__item block2">
                        <img className="skillimg" src="https://image.flaticon.com/icons/svg/145/145813.svg" alt="skillimg" />
                        <p className="skillhead" >Corel Draw</p>
                    </div> */}
                </div>
                <div className="textbox">

                    <p>Разработка логотипов и упаковки для продукции СТМ.</p>

                    <p>Создание фирменного стиля для разных по позиционированию брендов.</p>

                    <p>Разработка корпоративного журнала - концепт, макеты страниц.</p>

                    <p>Создание баннеров для оформления соцсетей ВК, FB, Instagram и сайтов.</p>

                    <p>Оформление акций, POSM-продукция.</p>

                    <p>В реализации задач предлагаю решения под обозначенный бюджет.</p>

                    <p>Запуск новых площадей "под ключ": рациональное зонирование на торговый
                    зал/подсобные площади, комплектация мебелью собственной разработки,
                    навигация, внутреннее и наружное оформление объекта.</p>

                    <p>Профессиональное понимание специфики проектирования аптек.</p>

                    <p>Планировочные решения для офисов, колл-центра.</p>

                    <p>Согласование проектов на уровне высшего руководства.</p>

                    <p>Курирование подрядных организаций: отделочников, мебельщиков.</p> 

                    <p>В реализации задач предлагаю решения под обозначенный бюджет.</p>
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
