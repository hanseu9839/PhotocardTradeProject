import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { CATEGORY } from "@/lib/utils/constant";
import { DataType } from "@/lib/types/dataType";
import { v4 as uuidv4 } from "uuid";
const SaleInput = () => {
  const [saleName, setSaleName] = useState("");
  const [saleCategory, setSaleCategory] = useState("");
  const [saleSelect, setSaleSelect] = useState("");
  const [saleContent, setSaleContent] = useState("");
  const [saleImg, setSaleImg] = useState("");
  const tradeList = ["직거래", "택배거래"];

  const router = useRouter();
  const imgRef = useRef<HTMLInputElement | null>();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaleName(e.target.value);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSaleCategory(e.target.value);
  };

  const hanldeSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSaleSelect(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSaleContent(e.target.value);
  };

  const handleSaleImage = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setSaleImg(reader.result.toString());
    };
  };

  const data: any = [
    {
      id: uuidv4(),
      name: saleName,
      category: saleCategory,
      select: saleSelect,
      content: saleContent,
      image: saleImg,
    },
  ];
  let newjson: any = [];

  const handleSaleSubmit = () => {
    if (localStorage.getItem("json")) {
      JSON.parse(localStorage.getItem("json"));
      let newjson = JSON.parse(localStorage.getItem("json"));
      newjson.push(data);
      console.log(newjson);
      localStorage.setItem("json", JSON.stringify(newjson));
    } else {
      newjson.push(data);
      localStorage.setItem("json", JSON.stringify(newjson));
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
                  src={saleImg ? saleImg : "/photocam.png"}
                  alt="이미지"
                  className="border-2 h-full"></img>
              </label>
              <input
                type="file"
                accept="image/*"
                id="imageUpload"
                className="hidden"
                onChange={handleSaleImage}
                ref={imgRef}
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
                onChange={handleName}></input>
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
            <div className="select">
              <div className="flex pb-7">
                <p className="pr-12 mr-1">거래형태</p>
                {tradeList.map((trade, index) => (
                  <>
                    <input
                      type="radio"
                      id={`select${index}`}
                      name="shop"
                      value={trade}
                      onChange={hanldeSelect}
                    />
                    <label htmlFor={`select${index}`}>{trade}</label>
                  </>
                ))}
              </div>
            </div>

            <div className="flex">
              <p className="pr-12">상품설명</p>
              <textarea
                onChange={handleContent}
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

export default SaleInput;
