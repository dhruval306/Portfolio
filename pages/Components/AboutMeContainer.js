import Link from 'next/link.js'
import React from 'react'
import tw from "tailwind-styled-components"
import EducationInformation from './AboutComponents/EducationInformation.js'
import ExperienceInformation from './AboutComponents/ExperienceInformation.js'
import Personal from './AboutComponents/PersonalInfo.js'

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
        <ExperienceInformation />
        <EducationInformation />
    </Wrapper>
  )
}
const Wrapper = tw.div`flex-1 px-5 sm:px-20 bg-white overflow-y-scroll animate-bounce_page`
const Heading = tw.div`text-2xl  py-3 px-2 text-center font-bold my-4`
const Span = tw.span`before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block text-white`
const Span2 = tw.span`relative text-white`
const Header = tw.div`flex justify-center items-center`
const Button = tw.div`z-10 bg-white juustify-center rounded-full sm:left-20 mr-5 shadow-lg cursor-pointer`
const BackButton = tw.img`h-full object-contain w-10`

export default AboutMeContainer