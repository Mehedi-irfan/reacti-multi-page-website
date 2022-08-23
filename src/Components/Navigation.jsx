import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { CgMenuLeftAlt, CgCloseR } from "react-icons/cg";

const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const Nav = styled.nav`
    .navbar-list{
        display : flex;
        gap : 4.8rem;
    li{
        list-style : none;
     .navbar-link{
        &:link,
        &:visited{
        display : inline-block;
        text-decoration : none;
        font-size : 1rem;
        text-transform : uppercase;
        color : ${({ theme }) => theme.colors.black};
        transition : color 0.3s linear;
        }
        &:hover,
        &:active{
        color : ${({ theme }) => theme.colors.helper}
    }
    }
    }
    }
.mobile-navbar-btn{
display : none;
.close-outline{
display : none;
}
}
.mobile-navbar-btn[name='close-outline']{
display :none;
}
@media (max-width : ${({ theme }) => theme.media.mobile}){
.mobile-navbar-btn{
display : inline-block;
z-index :999;
border :  ${({ theme }) => theme.colors.black};
}
.mobile-nav-icon{
font-size : 3.2rem;
color : ${({ theme }) => theme.colors.black}
}
.navbar-list{
width: 100vw;
height: 73vh;
position: absolute;
top: 0;
left: 0;
background-color: #fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
visibility: hidden;
opacity: 0;
transform: translateX(100%);
}
 li{
     .navbar-link{
        &:link,
        &:visited{
        font-size : 2.9rem !important; 
        }
        &:hover,
        &:active{
        color : ${({ theme }) => theme.colors.helper}
    }
    }
    }
.active .mobile-nav-icon {
display: none;
font-size:3.5rem ;
position: absolute;
top: 3%;
right: 10%;
z-index: 999;
color : ${({ theme }) => theme.colors.black};
}
.active .close-outline{
display : inline-block;
}
.active .navbar-list{
visibility: visible;
opacity: 1;
transform: translateX(0);
z-index: 999;
}
}
`
    return (
        <Nav>
            <div className={openMenu ? "menuIcon active" : 'menuIcon'}>
                <ul className="navbar-list">
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar-link' to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar-link' to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar-link' to='/services'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => setOpenMenu(false)} className='navbar-link' to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                {/* mobile navbar button  */}
                <div className="mobile-navbar-btn">
                    <CgMenuLeftAlt name='menu-outline' className='mobile-nav-icon' onClick={() => setOpenMenu(true)} />
                    <CgCloseR name='close-outline' className='close-outline mobile-nav-icon' onClick={() => setOpenMenu(false)} />
                </div>
            </div>
        </Nav>
    )
}

export default Navigation