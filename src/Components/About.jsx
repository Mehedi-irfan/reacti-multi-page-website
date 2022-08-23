import React, { useEffect } from 'react'
import { useGloabalContext } from '../Context'
import HeroSection from './HeroSection'

const About = () => {
    const { updateAboutPage } = useGloabalContext()

    useEffect(() => {
        updateAboutPage()
    })
    return (
        <>
            <HeroSection />
        </>
    )
}

export default About