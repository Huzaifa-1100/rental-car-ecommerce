import React, { FC } from "react";

interface IFooter {
  heading: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

const FooterContent: FC<IFooter> = ({ heading, p1, p2, p3, p4 }) => {
  return (
    <div>
      <h2 className="text-secondary500 jakarta-footer-headings my-5">
        {heading}
      </h2>
      <div className="jakarta-reular text-secondary500 opacity-60 space-y-5">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
        <p>{p4}</p>
      </div>
    </div>
  );
};

export default FooterContent;
