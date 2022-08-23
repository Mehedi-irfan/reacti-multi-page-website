import React from 'react'
import { useGloabalContext } from '../Context'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../Styles/Button'

const Services = () => {
    const { services } = useGloabalContext();


    return (
        <Wrapper classname="section">
            <h2 className="common-heading" >Our Services</h2>
            <div className="container grid grid-three-column">
                {
                    services.map((value) => {
                        const { id, title, image, description } = value;
                        return (
                            <div className="card" key={id}>
                                <figure>
                                    <img src={image} alt="" />
                                </figure>
                                <div className="card-data">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <NavLink to='/service'>
                                        <Button className='btn'>
                                            Read More
                                        </Button>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
.section{
padding : 1.5rem 0rem;
background-color : ${({ theme }) => theme.colors.bg};
}
.container {
max-width : 70rem;
margin-top : 1.5rem;
}
.card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0.8rem 1.2rem;
    }

    h3 {
      margin: 0.4rem 0;
      font-weight: 300;
      font-size: 1.5rem;
    }
    .btn {
      margin: 0.8rem auto;
padding: 0.8rem 3rem;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
object-fit:cover;
      margin-top: 1.5rem;
      height: 15rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }

`;

export default Services