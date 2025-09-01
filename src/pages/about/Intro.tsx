import picOfMe from "@/assets/picofme.jpg";
import { FaFileDownload } from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Intro() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 p-5 w-1/1">
      <div className="flex justify-center sm:justify-end w-1/2">
        <img
          src={picOfMe}
          alt="Picture of Joseph"
          className="w-48 rounded-t-full"
        />
      </div>
      <div className="flex flex-col justify-start w-full sm:w-1/2 h-1/1">
        <div className="flex pb-3 sm:pb-0 items-end h-2/3">
          <p className="w-full text-xl text-center sm:text-left">
            Hi! I'm Joseph, a software engineer from New York City with
            experience building full-stack applications.
          </p>
        </div>
        <div className="flex items-center gap-3 h-1/3">
          <div className="flex w-full justify-center sm:justify-start items-center gap-5">
            <div
              className="flex gap-2 bg-gray-700 p-1.5 rounded-2xl cursor-pointer transition-all duration-200 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_1.55rem_rgba(1,255,1,.3)]  active:scale-95"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Joseph_Arias_Resume.pdf";
                link.download = "Joseph_Arias_Resume.pdf";
                link.click();
              }}
            >
              <p>Resume</p>
              <FaFileDownload className="w-auto h-6" />
            </div>
            <a
              href="https://github.com/JoeArias1121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="w-auto h-6 cursor-pointer transition-all duration-200 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_1.65rem_rgba(1,255,1,1)]  active:scale-95" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-a-arias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="w-auto h-6 cursor-pointer transition-all duration-200 ease-in-out hover:scale-125 hover:drop-shadow-[0_0_1.65rem_rgba(1,255,1,1)]  active:scale-95" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
