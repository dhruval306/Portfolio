import React from 'react'
import tw from "tailwind-styled-components"

const EducationInformation = () => {
  return (
   <EducationInfo className='Info'>
            <Head>
            Education 
            </Head>
            <EducationList>
           <Education>
               <Name>
                   Loyalist College
               </Name>
               <Course>
                   Computer Software and database development (2021 – 2023)
               </Course>
               <Score>
                   GPA (3.6)
               </Score>
           </Education>
           <Education>
               <Name>
                   Kalol Institute Of Technolology
               </Name>
               <Course>
                   Information Technology (2016 – 2020)
               </Course>
               <Score>
                   GPA (3.6)
               </Score>
           </Education>
           </EducationList>
       </EducationInfo>
  )
}
const Head = tw.div`text-xl font-semibold capitalize my-4`
const EducationInfo = tw.div`flex-wrap mx-5 mb-9`
const EducationList = tw.div`flex w-auto`
const Education = tw.div`mr-5 flex-1`
const Name = tw.div``
const Course = tw.div``
const Score = tw.div``
export default EducationInformation