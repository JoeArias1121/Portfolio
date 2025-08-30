type Props = {
  className?: string;
  eduRef?: React.Ref<HTMLDivElement | null>;
}

export default function Education({className = "", eduRef = null}: Props) {
  return (
    <div ref={ eduRef } className={`flex flex-col w-1/1 ${className}`}>
      <div className="flex justify-between py-2">
        <div className="flex flex-col items-start">
          <p className="text-3xl">State University of New York at New Paltz</p>
          <p className="text-xl">Bachelor of Science in Computer Science</p>
        </div>
        <p>Aug 2021 - Dec 2024</p>
      </div>
      <div>
        <p>GPA: 3.65/4.00</p>
        <p>Honors: Dean's List, AC^2 Outstanding Scholar Award</p>
        <p>
          Coursework: Data Structures, Algorithms, Operating Systems, Web Server
          Programming, Language Processing, Software Engineering
        </p>
      </div>
    </div>
  );
}
