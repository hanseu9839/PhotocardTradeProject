import React, { useReducer, useState } from "react";
import saleReducer from "@/lib/utils/saleReducer";
import useSWR from "swr";
import storage from "@/lib/utils/storage";
import { CATEGORY } from "@/lib/utils/constant";
import { useRouter } from "next/router";

const New = () => {
  const initialState = {
    title: "",
    category: "",
    description: "",
  };
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [salesposting, dispatch] = useReducer(saleReducer, initialState);
  const { data: currentUser } = useSWR("user", storage);

  const handleTitle = (e: any) =>
    dispatch({ type: "SET_TITLE", text: e.target.value });
  const handleCategory = (e: any) =>
    dispatch({ type: "SET_CATEGORY", text: e.target.value });
  const handleDescription = (e: any) =>
    dispatch({ type: "SET_DESCRIPTION", text: e.target.value });
  let newjson: any = [];

  const handleSaleSubmit = () => {
    if (localStorage.getItem("posting")) {
      JSON.parse(localStorage.getItem("posting"));
      let newjson = JSON.parse(localStorage.getItem("posting"));
      newjson.push([salesposting, currentUser?.accessToken]);
      console.log(newjson);
      localStorage.setItem("posting", JSON.stringify(newjson));
    } else {
      newjson.push([salesposting, currentUser?.accessToken]);
      localStorage.setItem("posting", JSON.stringify(newjson));
    }
    router.push("/");
  };
  return (
    <>
      <div className="p-20 w-full  [text-align:-webkit-center]">
        <div className="w-[60%]">
          <div className="flex">
            <div className="w-[250px] h-[250px]">
              <label htmlFor="imageUpload">
                <img
                  src={"/photocam.png"}
                  alt="이미지"
                  className="border-2 h-full"></img>
              </label>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                className="hidden"
              />
            </div>
            <div className="w-full h-full pl-20 text-center text-lg">
              <ul className="flex grid grid-cols-3">
                <li>번호</li>
                <li>가격</li>
                <li>판매여부</li>
              </ul>
            </div>
          </div>
          <div className="pt-16">
            <div className="flex pb-7">
              <p className="pr-16">상품명</p>
              <input
                className="border-2 w-[50%] pl-2 text-sm"
                placeholder="상품명을 입력해주세요"
                onChange={handleTitle}></input>
            </div>

            <div className="flex pb-7">
              <label htmlFor="category" className="pr-12 mr-1">
                카테고리
              </label>
              <select
                name="group"
                id="category"
                className="border-2 w-[50%] pl-1 text-sm text-slate-400"
                onChange={handleCategory}>
                <option>카테고리를 선택해주세요</option>
                {CATEGORY.map((group) => (
                  <option value={group.engname}>{group.korname}</option>
                ))}
              </select>
            </div>

            <div className="flex">
              <p className="pr-12">상품설명</p>
              <textarea
                onChange={handleDescription}
                className="border-2 rounded-xl pb-14 w-[50%]"></textarea>
            </div>
          </div>
          <div className="flex justify-end pr-20">
            <button
              onClick={handleSaleSubmit}
              className="bg-black text-white rounded-md px-3 py-1">
              등록하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default New;
