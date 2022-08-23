import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Button } from '../Styles/Button';
import { useGloabalContext } from '../Context';

const HeroSection = () => {
  const { name, image } = useGloabalContext()
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">
            {name}
          </h1>
          <p className="hero-para">
            Lorem sit amet consectetur adipisicing elit. Est eveniet sint nemo optio ducimus sunt, temporibus blanditiis nam molestias voluptatem.
          </p>
          <Button className='btn hireme-btn'>
            <NavLink to='/contact'>Hire Me</NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img className='hero-img' src={image} alt="logo" />
          </picture>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
 padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 3rem;
  }
  .hero-para {
    margin-top: 1rem;
    margin-bottom: 2rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`
export default HeroSection