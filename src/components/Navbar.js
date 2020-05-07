import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

export const FixMenu = styled.div`

    max-width: 300px;
    padding: 50px 0;

    .header-logo{
        width: 300px;
        padding: 0 20px;
        display: block;
        text-align: left;
        margin-bottom: 50px;
    }
    .logo-image{ 
        box-sizing: border-box;
        width: auto;
        max-width: 80%;
        will-change: transform;
        align-items: center;
        max-height: 200px;
    }
    img{
        max-width: 100%;
        border: 0;
    }
    .menu{
        list-style-type: none;    
    }
    .menu-item{
        width: auto; 
        margin-top: 28px;
        margin-bottom: 28px;
        overflow: hidden;
        line-height: normal;
    }
    .menu-href-li {
        cursor: pointer;
        max-width: 100%;
        vertical-align: bottom;
        display: inline-block;
        text-decoration: none;
        text-align: left;
        color: rgb(41, 41, 41);
        font-size: 13px;
        text-transform: uppercase;
    }
    .menu-href-li::after {
        content: '';
        display: block;
        width: 100%;
        background-color: rgb(219, 215, 207);
        height: 2px;
        transform: scale(0);
        transition: all .3s;
    }
    .menu-href-li:hover::after {
        transform: scale(1);
    }
`;

const Navbar = () => {
    return (
        <FixMenu>
            <div className="header-logo">
                <div className=" logo-image">
                    <NavLink to="/main">
                        <img src={logo}
                        alt="Veronika Popkovich"
                        title="Veronika Popkovich"
                        className="logo-href" />
                    </NavLink>
                </div>
            </div>

            <div className="header-menu-box">
                <ul className="menu mod--menu_left">
                    <li id="1" className="menu-item">
                        <NavLink to="/handdraw" className="menu-href-li">Рисунок от руки</NavLink>
                    </li>
                    <li id="2" className="menu-item">
                        <NavLink className="menu-href-li" to="grafdesign">Графический дизайн</NavLink>
                    </li>
                    <li id="3" className="menu-item">
                        <NavLink className="menu-href-li" to="stickers">Дизайн наклеек</NavLink>
                    </li>
                    <li id="4" className="menu-item">
                        <NavLink className="menu-href-li" to="popularhz">Популярный что то там</NavLink>
                    </li>
                    <li id="5" className="menu-item">
                        <NavLink className="menu-href-li" to="tz">Т3</NavLink>
                    </li>
                    <li id="7" className="menu-item">
                        <NavLink className="menu-href-li" to="about">Обо мне</NavLink>
                    </li>
                    <li id="8" className="menu-item">
                        <NavLink className="menu-href-li" to="contact">Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </FixMenu>
    );
}

export default Navbar;
