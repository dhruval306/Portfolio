import React, { useState } from 'react'
import tw from "tailwind-styled-components"
import ProjectList from '../../APIs/ProjectsAPI.js'
import Link from 'next/link'


const PortfolioContainer = () => {
   const[show, setShow]  = useState(false);
   const moreInfoEvent = () => [
        setShow(!show)
   ]
  return (
    <Wrapper>
        <Heading className='hello'>
            <FirstHeading>
                <Head>Projects</Head>
                <input className={search} placeholder='Search'/>
                <Search>
                     <Coding onClick={() => {moreInfoEvent()}} src={!show? 'https://img.icons8.com/color/information' : 'https://img.icons8.com/color/cancel'}/>
                </Search>
            </FirstHeading>
           <SecondHeading className='Typing_efffect'>REGONITIONS & ACCOIMPLISHMENTS</SecondHeading>
        </Heading>
        <Projects>
            <ProjectCards className='projectcard'>
                {
                    ProjectList.map((val,index) => {
                        return(
                                <Card key={index}> 
                                    <CardImage>
                                        <Image className='card_image' src={val.ImageLink} />    
                                    </CardImage>
                                    <CardInfo>
                                        <Name>{val.Name}</Name>
                                        {val.WebsiteLink ? <Link href={val.WebsiteLink}><Button className="" ><Coding data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVnOA33tL0nRrk3L-haPa4rhrS0KN1drV8HyFWG2_Wg&s'/></Button></Link>: ""}
                                        {val.GithubCode ? <Link href={val.GithubCode}><Button> <Coding src='https://www.svgrepo.com/show/123516/code-interface-symbol-of-signs.svg'/></Button></Link>: ""}
                                    </CardInfo> 
 
                                    {show ? <MoreInfo>
                                        <MoreInfoHeader>
                                            <First>{val.Name}</First>
                                        </MoreInfoHeader>
                                        <Description>{val.Description}</Description>
                                    </MoreInfo>: ""}
                                </Card>
                        )
                    })
                }
            </ProjectCards>
        </Projects>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex-1 bg-gray-200 px-10 sm:px-20 h-full overflow-y-scroll`
const Head = tw.div`flex ml-5 uppercase items-center flex-1`
const Search = tw.div`flex bg-black rounded m-3 hover:scale-110 transition delay-200 `
const Heading = tw.div`py-2 my-1 flex `
const FirstHeading = tw.div`text-2xl mb-3 font-bold flex w-full bg-white rounded flex`
const SecondHeading = tw.div`text-xl pb-2 text-gray-700`
const Projects = tw.div`pb-10 px-50`
const ProjectCards = tw.div` grid  md:grid-cols-3 sm:grid-cols-2 gap-10 `
const Card = tw.div`relative flex flex-col animate-bounce_page bg-white items-center rounded shadow-xl p-4 hover:-translate-y-3 hover:scale-102 transition duration-200 items-center`
const CardImage = tw.div`overflow-hidden `
const Image = tw.img`h-96 w-full rounded object-fit`
const CardInfo = tw.div`flex w-full justify-center items-start px-3 py-1`
const Name = tw.div`flex-1 text-xl uppercase py-2 text-neutral-600 font-semibold`
const MoreInfo = tw.button`flex flex-col font-bold rounded cursor-pointer absolute top-0 right-0 bg-gray-700 text-white text-md h-full`
const Coding = tw.img`md:w-6 w-4 my-2 mx-2 cursor-pointer rounded-full hover:scale-110 transition delay-200 hover:bg-gray-300`
const Description = tw.div`bg-white text-black flex-1 p-5 text-md`
const Button = tw.div``
const MoreInfoHeader = tw.div`text-xl uppercase pb-2 flex w-full items-center`
const First = tw.div`flex-1 flex ml-5 items-center py-2 `
const search = `bg-gray-200 my-3 px-2 rounded outline-none text-sm sm:block hidden `

export default PortfolioContainer