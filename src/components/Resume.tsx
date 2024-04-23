import { useState } from "react";
import Title from "./Title";
import Skills from "./Skills";
import Experience from "./Experience";
import { FadeIn } from "./FadeIn";

const Resume = () => {
  const [skillData, setSkillData] = useState<Boolean>(false);
  const [experienceData, setExperienceData] = useState<Boolean>(false);
  return (
    <section
      id="resume"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="7+ YEARS OF EXPERIENCE" des="My Resume" />
        </div>
        <div>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            <li
              onClick={() => {
                setSkillData(true);
                setExperienceData(false);
              }}
              className={`${
                skillData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Professional Skills
            </li>
            <li
              onClick={() => {
                setSkillData(false);
                setExperienceData(true);
              }}
              className={`${
                experienceData
                  ? "border-designColor rounded-lg"
                  : "border-transparent"
              } resumeLi`}
            >
              Experience
            </li>
          </ul>
        </div>
        {skillData && <Skills />}
        {experienceData && <Experience />}
      </FadeIn>
    </section>
  );
};

export default Resume;
