import Intro from "@/pages/about/Intro";
import WorkEducation from "@/pages/about/WorkEducation";
import Projects from "@/pages/about/Projects";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/2 xl:max-w-2xl">
      <Intro />
      <WorkEducation />
      <Projects />
    </div>
  );
}
