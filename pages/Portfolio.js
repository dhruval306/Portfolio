import React from 'react'
import tw from "tailwind-styled-components"
import PortfolioContainer from './Components/PortfolioContainer.js'
import FooterAbout from './Components/FooterAbout'
import NavbarConrainer from './Components/NavbarConrainer'

const Portfolio = () => {
  return (
    <Wrapper>
        <NavbarConrainer />
        <PortfolioContainer />
        <FooterAbout />
    </Wrapper>
  )
}
const Wrapper = tw.div`h-screen flex flex-col`
export default Portfolio