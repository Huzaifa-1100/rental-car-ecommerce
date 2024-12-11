import React from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
  isPaymentMethod,
}: {
  label: string;
  placeholder: string;
  type?: string | undefined;
  isPaymentMethod: boolean;
}) => {
  return (
    <div className="space-y-4  flex flex-col items-start my-4 ">
      <label className="font-semibold text-[16px] leading-6 tracking-tight ">
        {label}
      </label>
      <input
        className={`rounded-[10px] placeholder:text-secondary300 focus:bg-text-light/20 p-4 h-14 ${
          isPaymentMethod ? "bg-primary0" : "bg-bg"
        }  lg:max-w-[360px] w-full `}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
