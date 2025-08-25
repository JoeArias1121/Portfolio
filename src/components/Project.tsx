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
    <div className="flex flex-col w-1/1">
      <div className="text-3xl py-2">
        <p>{name}</p>
      </div>
      <div>
        <p className="text-xl">{"This project: "}</p>
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-xl">{"I: "}</p>
        <ul className="list-disc p-4 list-inside">{contributionsList}</ul>
      </div>
      {icons && (
        <div className="flex gap-2 py-4">
          <p className="text-xl">Used:</p>
          <div className="flex gap-2">
            {icons.map((Icon, index) => (
              <Icon
                key={index}
                className="w-auto h-8 cursor-pointer transition-all duration-200 ease-in-out hover:scale-140 hover:drop-shadow-[0_0_1.65rem_rgba(1,255,1,1)]  active:scale-115"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
