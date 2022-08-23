import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navigation from '../Components/Navigation'

const Header = () => {
    return (
        <MainHeader>
            <NavLink to='/'>
                <h4 className='logo'>MEHEDI IRFAN</h4>
            </NavLink>
            <Navigation />
        </MainHeader >
    )
}

const MainHeader = styled.header`
padding : 0 4.8rem;
height : 6rem;
background-color : ${({ theme }) => theme.colors.bg};
display : flex;
justify-content : space-between;
align-items : center;  
.logo{
font-size : 1.7rem;
height : auto;
max-width : 100%
}
`

export default Header