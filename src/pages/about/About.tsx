import { } from "react";
import type { IconType } from "react-icons";
import { SiHtml5, SiCss3, SiNextdotjs, SiReact, SiJavascript } from "react-icons/si";
import Experience from "../../components/Experience";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-400">
      <p>
        Hi! I'm Joseph, a software engineer <br />
        with experience building full-stack applications. <br />
        I have a desire to create impactful software <br />
        that solves real-world problems.
      </p>
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
      />
    </div>
  );
}
