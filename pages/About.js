import React from 'react'
import tw from "tailwind-styled-components"
import AboutMeContainer from './Components/AboutMeContainer'
import FooterAbout from './Components/FooterAbout'
import NavbarConrainer from './Components/NavbarConrainer'

const About = () => {
  return (
    <Wrapper>
       
        <AboutMeContainer />
        <FooterAbout />
    </Wrapper>
  )
}
const Wrapper = tw.div`h-screen flex flex-col`


export default About