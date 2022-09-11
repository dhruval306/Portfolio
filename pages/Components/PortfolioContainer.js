import React from 'react'
import tw from "tailwind-styled-components"
import ProjectList from '../../APIs/ProjectsAPI.js'
import Link from 'next/link'


const PortfolioContainer = () => {
    
  return (
    
    <Wrapper>
        <Heading className='hello'>
            <FirstHeading>Projects I Have <Span><Span2>Done</Span2></Span></FirstHeading>
            <SecondHeading className='Typing_efffect'>REGONITIONS & ACCOIMPLISHMENTS</SecondHeading>
        </Heading>
        <Projects>
            <ProjectCards className='projectcard'>
                {
                    ProjectList.map((val,index) => {
                        return(
                            <>
                                <Card key={index}> 
                                    <CardImage>
                                        <Image className='card_image' src={val.ImageLink} />    
                                    </CardImage>
                                    <CardInfo>
                                        <Name>{val.Name}</Name>
                                        <Description>{val.Description}</Description>
                                        <Buttons>
                                            {val.WebsiteLink ? <Link href={val.WebsiteLink}><Button className="" >View Site</Button></Link>: ""}
                                            {val.GithubCode ? <Link href={val.GithubCode}><Button>View Code</Button></Link>: ""}
                                        </Buttons> 
                                    </CardInfo>
                                </Card>
                            </>
                        )
                    })
                }
            </ProjectCards>
        </Projects>
    </Wrapper>
  )
}

const Wrapper = tw.div`flex-1 bg-gray-200 px-10 sm:px-20 h-full animate-bounce_page overflow-y-scroll`
const Heading = tw.div`py-3 px-2 my-1 d-flex`
const FirstHeading = tw.div`text-2xl mb-3 font-bold`
const SecondHeading = tw.div``
const Span = tw.span`before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-sky-500 relative inline-block text-white`
const Span2 = tw.span`relative text-white`
const Projects = tw.div`pb-10`
const ProjectCards = tw.div`grid  md:grid-cols-2 gap-20 `
const Card = tw.div`flex flex-col bg-white items-center rounded shadow-xl border-4 p-4 hover:-translate-y-4 transition duration-1000`
const CardImage = tw.div`overflow-hidden`
const Image = tw.img`h-96 w-full rounded object-fit hover:scale-110  transform-gpu transition duration-500 delay-100`
const CardInfo = tw.div`flex flex-col justify-evenly align-center p-4`
const Name = tw.div`text-2xl uppercase py-2 text-neutral-600`
const Description = tw.div`h-24 overflow-y-scroll justify-center py-3`
const Button = tw.div`mx-1 cursor-pointer rouned h w-24 hover:text-black hover:bg-white bg-black text-white border-2 border-black  mt-4 text-center py-1.5 transition duration-500 `
const Buttons = tw.div`flex`


export default PortfolioContainer