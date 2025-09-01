import {} from "react";
import type { IconType } from "react-icons";

type props = {
  className?: string;
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
  className = "",
}: props) {
  const contributionsList = contributions.map((contribution, index) => (
    <li key={index} className="">
      {contribution}
    </li>
  ));
  return (
    <div className={`flex flex-col w-1/1 ${className}`}>
      <div className="text-2xl">
        <p>{name}</p>
      </div>
      <div className="ml-3">
        <div>
          <p><strong>Description:</strong> {description}</p>
        </div>
        <div>
          <ul className="list-disc p-2 list-inside">{contributionsList}</ul>
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
