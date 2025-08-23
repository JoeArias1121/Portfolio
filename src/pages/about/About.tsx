import { } from "react";
import { SiHtml5, SiCss3, SiNextdotjs, SiReact, SiJavascript, SiVuedotjs, SiExpress, SiTailwindcss, SiPrisma, SiTypescript, SiSupabase, SiPostgresql, SiShadcnui } from "react-icons/si";
import Experience from '../../components/Experience';
import Project from '../../components/Project';

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-400">
      <p>
        Hi! I'm Joseph, a software engineer <br />
        with experience building full-stack applications. <br />
        I have a desire to create impactful software <br />
        that solves real-world problems.
      </p>
      <p className="text-3xl">Experience</p>
      <Experience
        title={"Software Engineer"}
        company={"Phoenix Bioinformatics"}
        date={"Feb 2024 - Aug 2024"}
        description={[
          "Built dynamic web pages using Vue, Pinia, and TypeScript by managing state and making server-side requests to render interactive, data-driven interfaces",
          "Implemented backend logic using Sequelize to manage and process user data",
          "Leveraged Express.js and MySQL to query the database and satisfy requests made by the client",
          "Owned feature development from start to finish, engaging with a tech lead for PR feedback and technical alignment in an informal agile setting",
        ]}
        icons={[SiHtml5, SiCss3, SiVuedotjs, SiExpress, SiJavascript]}
      />
      <Experience
        title={"Supplemental Instruction Leader"}
        company={"SUNY New Paltz - Center for Student Success"}
        date={"Aug 2022 - Dec 2022"}
        description={[
          "Led weekly peer sessions for the Data Structures course, averaging six students per session",
          "Developed study materials and walkthroughs based on real assessments",
          "Coordinated with faculty to align session goals with course progress",
        ]}
      />
      <p className="text-3xl">Projects</p>
      <Project
        name={"Notaibly"}
        description={
          "Web app for users to take notes on and have AI summarize their notes using the OpenAI API"
        }
        contributions={[
          "Built a full-stack web app with real-time database interactions and authentication",
          "Designed responsive UI components with React and Tailwind",
          "Modeled data relationships using Prisma and integrated backend with Supabase",
        ]}
        icons={[SiNextdotjs, SiReact, SiJavascript, SiTailwindcss, SiPrisma, SiSupabase, SiPostgresql, SiShadcnui, SiTypescript]}
      />
    </div>
  );
}
