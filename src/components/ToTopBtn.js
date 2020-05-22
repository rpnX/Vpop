import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import upbtn from '../images/upbtn.png'

export const StyledBtn = styled.div`

    .btn-up{
        position: fixed;
        bottom: 20px;
        right: 20px;
        opacity: 0.5;
        cursor: pointer;
    }
    .btn-up:hover {
        opacity: 0.9;
    }
    .btn-upimage{
        height: 40px;
        width: 40px;
    }

    @media screen and (max-width: 1040px) {

        .btn-up{
        position: fixed;
        bottom: 15px;
        left: 15px;
        opacity: 0.5;
    }
        .btn-upimage{
            height: 30px;
            width: 30px;
        }
    }

`

const Totopbtn = () => {

    const [scrollPosition, setSrollPosition] = useState(0);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    const scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <StyledBtn>
        {(scrollPosition >= 800)?(<div className="btn-up" onClick={scrolltop}>
                    <img className="btn-upimage" src={upbtn} alt="upbtn" />
                    </div>
                    ):(
                <div></div>)}
    </StyledBtn>
    );
}
export default Totopbtn
