"use client";
import React, { FormEventHandler, useRef } from "react";
import { login } from "@/libs/api/private.api";
import { AdminDto } from "@/libs/dto/admin/AdminDto";

export default function AdminLogin() {
  const nameRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const onSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();

    let name;
    let pw;

    if (nameRef.current && pwRef.current) {
      name = nameRef.current.value;
      if (name !== process.env.NEXT_PUBLIC_ADMIN_NAME) {
        alert("존재하지 않는 ID 입니다.");
        return;
      }

      pw = pwRef.current.value;
    } else {
      alert("ref 가 정상적으로 설정되어있지 않음");
      return;
    }

    if (name && pw) {
      const adminDto = new AdminDto(name, pw);
      login(adminDto)
        .then(() => location.reload())
        .catch((e) => {
          if (e instanceof Error) alert(e.message);
        });
    }
  };

  return (
    <div className="flex w-full p-5  justify-center items-center">
      <div className="w-full bg-gray-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-8 space-y-2 md:space-y-4">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl">
            로그인
          </h1>
          <form
            onSubmit={onSubmit}
            className="space-y-3 md:space-y-4"
            action="#"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                이름
              </label>
              <input
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                placeholder="이름을 입력해주세요"
                ref={nameRef}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
                ref={pwRef}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
