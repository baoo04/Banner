"use client"

import React from 'react';
import { cn } from '@/config/utils';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  fill?: string;
  className?: string;
  viewBox?: string;
}

const SvgIcon: React.FC<IconProps> = ({ name, className ,fill ,viewBox , ...props }) => (
  <svg className={cn("cursor-pointer",className)} fill={fill} viewBox={viewBox} {...props} >
    <use xlinkHref={`/sprites.svg#icon-${name}`}/>
  </svg>
);

export default SvgIcon;
