import React from "react";

export interface CompanyInfoProps {
  number: string;
  text: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ number, text }) => {
  return (
    <div className="flex flex-col border-l-2 border-primary-green px-[24px] mt-10">
      <p className="text-[24px] font-semibold ">{number}</p>
      <p className="text-grayscale-400">{text}</p>
    </div>
  );
};

export default CompanyInfo;
