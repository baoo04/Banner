"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { cn } from "@/config/utils";
import Input from "@/components/ui/Input";
import { Eye, EyeInvisible, Google } from "@/components/icons";
import ToggleButton from "@/components/ui/ToggleButton";
import Button from "@/components/ui/Button";
import { PATH } from "@/constants/paths";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isRememberAccount, setIsRememberAccount] = useState(false);

  const handleChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="text-dark-850 text-xl font-bold text-center">
        Chào mừng đến với E-com
      </div>
      <div className="text-dark-200 text-xm text-center my-2">Đăng nhập</div>

      <div className="mx-auto flex flex-col gap-3">
        <Input
          label="Email"
          type="text"
          placeholder="Email"
          error="Vui lòng nhập email"
          onChange={handleChangeAccount}
        />

        <Input
          label="Mật khẩu"
          type={!isShowPassword ? "text" : "password"}
          placeholder="Mật khẩu"
          error="Vui lòng nhập mật khẩu"
          icon={
            <div
              className="cursor-pointer text-dark-300 select-none"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? <EyeInvisible /> : <Eye />}
            </div>
          }
          onChange={handleChangeAccount}
        />
      </div>

      <div className="flex items-center mx-auto my-2">
        <ToggleButton onClick={setIsRememberAccount} />
        <span
          className={cn(
            "text-sm ml-2",
            isRememberAccount ? "text-primary-900" : "text-dark-400"
          )}
        >
          Lưu đăng nhập
        </span>
      </div>

      <div className="text-center mt-5 mx-auto flex flex-col">
        <Button>Đăng nhập</Button>

        <div className="font-bold text-dark-200 text-sm py-5 relative">
          <span className="bg-white relative z-10 px-5">Hoặc</span>
          <div className="absolute bottom-[50%] left-0 w-full h-px bg-dark-200"></div>
        </div>

        <Button className="bg-white w-full mx-auto hover:bg-white-900 mb-2 border border-dark-200">
          <Google />
          <span className="w-[80%] text-dark-400">Đăng nhập với Google</span>
        </Button>

        <Link
          href={PATH.FORGET_PASSWORD}
          className="text-xs text-primary-900 font-bold mt-2"
        >
          Quên mật khẩu?
        </Link>

        <span className="text-xs text-dark-400 mt-2">
          Bạn chưa có tài khoản?
          <Link
            href={PATH.REGISTER}
            className="text-primary-900 font-bold ml-1"
          >
            Đăng kí ngay
          </Link>
        </span>
      </div>
    </>
  );
};

export default Login;
