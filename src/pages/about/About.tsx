import {} from 'react'

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center bg-amber-400">
      <p>
        Hi! I'm Joseph, a software engineer <br />
        with experience building full-stack applications. <br />
        I have a desire to create impactful software <br />
        that solves real-world problems.
      </p>
      <div className='flex justify-between bg-amber-800 w-1/1'>
        <div className="flex flex-col  items-start">
          <p>Software Engineer Intern</p>
          <p>Pheonix Bioninformatics</p>
        </div>
        <p>Feb 2024 - Aug 2024</p>
      </div>
    </div>
  )
}
