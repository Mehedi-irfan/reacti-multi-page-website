import React, { useEffect } from 'react'
import { useGloabalContext } from '../Context'
import Contact from './Contact';
import HeroSection from './HeroSection'
import Services from './Services';

const Home = () => {
    const { updateHomePage } = useGloabalContext();

    useEffect(() => {
        updateHomePage()
    }, [])
    return (
        <>
            <HeroSection />
            <Services />
            <Contact />
        </>
    )
}

export default Home