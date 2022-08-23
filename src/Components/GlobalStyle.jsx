import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin : 0px;
    padding : 0px;
    box-sizing : border-box;
    font-family: 'Work Sans', sans-serif;
}
html {
    font-size : 62.5;
    scroll-behavior : smooth;
    overflow-x : hidden;
}
body{
    overflow-x : hidden;
}
::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background-color: rgb(24 24 29);
}
::-webkit-scrollbar-thumb {
  background-color: rgb(98 84 243);
  border: 2px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}

h1{
    color : ${({ theme }) => theme.colors.heading};
    font- size : 6rem;
    font-weight : 900
}
h2{
    color : ${({ theme }) => theme.colors.heading};
    font-size : 3rem;
    font-weight : 300;
    white-space : normal;
    text-align : center;
}
h3{
    fonst-size : 1.8rem;
    font-weight : 400;
}
p{
    color : ${({ theme }) => theme.colors.text};
    opacity : 0.7;
    font-size : 1rem;
    line-height : 1.5;
    margin-top : 1rem ;
    font-weight : 400;
}
a{
    text-decoration : none;
}
li{
    list-style : none;
}
.container{
    max-width : 60rem;
    margin : 0 auto;
}
.grid{
    display : grid;
    gap : 2rem;
}
.grid-two-column{
   grid-template-columns: repeat(2, 1fr); 
}
.grid-three-column{
   grid-template-columns: repeat(3, 1fr); 
}
.grid-four-column{
    grid-template-columns :1fr 1.2fr .5fr .8fr; 
}
.common-heading{
font-size : 3rem;
font-weight : 600;
margin-top : 4rem;
margin-bottom : 3rem;
text-transform: capitalize;
}

    input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1rem 1.8rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
    input[type="submit"]{
    max-width: 16rem;
    margin-top: 1rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    }
/* ===========================================
/* media queries  
======================================= */
/* px  */
/* rem  */
/* em  */
/* 1500px */
//998px
@media (max-width:${({ theme }) => theme.media.tab}) {
      .container{
        padding: 0 3.2rem;
      }
        .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:${({ theme }) => theme.media.mobile}) {
      html{
        font-size: 50%;
      }
      .grid{
        gap: 3.2rem;
      }
      .grid-two-column, .grid-three-column, .grid-four-column{
        grid-template-columns: 1fr;
      }
}


`;