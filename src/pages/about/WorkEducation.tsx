import { useState } from "react";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiVuedotjs,
} from "react-icons/si";

export default function WorkEducation() {
  const [active, setActive] = useState<"work" | "education">("work");
  return (
    <>
      <div className="relative flex items-center bg-gray-700 mb-5 rounded-2xl">
        <div
          className={`absolute h-10 rounded-2xl bg-black w-1/2 transition-transform duration-300 ease-in-out ${
            active === "work" ? "translate-x-0" : "translate-x-full"
          }`}
        />

        <div
          className="relative z-10 w-1/2 cursor-pointer text-center px-20 py-2 rounded-2xl"
          onClick={() => setActive("work")}
        >
          <p>Work</p>
        </div>
        <div
          className="relative z-10 w-1/2 cursor-pointer text-center px-20 py-2 rounded-2xl"
          onClick={() => setActive("education")}
        >
          <p>Education</p>
        </div>
      </div>

      <div className="relative h-auto overflow-hidden w-full border-white shadow-white shadow-sm rounded-2xl">
        <div
          className={`flex w-[200%] transition-transform duration-500 ease-in-out ${
            active === "work" ? "translate-x-0" : "-translate-x-1/2"
          }`}
        >
          <div className="w-1/2">
            <Experience
              className="p-5"
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
              className="p-5"
              title={"Supplemental Instruction Leader"}
              company={"SUNY New Paltz - Center for Student Success"}
              date={"Aug 2022 - Dec 2022"}
              description={[
                "Led weekly peer sessions for the Data Structures course, averaging six students per session",
                "Developed study materials and walkthroughs based on real assessments",
                "Coordinated with faculty to align session goals with course progress",
              ]}
            />
          </div>

          <div className="w-1/2 p-5">
            <Education />
          </div>
        </div>
      </div>
    </>
  );
}
