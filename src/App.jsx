import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { GlobalStyle } from "./Components/GlobalStyle";
import GoToTop from "./Components/GoToTop";
import Home from './Components/Home';
import Services from "./Components/Services";
import './CSS/Style.css'
import Footer from "./Sheard/Footer";
import Header from "./Sheard/Header";

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: '#fff',
      black: '#212529',
      helper: '#8690ff',
      bg: 'rgb(249 249 255)',
      footer_bg: '#0a1435',
      btn: 'rgb(98 84 243)',
      border: 'rgba(98, 84, 243, 0.5)',
      hr: '#ffffff',
      gradient: 'linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98 198 292) 100%)',
      shadow: 'rgba(0,0,0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      shadowSupport: 'rgba(0, 0,0, 0.16) 0px 1px 4px'
    },
    media: {
      mobile: '798px',
      tab: '998px'
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
