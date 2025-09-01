type Props = {
  className?: string;
}

export default function Education({className = ""}: Props) {
  return (
    <div className={`flex flex-col w-1/1 ${className}`}>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div className="flex flex-col items-start">
          <p className="text-xl">State University of New York at New Paltz</p>
          <p className="text-lg font-bold">Bachelor of Science in Computer Science</p>
        </div>
        <p>Aug 2021 - Dec 2024</p>
      </div>
      <div>
        <p><strong>GPA:</strong> 3.65/4.00</p>
        <p><strong>Honors:</strong> Dean's List, AC^2 Outstanding Scholar Award</p>
        <p>
          <strong>Coursework:</strong> Data Structures, Algorithms, Operating Systems, Web Server
          Programming, Language Processing, Software Engineering
        </p>
      </div>
    </div>
  );
}
