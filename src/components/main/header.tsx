import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { SlidersHorizontal } from "lucide-react";
import { IoHeartSharp, IoNotifications } from "react-icons/io5";
import Image from "next/image";
import SearchBar from "../sub/searchBar";

const Header = () => {
  return (
    <header className="wrapper ">
      {/* Computer */}
      <div className="h-[124px] hidden md:flex justify-between items-center">
        {/* Left */}
        <div>
          <Link href={"/"}>
            <h1 className="jakarta-logo text-primary500">MORENT</h1>
          </Link>
        </div>

        {/* Center  Searchbar*/}
       <SearchBar/>

        {/* Right */}
        <div className="flex gap-5">
          <div className="h-11 w-11 hidden lg:block rounded-full text-2xl p-[9px] border">
            <IoHeartSharp />
          </div>
          <div className="h-11 w-11 hidden lg:block rounded-full text-2xl p-[9px] border">
            <IoNotifications />
          </div>
          <div>
            <Link href={"/dashboard"}>
              <Image
                src={"/header/01.png"}
                alt={"login image"}
                height={44}
                width={44}
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="h-[124px] flex justify-between items-center">
          {/* Left */}
          <div>
            <Link href={"/"}>
              <h1 className="jakarta-logo text-primary500">MORENT</h1>
            </Link>
          </div>

          {/* Right */}
          <div className="flex gap-5">
            <div>
              <Link href={"/dashboard"}>
                <Image
                  src={"/header/01.png"}
                  alt={"login image"}
                  height={44}
                  width={44}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* Center */}
        <div className="flex justify-between  items-center w-full gap-3">
          <div className=" h-[44px] w-full flex rounded-md border items-center px-5 bg-primary0 border-secondary400 border-opacity-40">
            <CiSearch className="h-6 w-6" />
            <Input
              type="search"
              placeholder="Search something here"
              className="h-6 poppins-regular border-none focus:outline-none active:border-none focus-visible:ring-offset-0 shadow-none focus:border-none  focus-visible:ring-0"
            />
          </div>
          <div className="h-[44px] w-[44px] border bg-primary0 border-secondary400 border-opacity-40 p-2 ">
            <SlidersHorizontal />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
