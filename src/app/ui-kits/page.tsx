"use client";

// import CartPlus from "@/assets/icons/CartPlus";
// import Search from "@/assets/icons/Search";
import Input from "@/components/ui/Input";
import { cn } from "@/config/utils";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import { useState } from "react";
import Pagination from "@/components/ui/Pagination";

import Search from "@/components/icons/Search";
import Phone from "@/components/icons/Phone";
import CartPlus from "@/components/icons/CartPlus";
import CartShopping from "@/components/icons/CartShopping";
import ChevronDown from "@/components/icons/ChevronDown";
import DownAngle from "@/components/icons/DownAngle";
import Envelope from "@/components/icons/Envelope";
import Eye from "@/components/icons/Eye";
import EyeInvisible from "@/components/icons/EyeinVisible";
import Favorite from "@/components/icons/Favorite";
import FluentList from "@/components/icons/FluentList";
import Google from "@/components/icons/Google";
import User from "@/components/icons/User";
import Xmark from "@/components/icons/Xmark";
import RoundedUser from "@/components/icons/RoundedUser";
import LogoFurniture from "@/components/icons/LogoFurniture";
import Twitter from "@/components/icons/Twitter";
import Facebook from "@/components/icons/Facebook";

export default function UIKits() {
  const [selectedItem, setSelectedItem] = useState("");
  const [page, setPage] = useState(1);

  const onPaginationChange = (currentPage: number) => {
    console.log(currentPage);
    setPage(currentPage);
  };

  return (
    <>
      <main className={cn("mx-10 mt-10 mb-20 space-y-4")}>
        <div className="flex bg-primary-100 flex-col">
        <Search className="w-8 h-8 text-primary"/>
        <Phone className="w-10 h-10" fill="black"/>
        <CartPlus className="w-5 h-5"/>
        <CartShopping />
        <ChevronDown className="w-10 h-10" viewBox="0 0 18 18"/>
        <DownAngle className="w-10 h-10" viewBox="0 0 16 16"/>
        <Envelope />
        <Eye className="w-10 h-10"/>
        <EyeInvisible />
        <Favorite className="w-10 h-10" fill="red"/>
        <FluentList className="w-15 h-15"/>
        <Google className="w-8 h-8" viewBox="0 0 18 18"/>
        <User className="w-10 h-10" fill="red"/>
        <Xmark className="w-5 h-5"/>
        <RoundedUser/>
        <LogoFurniture  className="w-50 h-20"/>
        <Twitter/>
        <Facebook/>
        </div>

        <h1>Buttons</h1>
        <div className="space-x-2">
          <Button
            variant="outlined"
            onClick={() => {
              console.log("baodang");
            }}
          >
            <CartPlus /> Outlined Button
          </Button>
          <Button disabled variant="outlined">
            <CartPlus /> Disabled Outlined Button
          </Button>
          <Button>
            <CartPlus /> Primary Button
          </Button>
          <Button disabled>
            <CartPlus /> Disabled Primary Button
          </Button>
        </div>

        <h1>Inputs</h1>
        <Input
          type="text"
          placeholder="Outlined Input"
          error="Sample error"
          icon={<Search />}
        />
        <Input type="text" placeholder="Outlined Input" icon={<Search />} />
        <Input type="text" disabled placeholder="Disabled Input" />
        <Input
          type="text"
          variant={"standard"}
          placeholder="Standard Input"
          error="Sample error"
          icon={<Search />}
        />
        <Input type="text" variant={"filled"} placeholder="Filled Input" />

        <h1>Dropdown</h1>
        <Dropdown
          size="lg"
          className="w-60"
          isShowSearch
          value={selectedItem}
          onChange={setSelectedItem}
          placeholder="Chọn tỉnh / thành"
          options={[
            { value: "HN", label: "Hà Nội" },
            { value: "HD", label: "Hải Dương" },
            { value: "HP", label: "Hải Phòng" },
            { value: "HB", label: "Hòa Bình" },
            { value: "PT", label: "Phú Thọ" },
            { value: "CB", label: "Cao Bằng" },
            { value: "LS", label: "Lạng Sơn" },
            { value: "DB", label: "Điện Biên" },
            { value: "TH", label: "Thanh Hóa" },
          ]}
        />
        <Dropdown
          size="lg"
          className="w-60"
          placeholder="Chọn tỉnh / thành"
          options={[
            { value: "DB2", label: "Điện Biên 2" },
            { value: "TH2", label: "Thanh Hóa 2" },
          ]}
        />
        <Dropdown
          size="lg"
          disabled
          placeholder="Chọn tỉnh / thành"
          className="w-60"
          options={[
            { value: "HN", label: "Hà Nội" },
            { value: "HD", label: "Hải Dương" },
            { value: "HP", label: "Hải Phòng" },
            { value: "HB", label: "Hòa Bình" },
            { value: "PT", label: "Phú Thọ" },
            { value: "CB", label: "Cao Bằng" },
          ]}
        />
        <Dropdown
          size="sm"
          placeholder="Sản phẩm"
          options={[
            { value: "qa", label: "Quần áo" },
            { value: "gd", label: "Giày dép" },
          ]}
        />
        <Dropdown
          size="sm"
          disabled
          placeholder="Sản phẩm"
          options={[
            { value: "qa", label: "Quần áo" },
            { value: "gd", label: "Giày dép" },
          ]}
        />

        <h1>Pagination</h1>
        <Pagination
          total={200}
          currentPage={page}
          pageSize={10}
          onPageChange={onPaginationChange}
        />
      </main>
    </>
  );
}
