import React from 'react'
import { skillsData } from '../Components/skillsData'
import Tittle from '../Components/Tittle'

function Skills() {
    return (
        <div className="SkillsPage">
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                {skillsData.map((data) => {
                    return (
                        <div className="skill">
                            <h4>{data.skill}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
