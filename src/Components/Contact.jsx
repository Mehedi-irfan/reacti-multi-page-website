import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    const Wrapper = styled.section`
padding : 4rem 0 5rem 0;
.container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
`;
    return (
        <Wrapper className='section'>
            <h2 className="common-heading" >Feel free to contact us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58863.23625581267!2d91.54199045180225!3d22.76715267595432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37533714e1dc3c01%3A0xea6d667f3606eb3d!2sMirsharai!5e0!3m2!1sen!2sbd!4v1661179332224!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/mgeqvebg" method='POST' className='contact-inputs'>
                        <input type="text" name='username' placeholder='User name' autoComplete='off' required />
                        <input type="eamil" name='eamil' placeholder='Eamil ' autoComplete='off' required />
                        <textarea name="message" id="" cols="30" rows="6" autoComplete='off' required></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact