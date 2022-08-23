import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (
        <Wrapper>
            <img src="./public/images/error.svg" alt="" />
            <NavLink to='/'>
                <Button className='btn'>
                    Go Back
                </Button>
            </NavLink>
        </Wrapper>
    );
};
const Wrapper = styled.section`
padding : 6rem 0;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
img{
width : 40%
}
.btn{
margin-top : 3rem;
}
`;

export default Error;