import React from "react";

interface CustomButtonProps {
  btnValue: string;
}

const CustomButtom : React.FC<CustomButtonProps> = ({btnValue}) => {
  return (
    <button className="border-2 rounded-2xl py-2 w-[50%] hover:bg-slate-400 font-bold transition-colors">
      {btnValue}
    </button>
  );
}

export default CustomButtom;
