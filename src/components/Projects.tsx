import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { agriApp, caCr, mCusa, nDoto } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
          <ProjectsCard
            title="Agronomist Business"
            des=" Professional site showcasing agronomy services, crop management, sustainability practices, and consultation for farmers and agricultural businesses."
            src={agriApp}
          />
          <ProjectsCard
            title="A Website for a Charity"
            des=" Dedicated platform highlighting charitable initiatives, donation drives, volunteering opportunities, impact stories, and ways to support communities"
            src={caCr}
          />
          <ProjectsCard
            title="Student Association Website"
            des="Comprehensive site presenting party manifesto, candidate profiles, campaign updates, events, policies, and ways to engage in politics."
            src={mCusa}
          />
          <ProjectsCard
            title="College Class Management App"
            des=" Efficient tool streamlining assignment submissions, feedback delivery, grading process, student-teacher communication, and academic performance tracking."
            src={nDoto}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
