import React from 'react'
import tw from "tailwind-styled-components"
import ContentContainer from './Components/ContentContainer'
import Footer from './Components/FooterAbout'
import NavbarConrainer from './Components/NavbarConrainer'


const Home = () => {
  const Wrapper = tw.div`h-screen flex flex-col bg-gray-200`
  return (
    <Wrapper>
        <NavbarConrainer />
          <ContentContainer />
        <Footer />
    </Wrapper>
  )
}

export default Home