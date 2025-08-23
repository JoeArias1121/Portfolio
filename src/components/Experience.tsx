import React from "react";
import type { IconType } from "react-icons";

type Props = {
  title: string;
  company: string;
  date: string;
  description: string[];
  icons?: IconType[];
};

export default function Experience({
  title,
  company,
  date,
  description,
  icons,
}: Props) {
  const descriptionList = description.map((item, index) => (
    <li key={index} className="">
      {item}
    </li>
  ));

  return (
    <div className="w-1/1 bg-pink-600">
      <div className="flex justify-between bg-amber-800 w-1/1">
        <div className="flex flex-col  items-start">
          <p>{title}</p>
          <p>{company}</p>
        </div>
        <p>{date}</p>
      </div>
      {description.length > 0 && (
        <ul className="list-disc pl-5">{descriptionList}</ul>
      )}
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
