import React, { FC } from "react";

interface ISidebar {
  heading: string;
}
const Sidebar: FC<ISidebar> = ({ heading }) => {
  return (
    <div className="max-w-[360px] my-3">
      <div>
        <h2 className="text-secondary300 jakarta-sidebar-heading">{heading}</h2>
      </div>
    </div>
  );
};

export default Sidebar;
