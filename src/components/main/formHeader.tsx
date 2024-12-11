import React from "react";

const FormHeader = ({
  title,
  para,
  stepNum,
}: {
  title: string;
  para: string;
  stepNum?: number | undefined;
}) => {
  return (
    <div className="flex justify-between items-end gap-1">
      <div className="space-y-1">
        <h2 className="font-bold text-xl capitalize leading-[30px] tracking-tighter text-text-dark">
          {title.trim()}
        </h2>
        <p className="text-secondary300 jakarta-small font-medium">{para.trim()}</p>
      </div>
{      stepNum&&<p className="para">Step {stepNum} of 4</p>}    </div>
  );
};

export default FormHeader;
