import {} from "react";
import type { IconType } from "react-icons";

type props = {
  name: string;
  description: string;
  contributions: string[];
  icons?: IconType[];
};

export default function Project({
  name,
  description,
  contributions,
  icons,
}: props) {
  const contributionsList = contributions.map((contribution, index) => (
    <li key={index} className="">
      {contribution}
    </li>
  ));
  return (
    <div className="flex flex-col w-1/1 bg-blue-600">
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{"This project: "}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>{"I: "}</p>
        <p>{contributionsList}</p>
      </div>
      {icons && (
        <div className="flex gap-2">
          <p>Used:</p>
          <div className="flex gap-2">
            {icons.map((Icon, index) => (
              <Icon key={index} className="w-auto h-8" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
