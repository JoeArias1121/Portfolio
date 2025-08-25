import {} from "react";
import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiVuedotjs,
  SiExpress,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiSupabase,
  SiPostgresql,
  SiShadcnui,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import Experience from "../../components/Experience";
import Project from "../../components/Project";
import PicOfMe from "../../assets/PicOfMe.jpg";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-3/4">
      <div className="flex justify-center items-center gap-4 p-4 w-1/1">
        <div className="flex justify-end w-1/2">
          <img
            src={PicOfMe}
            alt="Picture of Joseph"
            className="w-48 rounded-t-full"
          />
        </div>
        <div className="flex justify-start w-1/2">
          <p>
            Hi! I'm Joseph, a software engineer <br />
            with experience building full-stack applications. <br />
            I have a desire to create impactful software <br />
            that solves real-world problems.
          </p>
        </div>
      </div>
      <p className="text-4xl py-3">Experience</p>
      <Experience
        title={"Software Engineer Intern"}
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
      <p className="text-4xl py-3">Projects</p>
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
        icons={[
          SiNextdotjs,
          SiReact,
          SiJavascript,
          SiTailwindcss,
          SiPrisma,
          SiSupabase,
          SiPostgresql,
          SiShadcnui,
          SiTypescript,
        ]}
      />
      <Project
        name={"Workflow App"}
        description={
          "Facilitates task and project management by allowing users to create tasks for projects and assign them to others"
        }
        contributions={[
          "Rebuilt backend logic and ensured data integrity through updated SQL schema",
          "Implemented asynchronous user interactions using JavaScript promises",
          "Reintroduced a removed feature and ensured compatibility with legacy code",
        ]}
        icons={[SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql]}
      />
      <Project
        name={"ReTry"}
        description={
          "Is a video game where the user has to jump up onto higher platforms and avoid falling too low. It does have a few twists though!"
        }
        contributions={[
          "Managed project scope by prioritizing core features and iterating from initial concept to minimum viable product within time constraints",
          "Conducted user testing sessions with multiple playtesters to gather feedback on gameplay mechanics, difficulty balance, and overall user experience",
          "Created game assets including level designs, collision systems, and interactive object behaviors to deliver a complete playable experience",
        ]}
      />
    </div>
  );
}
