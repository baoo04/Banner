"use client";

import { FluentList } from "@/components/icons";
import { cn } from "@/config/utils";
import { useIsPc } from "@/hooks/useMediaQuery";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

interface HeaderNavProps {
  menus: { name: string; link: string; icon?: ReactNode }[];
}

const HeaderNav = ({ menus }: HeaderNavProps) => {
  const [isOpenNavMenu, setIsOpenNavMenu] = useState(false);
  const isPc = useIsPc();

  useEffect(() => {
    if (isPc) {
      setIsOpenNavMenu(false);
    }
  }, [isPc]);

  return (
    <div>
      <FluentList
        onClick={() => {
          setIsOpenNavMenu(!isOpenNavMenu);
        }}
        className="text-primary-600 relative select-none"
      />

      <div
        className={cn(
          "transition-all overflow-hidden absolute z-50 shadow-2xl bg-white w-[95%] top-10 mx-auto left-0 right-0 rounded-lg",
          isOpenNavMenu ? "fade-up" : "fade-down"
        )}
      >
        {menus.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="flex justify-between items-center py-3 px-4 border-b border-dark-200 hover:bg-primary-100 transition-colors duration-300 ease-in-out"
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
