"use client";

import React from "react";
import { CiSearch } from "react-icons/ci";
import { Input } from "../ui/input";
import { SlidersHorizontal } from "lucide-react";
import { useSelectedTypes } from "@/context/selectedTypesContext";


const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSelectedTypes(); // Use the context

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Update the search query
  };

  return (
    <div className="max-w-[492px] w-full h-[44px] flex rounded-full border items-center px-5 bg-primary0 border-secondary400 border-opacity-40">
      <CiSearch className="h-6 w-6" />
      <Input
        type="search"
        placeholder="Search something here"
        value={searchQuery}
        onChange={handleInputChange}
        className="h-6 poppins-regular border-none focus:outline-none active:border-none focus-visible:ring-offset-0 shadow-none focus:border-none  focus-visible:ring-0"
      />
      <SlidersHorizontal />
    </div>
  );
};

export default SearchBar;