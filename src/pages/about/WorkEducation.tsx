import Experience from "@/components/Experience";
import { Card } from "@/components/ui/card";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiVuedotjs,
} from "react-icons/si";

export default function WorkEducation() {
  return (
    <>
      <div className="flex align-center gap-2 bg-gray-700 p-1 mb-5 rounded-2xl">
        <div className="w-1/2 cursor-pointer bg-black py-2 px-20 rounded-2xl">
          <p>Work</p>
        </div>
        <div className="w-1/2 cursor-pointer py-2 px-20 rounded-2xl">
          <p>Education</p>
        </div>
      </div>
      <Card className="text-white p-2">
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
      </Card>
    </>
  );
}
