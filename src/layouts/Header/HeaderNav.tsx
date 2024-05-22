"use client";

import { FluentList } from "@/assets/icons";
import { cn } from "@/config/utils";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface HeaderNavProps {
  menus: { name: string; link: string; icon?: ReactNode }[];
}

const HeaderNav = ({ menus }: HeaderNavProps) => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);

  return (
    <div>
      <FluentList
        onClick={() => {
          setIsOpenNavMenu(!isOpenNavMenu);
        }}
        className="cursor-pointer relative"
      />
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden xl:hidden top-10 absolute z-50",
          isOpenNavMenu
            ? "bg-primary-100 left-0 w-full opacity-100 shadow-lg rounded-lg"
            : "hidden"
        )}
      >
        {menus.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex justify-between items-center py-2 px-4 border-b border-dark-200 hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
          >
            {item.name}
            {item.icon && <span className="ml-2">{item.icon}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeaderNav;
