import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Footer = () => {
  return (
    <Wrapper className='footer'>
        <Heading>Say, Hello !!</Heading>
        <Handles>
            <Link href='https://www.linkedin.com/in/dhruval-soni-733654201'>
                <LinkedIn src='https://img.icons8.com/cute-clipart/344/linkedin.png' />
            </Link>
            <Link href='https://github.com/dhruval306'>
                <LinkedIn src='https://img.icons8.com/cute-clipart/344/github.png' />
            </Link>
            <Link href=''>
                <LinkedIn src='https://img.icons8.com/cute-clipart/344/twitter.png' />
            </Link>
        </Handles>

    </Wrapper>
  )
}
const Wrapper = tw.div`bg-gray-200 w-full text-center object-contain flex flex-col items-center justify-center`
const Heading = tw.div`font-semibold uppercase text-sm`
const Handles = tw.div`flex items-center justify-center py-2`
const LinkedIn = tw.img`hover:border-3 hover:scale-125 transition delay-150 duration-300 ease-in-out  cursor-pointer mx-3 h-8 sm:h-10 rounded-full p-1 hover:shadow-2xl overflow-auto shadow-lg`
export default Footer