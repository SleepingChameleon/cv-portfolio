import React from 'react'
import SkillsItem from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">Education & <span className="text-yellow-400">Skills</span></h1>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
            <div>
                <SkillsItem title="Sta. Josefa Elementary School" year="2010 - 2015"/>
                <SkillsItem title="STI College of Davao " year="2015 - 2018"/>
                <SkillsLanguage skill1="Web Development" skill2="Cybersecurity Specialist" skill3="Video Editor" level1="w-[80%]" level2="w-[30%]" level3="w-[80%]"/>
            </div>
            <div>
                <SkillsItem title="Sta. Josefa National High School" year="2018 - 2019"/>
                <SkillsItem title="Ateneo De Davao University" year="2021 - 2025"/>
                <SkillsLanguage skill1="Technician" skill2="Robot Specialist" skill3="Photography" level1="w-[90%]" level2="w-[40%]" level3="w-[60%]"/>
            </div>
        </div>
    </div>
  )
}

export default Skills;