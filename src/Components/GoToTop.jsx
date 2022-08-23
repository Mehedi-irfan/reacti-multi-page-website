import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import { useEffect } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {
        let scrollHeight = 250;
        const windowHeight = document.body.scrollTop || document.documentElement.scrollTop;

        if (windowHeight > scrollHeight) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])

    return (
        <Wrapper>
            {
                isVisible && (
                    <div className="top-btn" onClick={goToBtn}>
                        <FaArrowUp className='top-btn--icon' />
                    </div>
                )
            }
        </Wrapper>
    );
};

const Wrapper = styled.section`
 display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-size: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.btn};
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.3rem);
      }
      100% {
        transform: translateY(0.6rem);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default GoToTop;