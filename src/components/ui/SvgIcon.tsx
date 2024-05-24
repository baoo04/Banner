"use client";

import React from "react";
import { cn } from "@/config/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

const SvgIcon: React.FC<IconProps> = ({ name, className, ...props }) => (
  <svg className={cn("cursor-pointer", className)} {...props}>
    <use xlinkHref={`/sprites.svg#icon-${name}`} />
  </svg>
);

export default SvgIcon;
