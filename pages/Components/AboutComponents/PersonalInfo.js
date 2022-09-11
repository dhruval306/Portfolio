import React from 'react'
import tw from "tailwind-styled-components"
import List from "../../../APIs/Skills.js"
const Personal = () => {
  return (
      <Information className='Info'>
       <PersonalInfo>
           <BriefInfo>
                 <Logo className='Header_logo' src='https://i.ibb.co/k9ZsQhJ/IMG-20210114-WA0006.jpg'/>
                 <InfoHeader><p>Dhruval Soni</p><InfoHeader_2>Full-Stack Developer</InfoHeader_2></InfoHeader>
                 
           </BriefInfo>
       </PersonalInfo>
       <Skills>
            <Head>
            Main Skills
            </Head>
            <SkillList>
                {
                    List.map((val,index)=>{
                        return (
                            <>
                                <Skill key={index}>
                                 {val.skillName}
                                </Skill>
                            </>
                        )
                    })
                }
                
            </SkillList>
        </Skills> 
       </Information>
  )
}
const Information =  tw.div`md:flex md:flex flex-wrap sm:overflow-x-auto border--2 pb-5 border-black`
const Head = tw.div`text-xl font-semibold capitalize my-4`
const PersonalInfo = tw.div`flex-1`
const BriefInfo = tw.div`flex  items-center leading-loose`
const Skills = tw.div`flex-1 mx-5`
const SkillList = tw.div`mx-2 flex flex-wrap`
const Skill = tw.div`bg-gray-200 p-2 rounded hover:bg-gray-300 transition duration-500 mx-2 mb-2 cursor-pointer`
const Logo = tw.img`h-40 w-40  object-contain rounded-xl bg-white border-2  shadow-lg mx-3`
const InfoHeader = tw.div`font-bold text-xl`
const InfoHeader_2 = tw.div`text-sm`
export default Personal