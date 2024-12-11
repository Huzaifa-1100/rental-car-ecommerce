"use client";
import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SelectInput = ({
  options,
  label,
  placeholder,
}: {
  options: string[];
  label: string;
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setInputValue(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (!event.target.closest('.select-input')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="space-y-4 flex flex-col items-start select-input">
      <label className="font-semibold text-[16px] leading-6 tracking-tight text-text-dark">
        {label}
      </label>
      {/* I am not using select tag because here I want to customize that arrow we
      can do that by using webkit things but I dont wanna get in it so i think
      this */}
      <div className="relative lg:max-w-[360px] w-full">
        <input
          className="rounded-[10px] bg-bg  p-4 h-14 w-full"
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onClick={toggleDropdown}
          readOnly
        />
        <div
          className="absolute right-4 top-1/2 transform text-text-light -translate-y-1/2 cursor-pointer"
          onClick={toggleDropdown}
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {/* Dropdown List */}
        {isOpen && (
          <div className="absolute z-10 bg-white shadow-md rounded-[10px] w-full mt-2 max-h-28 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option}
                className="p-3 cursor-pointer hover:bg-gray-200"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
