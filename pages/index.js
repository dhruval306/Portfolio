import tw from "tailwind-styled-components"
import React from 'react'
import Home from "./Home"

const Index = () => {
  
  const Wrapper = tw.div`h-screen` 
  return (
    <Wrapper>
     <Home />
    </Wrapper>
  )

}

export default Index