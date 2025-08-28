import Project from "@/components/Project";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function Projects() {
  return (
    <>
    <p className="text-4xl my-3">Projects</p>
          <div className="border-t w-full my-3 bg-amber-500 border-white" />
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
    </>
  )
}
