import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import inst from '../images/inst.png'
import fb from '../images/fb.png'
import mail from '../images/mail.png'
import phone from '../images/phone.png'


export const FixMenu = styled.div`

    @keyframes fadeInRight {
        0% {
        transform: translateX(300px);
        }
        100% {
        transform: translateX(0);
        }
    }
    @keyframes fadeOutRight {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(300px);
        }
    }

    @keyframes fadeInPhone{
        0% {
        opacity: 0;
        transform: translateY(25px);
        }
        100% {
            opacity: 1;
        transform: translateY(0);
        }
    }

    position: fixed;
    top: 0;
    max-width: 300px;
    padding: 55px 0;
    height: 100%;

    .header-logo{
        width: 300px;
        padding: 0 25px;
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
        margin: 0 25px;
        max-width: 100%;
        border: 0;
    }
    .menu{
        list-style-type: none;    
    }
    .menu-item{
        width: auto; 
        margin-top: 2px;
        margin-bottom: 2px;
        overflow: hidden;
        line-height: normal;
    }
    .menu-href-li {
        cursor: pointer;
        max-width: 100%;
        display: block;
        text-decoration: none;
        text-align: left;
        color: rgb(41, 41, 41);
        font-size: 13px;
        text-transform: uppercase;
        line-height:22px;
        border: 10px solid #f5f5f5;
    }
    .last{
        padding-bottom: 40px!important;
    }
    .activelink {
        background-color: #fff;
        border: 10px solid #fff;
        display: block;
    }
    /* .menu-href-li::after {
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
    } */
    .menu-href-li:hover {
        background-color: rgb(221, 221, 221);
        border: 10px solid rgb(221, 221, 221);
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
    .links-box{
        position: absolute;
        bottom: 25px;
        left: 35px;
    }
    .links-img{
        height: 40px;
        width: 40px;
        margin: 0 10px;
        opacity: 0.8;
        cursor: pointer;
    }
    .phone{
        animation-name: fadeInPhone;
        animation-duration: .6s;
        text-align: center;
        text-decoration: none;
        color: black;
    }
    .phonelink{
        color: black;
    }

    @media screen and (max-width: 1367px) {
        .links-img{
        height: 35px;
        width: 35px;
        }
    }

    @media screen and (max-width: 1040px) {
        top: 0;
        position: relative;
        max-width: none;
        padding: 5px 0;
        height: 105px;

        #menu-toggle:checked ~ .header-menu-box >.menu {
            visibility: visible;
            right: 0;
            animation-name: fadeInRight;
            animation-duration: .6s;
        }
        .header-menu-box{

        }
        .header-logo{
            width: 300px;
            margin: 5px;
            display: block;
            text-align: left;
        }
        .logo-href{ 
            margin: 10px;
        }
        .menu-btn {
            z-index:100;
            display: flex;
            align-items: center;
            position: absolute;
            top: 37px;
            right: 35px;
            width: 45px;
            height: 26px;

            cursor: pointer;
        }
        .menu {
            animation-name: fadeOutRight;
            animation-duration: .6s;
            z-index: 50;
            display: block;
            position: absolute;
            visibility: hidden;
            top: -14px;
            right: -100%;
            width: 300px;
            margin: 0;
            padding: 20px 0 80px 0;
            list-style: none;
            background-color: #f5f5f5;
            transition-duration: .6s;
            }
        .header-menu-box{
            position: absolute;
            right: 0;
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
        .links-box{
            bottom: none;
            right: 15px;
            left: unset;
        }
        .links-box img{
            opacity: 0.8;
        }
    }
    @media screen and (max-width: 376px) {

        .menu-btn {
            top: 23px;
        }
    }
    @media screen and (max-width: 374px) {

        .menu-btn {
            top: 37px;
        }
    }

`;



const Navbar = () => {
const [isChecked, setIsChecked] = useState(false);
const [isShown, setIsShown] = useState(false);

const show = () => {
    (isShown === true)?(setIsShown(false)):(setIsShown(true))}


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

            <input id="menu-toggle" type="checkbox" onChange={(event) => setIsChecked(event.currentTarget.checked)} checked={isChecked} />
                <label className="menu-btn" htmlFor="menu-toggle">
                    <br></br>
                <span></span>
            </label>

            <div className="header-menu-box">
                <ul className="menu menu_left">
                    <li id="1" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" activeClassName="activelink" to="/grafdesign">Графический дизайн</NavLink>
                    </li>
                    <li id="2" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" activeClassName="activelink" to="/handdraw">Рисунок от руки</NavLink>
                    </li>
                    <li id="3" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" activeClassName="activelink" to="/interier">Дизайн Интерьера</NavLink>
                    </li>
                    <li id="4" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" activeClassName="activelink" to="/landscape">Ландшафный Дизайн</NavLink>
                    </li>
                    <li id="5" className="menu-item" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" activeClassName="activelink" to="/skills">Навыки</NavLink>
                    </li>
                    <li id="7" className="menu-item last" onClick={() => setIsChecked(!isChecked)}>
                        <NavLink className="menu-href-li" activeClassName="activelink" to="/about">Обо мне</NavLink>
                    </li>
                    <div className="links-box">
                    { isShown ? <p className="phone" ><a className="phonelink" href="tel:+375293213076">+375 29 321 30 76</a></p>: null }
                    <a onClick={show}><img className="links-img" src={phone} alt="link-img"/></a>
                    <a href="mailto:veronikapopkovich@yandex.ru" target="_blank" ><img className="links-img" src={mail} alt="link-img"/></a>
                    <a href="https://www.facebook.com/veronica.popkovich" target="_blank" ><img className="links-img" src={fb}alt="link-img"/></a>
                    <a href="https://www.instagram.com/veranikapapkovich" target="_blank" ><img className="links-img" src={inst} alt="link-img"/></a>              
                    </div>
                </ul>
                
            </div>
            
        </FixMenu>
    );
}

export default Navbar;
