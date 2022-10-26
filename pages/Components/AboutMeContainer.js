import Link from 'next/link.js'
import React from 'react'
import tw from "tailwind-styled-components"
import Personal from './PersonalInfo.js'

const AboutMeContainer = () => {
  return (
    <Wrapper className='About projectcard'>
      <Header>
          <Button>
            <Link href='/'>
               <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png'/>
            </Link>
          </Button>
          <Heading >
              About <Span> <Span2>Me</Span2></Span>
          </Heading>
        </Header>
        <Personal />
    </Wrapper>
  )
}
const Wrapper = tw.div`flex-1 px-5 sm:px-20 bg-white overflow-y-scroll animate-bounce_page`
const Heading = tw.div`text-2xl px-2 font-bold my-3 w-6/12`
const Span = tw.span`before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block text-white`
const Span2 = tw.span`relative text-white`
const Header = tw.div`flex  items-center bg-gray-200 mb-4 mt-2 rounded-md`
const Button = tw.div`z-10  juustify-center  sm:left-20 mr-5  cursor-pointer w-6/12`
const BackButton = tw.img`h-full object-contain w-10 bg-white rounded-full shadow-lg ml-5`

export default AboutMeContainer