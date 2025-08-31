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
      <div className="flex justify-between py-2">
        <div className="flex flex-col items-start">
          <p className="text-xl">{title}</p>
          <p className="font-bold">@ {company}</p>
        </div>
        <p>{date}</p>
      </div>
      <div>
        <ul className="list-disc pl-4 list-inside">{descriptionList}</ul>
      </div>
      {icons && (
        <div className="flex gap-2 py-4">
          <p className="text-xl">Used:</p>
          <div className="flex gap-3">
            {icons.map((Icon, index) => (
              <Icon
                key={index}
                className="w-auto h-6 cursor-pointer transition-all duration-200 ease-in-out hover:scale-140 hover:drop-shadow-[0_0_1.65rem_rgba(1,255,1,1)]  active:scale-115"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
