import React from "react";

interface CustomListItem {
  shortcut: string;
  title: string;
  description: string;
}

interface CustomListItemProps {
  items: CustomListItem[];
  schortcutColor?: string;
}

const CustomList: React.FC<CustomListItemProps> = ({ items, schortcutColor = "bg-warm-pink" }) => {
  return (
    <ul className={`list-none space-y-5 py-4`}>
      {items.map((item, index) => (
        <li key={index} className="relative pl-16">
          <span
            className={`absolute left-0 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full ${schortcutColor} text-sm font-extrabold text-white`}
          >
            {item.shortcut}
          </span>
          <span className="justify-normal font-bold">{item.title}</span> {item.description}
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
