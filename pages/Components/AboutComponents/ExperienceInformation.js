import React from 'react'
import tw from "tailwind-styled-components"

const ExperienceInformation = () => {
  return (
   <ExperienceInfo className='Info'>
            <Head>
                Experience
            </Head>
            <ExperienceList>
                <Experience>
                    <Company>
                         HnTechno Pvt Ltd (September 2019 - April 2021)
                    </Company>
                    <Role>
                        Intern Java Developer (September 2019 – February 2020) <br />
                        Java Developer  (March 2020 – April 2021)
                    </Role>
                    
                </Experience>
            </ExperienceList>
       </ExperienceInfo>
  )
}
const ExperienceInfo = tw.div`flex-wrap mx-5`
const ExperienceList = tw.div``
const Experience = tw.div`my-2`
const Company = tw.div``
const Role = tw.div` mx-5`
const Head = tw.div`text-xl font-semibold capitalize my-4`
export default ExperienceInformation