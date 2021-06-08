import { useEffect } from "react";
import { skillsData } from "../Components/skillsData";
import Tittle from "../Components/Tittle";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="SkillsPage">
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        {skillsData.map((data, index) => {
          return (
            <div key={index} className="skill" data-aos="zoom-out">
              <h4>{data.skill}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
