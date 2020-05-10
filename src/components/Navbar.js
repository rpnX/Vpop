import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'

export const FixMenu = styled.div`
    position: fixed;
    top: 0;
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
        line-height:22px;
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
    .menu-btn{
        display: none;
    }

    #menu-toggle {
        opacity: 0;
    }

    #menu-toggle:checked ~ .menu-btn > span {
        transform: rotate(45deg);
    }
    #menu-toggle:checked ~ .menu-btn > span::before {
        top: 0;
        transform: rotate(0);
    }
    #menu-toggle:checked ~ .menu-btn > span::after {
        top: 0;
        transform: rotate(90deg);
    }
    #menu-toggle:checked ~ .menu-box {
        visibility: visible;
        left: 0;
        }
    .menu-btn > span,
    .menu-btn > span::before,
    .menu-btn > span::after {
        display: block;
        position: absolute;

        width: 100%;
        height: 2px;

        background-color: #616161;

        transition-duration: .25s;
    }
    .menu-btn > span::before {
        content: '';
        top: -8px;
    }
    .menu-btn > span::after {
        content: '';
        top: 8px;
    }




    @media screen and (max-width: 1040px) {
        top: 0;
        position: relative;
        max-width: none;
        padding: 10px 0;
        .header-menu-box{
            display: none;
        }
        .header-logo{
            width: 450px;
            margin: 15px;
            display: block;
            text-align: left;
        }
        .menu-btn {
            display: flex;
            align-items: center;
            position: fixed;
            top: 20px;
            right: 20px;

            width: 26px;
            height: 26px;

            cursor: pointer;
            z-index: 1;
        }

    }

`;

const Navbar = () => {
    return (
        <FixMenu>
            <div className="header-logo">
                <div className=" logo-image">
                    <NavLink to="/">
                        <img src={logo}
                        alt="Veronika Popkovich"
                        title="Veronika Popkovich"
                        className="logo-href" />
                    </NavLink>
                </div>
            </div>

            <input id="menu-toggle" type="checkbox" />
                <label className="menu-btn" for="menu__toggle">
                <span></span>
            </label>

            <div className="header-menu-box">
                <ul className="menu mod--menu_left">
                    <li id="1" className="menu-item">
                        <NavLink className="menu-href-li" to="/grafdesign">Графический дизайн</NavLink>
                    </li>
                    <li id="2" className="menu-item">
                        <NavLink className="menu-href-li" to="/handdraw">Рисунок от руки</NavLink>
                    </li>
                    <li id="3" className="menu-item">
                        <NavLink className="menu-href-li" to="/interier">Дизайн Интерьера</NavLink>
                    </li>
                    <li id="4" className="menu-item">
                        <NavLink className="menu-href-li" to="/landscape">Ландшафный Дизайн</NavLink>
                    </li>
                    <li id="5" className="menu-item">
                        <NavLink className="menu-href-li" to="/skills">Навыки</NavLink>
                    </li>
                    <li id="7" className="menu-item">
                        <NavLink className="menu-href-li" to="/about">Обо мне</NavLink>
                    </li>
                </ul>
            </div>
        </FixMenu>
    );
}

export default Navbar;
