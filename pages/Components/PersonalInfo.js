import React from 'react'
import tw from "tailwind-styled-components"
import List from "../../APIs/Skills.js"
const Personal = () => {
  return (
      <Information className='Info'>
       <PersonalInfo>
           <BriefInfo>
                 <Logo className='Header_logo' src='https://i.ibb.co/k9ZsQhJ/IMG-20210114-WA0006.jpg'/>
           </BriefInfo>
       </PersonalInfo>
       <InfoHeader>
        <Name><p>Dhruval Soni</p><InfoHeader_2>Full-Stack Developer</InfoHeader_2></Name>
        <hr className={header}/>
        <EducationInfo className='Info'>
            <Head>Education </Head>
            <EducationList>
            <Education>
               <College>Loyalist College</College>
               <Course>Computer Software and database development (2021 – 2023)</Course>
               <Score>GPA (3.6)</Score>
           </Education>
           <Education>
               <College>Kalol Institute Of Technolology</College>
               <Course>Information Technology (2016 – 2020)</Course>
               <Score>GPA (3.6)</Score>
           </Education>
           </EducationList>
       </EducationInfo>
        <ExperienceInfo className='Info'>
            <Head>Experience</Head>
            <ExperienceList>
                <Experience>
                    <Company>HnTechno Pvt Ltd (September 2019 - April 2021)</Company>
                    <Role>
                        Intern Java Developer (September 2019 – February 2020) <br />
                        Java Developer  (March 2020 – April 2021)
                    </Role>
                </Experience>
            </ExperienceList>
       </ExperienceInfo>
        <Skills>
            <Head>Main Skills</Head>
            <SkillList>{List.map((val,index)=> <> <Skill key={index}>{val.skillName}</Skill> </>)}</SkillList>
        </Skills>
        </InfoHeader>
       </Information>
  )
}
const Information =  tw.div`md:flex  flex-wrap sm:overflow-x-auto border--2 pb-5 border-black`
const Head = tw.div`sm:text-2xl text-xl uppercase pb-2`
const Name = tw.div`text-center w-full sm:text-4xl text-2xl mb-5`
const PersonalInfo = tw.div`sm:mr-20 `
const BriefInfo = tw.div`flex  items-center`
const Skills = tw.div`flex-1 w-full`
const SkillList = tw.div`mx-2 flex flex-wrap`
const Skill = tw.div`bg-gray-200 p-2 rounded hover:bg-gray-300 transition duration-500 mx-2 mb-2 cursor-pointer`
const Logo = tw.img` w-64 object-contain rounded-xl bg-white shadow-xl mx-3`
const InfoHeader = tw.div`flex-1 font-bold flex items-center flex-col sm:mt-0 mt-5`  
const InfoHeader_2 = tw.div`text-sm text-gray-500`
const ExperienceInfo = tw.div`w-full flex-1 pb-5`
const ExperienceList = tw.div`w-full flex`
const Experience = tw.div`flex-1` 
const Company = tw.div``
const Role = tw.div` mx-5`
const EducationInfo = tw.div`w-full flex-1 py-5`
const EducationList = tw.div`flex`
const Education = tw.div`flex-1`
const College = tw.div``
const Course = tw.div``
const Score = tw.div``
const header = `w-full border-2 border-gray-300`

export default Personal