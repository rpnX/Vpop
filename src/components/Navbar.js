import React, {useRef, useState} from 'react'
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
    
    .menu-btn > span,
    .menu-btn > span::before,
    .menu-btn > span::after {
        display: block;
        position: absolute;

        width: 45px;
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
        padding: 5px 0;

        #menu-toggle:checked ~ .header-menu-box >.menu {
            visibility: visible;
            right: 0;
        }
        .header-menu-box{

        }
        .header-logo{
            width: 400px;
            margin: 5px;
            display: block;
            text-align: left;
        }
        .logo-image{ 
            max-width: 70%;
        }
        .menu-btn {
            display: flex;
            align-items: center;
            position: fixed;
            top: 50px;
            right: 35px;

            width: 26px;
            height: 26px;

            cursor: pointer;
            z-index: 1;
        }
        .menu {
            z-index: 100;
            display: block;
            position: fixed;
            visibility: hidden;
            top: 0;
            right: -100%;

            width: 300px;
            height: 100%;

            margin: 0;
            padding: 80px 0;

            list-style: none;

            background-color: #ECEFF1;
            box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);

            transition-duration: .25s;
            }
        .header-menu-box{
            position: absolute;
            right: 25px;
        }
        .menu-href-li{
            display: block;
            text-align: right;
        }

        .menu-item {
            margin-top: 4px;
            margin-bottom: 4px;
            padding: 12px;
            padding-left: 30px;
            cursor: pointer;
            max-width: 100%;
            align-items: right;
            vertical-align: bottom;
            -webkit-text-decoration: none;
            text-decoration: none;
            color: rgb(41,41,41);
            font-size: 13px;
            text-transform: uppercase;
            line-height: 22px;
        }
        .iii:active ~ .header-menu-box >.menu {
            visibility: hiden;
            right: 0;
            background-color: red;
    }
    }

`;



const Navbar = () => {
const [isChecked, setIsChecked] = useState(false);


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

            <input id="menu-toggle" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)}
        checked={isChecked} />
                <label className="menu-btn" for="menu-toggle">
                <span></span>
            </label>

            <div className="header-menu-box">
                <ul className="menu menu_left">
                    <li id="1" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/grafdesign">Графический дизайн</NavLink>
                    </li>
                    <li id="2" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/handdraw">Рисунок от руки</NavLink>
                    </li>
                    <li id="3" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/interier">Дизайн Интерьера</NavLink>
                    </li>
                    <li id="4" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/landscape">Ландшафный Дизайн</NavLink>
                    </li>
                    <li id="5" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/skills">Навыки</NavLink>
                    </li>
                    <li id="7" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/about">Обо мне</NavLink>
                    </li>
                    <li id="" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" to="/test">Test</NavLink>
                    </li>
                </ul>
            </div>
        </FixMenu>
    );
}

export default Navbar;
