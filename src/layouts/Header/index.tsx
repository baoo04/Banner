import React from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import {
  Envelope,
  Phone,
  User,
  Search,
  Favorite,
  CartShopping,
  DownAngle,
  RoundedUser,
  LogoFurniture,
  Instagram
} from "@/components/icons/";

import HeaderNav from "./HeaderNav";

const menus = [
  {
    name: "Trang chủ",
    link: "#",
  },
  {
    name: "Sản phẩm",
    link: "#",
    icon: <DownAngle />,
  },
  {
    name: "Tin tức",
    link: "#",
  },
  {
    name: "Vouncher",
    link: "#",
  },
  {
    name: "Combo tặng thưởng",
    link: "#",
  },
];

const Header = () => {
  return (
    <header>
      <div className="bg-primary-900 text-white py-4 top-0 z-10 xl:block hidden">
        <div className="flex justify-between items-center">
          <div className="w-4/5 mx-auto flex justify-between">
            <div className="flex gap-20 items-center">
              <Link href="#" className="text-sm flex gap-1 items-center">
                <Envelope /> Ecommerce@gmail.com
              </Link>
              <Link href="#" className="text-sm flex gap-1 items-center">
                <Phone /> 0974659677
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <User />{" "}
              <div className="flex text-white text-sm gap-1">
                <Link href="#" className="hover:underline">
                  Đăng nhập
                </Link>
                <div>/</div>
                <Link href="#" className="hover:underline">
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden py-2 bg-white xl:block">
        <nav className="md:w-4/5 px-3 lg:px-0 mx-auto flex justify-between items-center">
          <Link href="#">
            <LogoFurniture />
          </Link>
          <div className="hidden gap-5 xl:flex">
            {menus.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="flex gap-2 items-center"
              >
                {item.name}
                {item.icon && item.icon}
              </Link>
            ))}
          </div>
          <Input
            type="text"
            variant={"standard"}
            placeholder="Tìm kiếm sản phẩm"
            error=""
            icon={<Search className="text-primary-900"/>}
            className="w-[200px] xxl:w-[300px]"
          />
          <div className="flex gap-5 items-center">
            <Link className="flex flex-col items-center" href="#">
              <Favorite fill="none" className="text-white w-6 h-6" />
              <span className="text-primary-900">Đã lưu</span>
            </Link>
              <Link className="flex flex-col items-center" href="#">
                <CartShopping className="text-primary-200"/>
                <span className="text-primary-900">Giỏ hàng</span>
              </Link>
            </div>
        </nav>
      </div>

      <div className="bg-white xl:hidden flex px-6 py-3 justify-between items-center">
        <HeaderNav menus={menus} />
        <Link href="#">
          <LogoFurniture className="text-primary-600"/>
        </Link>
        <div className="flex gap-2">
          <Link href="#">
            <CartShopping className="text-white-900" fill="none"/>
          </Link>
          <RoundedUser className="text-white-900"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
