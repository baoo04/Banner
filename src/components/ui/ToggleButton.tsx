"use client";

import { cn } from "@/config/utils";
import { useState } from "react";

interface ToggleButtonProps {
  onClick: (isRememberAccount: boolean) => void;
  backgroundColor: string;
}

const ToggleButton = ({ onClick, backgroundColor }: ToggleButtonProps) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    const newToggleState = !isToggle;
    setIsToggle(newToggleState);
    onClick?.(newToggleState);
  };

  return (
    <div
      className={cn(
        'inline-block pointer-events-auto h-6 w-11 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out ring-black/20 hover:cursor-pointer',
        isToggle ? backgroundColor : 'bg-[white]'
      )}
      onClick={handleToggle}
    >
      <div
        className={cn(
          'h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out',
          isToggle ? 'translate-x-5' : 'translate-x-0'
        )}
      ></div>
    </div>
  );
};

export default ToggleButton;
