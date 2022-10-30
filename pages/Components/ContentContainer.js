import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const ContentContainer = () => {
  return (
    <Wrapper  className='home_container'>
        <Containner>
            <Quotes className='home_text'>I&apos;m <SpanTag>Full Stack </SpanTag> Web developer Turning Your PaperBall Into <SpanTag> PaperPlane</SpanTag></Quotes>
            <Link href='/Portfolio'>
            <Button>
                View 
            <ButtonImg src='https://img.icons8.com/ios-filled/50/000000/right.png' />
            </Button>
            </Link>
        </Containner>
        <PlaneImg className='image animation_plane' src='https://www.clipartmax.com/png/full/67-673811_paper-airplane-png-paper-plane-logo-png.png' />
    </Wrapper>
  )
}
const Wrapper = tw.div`flex-1 w-full flex items-center justify-center object-contain px-10 sm:px-20 overflow-auto `
const Containner = tw.div`flex flex-col justify-center  items-center object-contain`
const Quotes = tw.div` capitalize animate-bounce_once`
const Plane = tw.img``
const Button = tw.div`flex cursor-pointer font-bold text-sm items-center self-start bg-black shadow-lg text-white px-10 py-2 my-6 rounded`
const ButtonImg = tw.img`w-5 h-5 ml-5 rounded-full bg-white`
const PlaneImg = tw.img`animate-pulse`
const SpanTag = tw.span`text-sky-400`
export default ContentContainer