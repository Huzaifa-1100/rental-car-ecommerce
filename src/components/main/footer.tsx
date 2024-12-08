import Link from "next/link";
import React from "react";
import { footerData } from "../../../utils/data";
import FooterContent from "../sub/footerContent";

const Footer = () => {
  return (
    <footer className="wrapper">
      <div className=" grid grid-cols-1 md:grid-cols-2 my-16">
        {/* Left */}
        <div className="">
          <Link href={"/"}>
            <h2 className="jakarta-logo text-primary500">MORENT</h2>
          </Link>
          <p className=" max-w-[292px] jakarta-reular text-secondary500 text-opacity-60">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        {/* Right */}
        <div className="grid grid-cols-2 md:grid-cols-3">
          {footerData.map((item) => (
            <FooterContent key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className=" md:flex md:flex-row-reverse justify-between items-center text-xs space-y-5  text-secondary500 md:jakarta-reular md:text-sm lg py-6 border-t ">
        <div className="flex gap-6">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
        <div>©2022 MORENT. All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
