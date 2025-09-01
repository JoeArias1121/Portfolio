import {} from "react";
import type { IconType } from "react-icons";

type Props = {
  className?: string;
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
  className = "",
}: Props) {
  const descriptionList = description.map((item, index) => (
    <li key={index} className="">
      {item}
    </li>
  ));

  return (
    <div className={`flex flex-col w-1/1 ${className}`}>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <div className="flex flex-col items-start">
          <p className="text-xl">{title}</p>
          <p className="font-bold">@ {company}</p>
        </div>
        <p>{date}</p>
      </div>
      <div className="ml-3">
      <div>
        <ul className="list-disc p-2 list-inside">{descriptionList}</ul>
      </div>
      {icons && (
        <div className="flex items-center gap-2">
          <p className="font-bold">Used:</p>
          <div className="flex flex-wrap gap-3">
            {icons.map((Icon, index) => (
              <Icon
                key={index}
                className="w-auto h-7 cursor-pointer transition-all duration-200 ease-in-out hover:scale-140 hover:drop-shadow-[0_0_1.65rem_rgba(1,255,1,1)]  active:scale-115"
              />
            ))}
          </div>
        </div>
        )}
        </div>
    </div>
  );
}
