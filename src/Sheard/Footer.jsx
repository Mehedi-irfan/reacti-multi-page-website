import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready To Get Started?</h3>
                        <h3>Talk To Us Today</h3>
                    </div>
                    <div>
                        <NavLink to='/'>
                            <Button>Get Started</Button>
                        </NavLink>
                    </div>
                </div>
            </section>
            {/* footer section  */}
            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Mehedi Irfan</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    {/* 2nd column  */}
                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" placeholder='Email' autoComplete='off' required />
                            <input type="submit" className='btn' value="Subscribe" />
                        </form>
                    </div>

                    {/* 3rd column  */}
                    <div className="footer-socail">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                {<FaDiscord className='icons' />}
                            </div>
                            <div>
                                {<FaInstagram className='icons' />}
                            </div>
                            <div>
                                {<FaYoutube className='icons' />}
                            </div>
                        </div>
                    </div>


                    {/* fourth column  */}
                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <h3>+880 1892054369</h3>
                    </div>

                </div>

                {/* bottom section  */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>
                            @{new Date().getFullYear()} Mehedi Irfan. All Rights Reserved
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TREMS & CONDITIONS</p>
                        </div>
                    </div>

                </div>
            </footer>

        </Wrapper>
    )
}

const Wrapper = styled.section`
.contact-short{
max-width : 60vw;
margin : auto;
padding : 1.5rem 3rem;
background-color : ${({ theme }) => theme.colors.bg};
border-radius : 1rem;
box-shadow : ${({ theme }) => theme.colors.shadowSupport};
transform : translateY(50%);
.grid div:last-child{
justify-self : end;
align-self : center;
}
}
 footer {
    padding: 7rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 1.5rem;
font-size : 1.1rem;
    }
.btn{
padding : 0.8rem 2.5rem;
}
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 1rem;
      div {
        padding: 0.6rem 0.7rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 0.9rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 4rem;
      hr {
        margin-bottom: 1rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer