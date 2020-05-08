import React from 'react';
import styled from 'styled-components';
import photoprofile from '../images/aboutphoto.webp'

export const StyledAbout = styled.div`
    display: inline-block;
`;

const AboutPage = () => {
    return (
    <StyledAbout>
        About
        <div className="text-area">
            <div className="name">Вероника Попкович</div>
            <div className="role">Designer</div>
            <div className="disk">
                <p>Работа — если не вся жизнь, то точно большая ее часть.</p>
                <br></br>
                <p>Люблю то, чем занимаюсь. Увлеченная. Активна, исполнительна. Внимательна к деталям. Легко адаптируюсь к новым условиям труда. Соблюдение сроков, работа в быстром темпе.</p>
                <br></br>
                <p>Верю в то, что окружение и обстановка формирует нас.</p>
                </div>
        </div>
        <div className="photo-area">
            <div className="photo">
                <img src={photoprofile} alt="profile"/>
            </div>
        </div>
    </StyledAbout>
    );
}

export default AboutPage