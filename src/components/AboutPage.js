import React from 'react';
import styled from 'styled-components';
import af from'../images/aboutphoto.webp'

export const StyledAbout = styled.div`
    background-color: rgba(235,235,235,0.8);
    box-sizing: border-box;
    display: block;
    height: 100vh;
    margin-left: 300px;
    max-width: 100%;

    .row{
        max-width: 100%;
    }
    .headtext{
        max-width: 100%;
        margin: 40px 45px;
        font-size:36px;
        font-weight: 500;
    }
    .grid {
        max-width: 100%;
        display: grid;
        display: grid;
        grid-template-columns: repeat(2 , 1fr); 
        
    }
    .grid__item {
        padding: 10px;
        height: 100%;
        border: 1px solid black;
        margin: 15px;
        border-radius: 3px;
        background-repeat: no-repeat;
        background-position: center;
    }
    .aboutphoto{
        height: auto;
        max-width: 100%;
    }

    @media screen and (max-width: 1040px) {
        margin: 0;
        .headtext{
            padding: 15px;
            margin:0;
        }
    }

`;

const AboutPage = () => {
    return (
        <StyledAbout>
            <p className="headtext">Обо мне</p>
            <div className="row">
                <div className="col">
                    <p>Работа — если не вся жизнь, то точно большая ее часть.
                        Люблю то, чем занимаюсь. Верю в то, что окружение и обстановка формирует нас.
                    </p>
                    <p>
                        ДОСТИЖЕНИЯ:
                        Работа в крупнейшем аптечном холдинге в РБ. За время работы в команде сеть аптек впервые получила награду «Народная марка 2018», подтвердив победу еще дважды.
                        Более 140 реализованных проектов торговых объектов по всей стране.
                    </p>
                    <p>
                        КАРЬЕРА:
                        2016 - 2020 Аптека групп холдинг, дизайнер
                    </p>
                    <p>
                        ОБРАЗОВАНИЕ:
                        2011 - 2016 БГУ, дизайн предметно-пространственной среды, Минск, Беларусь.
                        2008 - 2011 УО Минская государственная гимназия-колледж искусств, Минск, Беларусь.
                    </p>
                    <p>
                        Дополнительное образование:
                        10 -12.2019 курс Татьяны Синицевой по световому дизайну, "ROOMS"
                        10. 2019 Warsaw design week, изучение тенденций восточноевропейского дизайна (отделочные материалы, освещение, сантехника, мебель, декор).
                        2014 - Участник Летней белорусско-немецкой архитектурной школы, г.Минск, в сотрудничестве со Штутгартской государственной Академией искусств и дизайна (The Stuttgart State Academy of Art and Design).
                    </p>
                    <p>
                        Стажировки:
                        2016 салон "ARDECO", проектирование кухонь; участница семинаров салонов: «STANLEY», «FLAMANT», «Все в дом», Энергоэффективный дом» в г. Дзержинске
                        2015 дизайн-центр ОАО Институт "Минскгражданпроект", проектирование жилого интерьера
                        2014 УП "Минскзеленстрой", проект озеленения городского пространства.
                        2013 УП "Минская обойная фабрика", разработка коллекции обоев.
                    </p>
</div>
                <div className="col">
                    <img className="aboutphoto" src={af}></img>   
                </div>
            </div>
        </StyledAbout>
    );
}

export default AboutPage