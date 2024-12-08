import React, { FC } from "react";

interface IdashBar {
  icon: JSX.Element;
  title: string;
}
const DashSidebar: FC<IdashBar> = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-3 hover:bg-primary500 w-fit p-3 pr-10 rounded-xl text-secondary300 hover:text-primary0 cursor-pointer">
      <div className="text-lg">{icon}</div>
      <h2>{title}</h2>
    </div>
  );
};

export default DashSidebar;
